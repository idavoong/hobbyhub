import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../src/client";
import "./Post.css";

const Post = () => {
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

  return (
    <div className="post">
      <h1>{post.title}</h1>
      <img src={post.image} alt={post.title} />
      <p>{post.content}</p>
    </div>
  );
};

export default Post;
