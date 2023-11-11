import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../src/client";
import "./Edit.css";

const Edit = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    async function fetchPost() {
      const { data } = await supabase
        .from("posts")
        .select()
        .eq("id", id)
        .single();

      setPost(data);
    }

    fetchPost();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const updatePost = async (event) => {
    event.preventDefault();

    await supabase
      .from("posts")
      .update({
        title: post.title,
        image: post.image,
        content: post.content,
      })
      .eq("id", id);

    window.location = "/";
  };

  async function deletePost(event) {
    event.preventDefault();

    await supabase.from("posts").delete().eq("id", id);

    window.location = "/";
  }

  return (
    <>
      <div className="form">
        <h1>Edit your post</h1>
        <form>
          <div className="section">
            <label>Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={post.title}
              onChange={handleChange}
            />
          </div>
          <div className="section">
            <label>Image URL</label>
            <input
              type="text"
              id="image"
              name="image"
              value={post.image}
              onChange={handleChange}
            />
          </div>
          <div className="section">
            <label>Description</label>
            <textarea
              name="content"
              rows="5"
              cols="50"
              id="content"
              value={post.content}
              onChange={handleChange}
            ></textarea>
          </div>
          <input type="submit" value="Update Post" onClick={updatePost} />
        </form>
        <button className="deleteButton" onClick={deletePost}>
          Delete Post
        </button>
      </div>
    </>
  );
};

export default Edit;
