import { useState, useEffect } from "react";
import { supabase } from "../src/client.jsx";
import "./Card.css";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Card = ({ id, time, title, likes }) => {
  const date = new Date(time);
  console.log(date)
  const [count, setCount] = useState(likes);

  useEffect(() => {
    addCount();
  }, [likes]);

  const addCount = async (event) => {
    event.preventDefault();

    await supabase
      .from("posts")
      .update({ likes: likes + 1 })
      .eq("id", id);

    setCount((count) => count + 1);
  };

  // const updateCount = async (event) => {
  //   event.preventDefault();

  //   await supabase
  //     .from("posts")
  //     .select()
  //     .eq("id", id);
  // }

  return (
    <div className="card">
      <div>
        <h3>
          Posted: {date.getMonth() + 1}-{date.getDate()}-{date.getFullYear()}
        </h3>
        <Link to={"/post/" + id}>
          <h2 className="title">{title}</h2>
        </Link>
      </div>
      <div>
        <button className="likes" onClick={addCount}>
          Likes: {likes}
        </button>
        <Link to={"/edit/" + id}>
          <button className="">Edit</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
