import { useState } from "react";
import { supabase } from "../src/client";
import "./Create.css";

const Create = () => {
  const [post, setPost] = useState({ title: "", image: "", content: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const createPost = async (event) => {
    event.preventDefault();

    const { error } = await supabase
      .from("posts")
      .insert({
        title: post.title,
        image: post.image,
        content: post.content,
        likes: 0,
      })
      .select();

    if (error) {
      console.log(error);
    }

    window.location = "/";
  };

  return (
    <div className="form">
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
        <input type="submit" value="Create Post" onClick={createPost} />
      </form>
    </div>
  );
};

export default Create;
