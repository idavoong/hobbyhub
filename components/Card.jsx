import { useState, useEffect } from "react";
import { supabase } from "../src/client.jsx";
import "./Card.css";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Card = ({ id, time, title, likes }) => {
  const date = new Date(time);
  const [count, setCount] = useState(0);

  useEffect(() => {
    updateCount();
  }, [likes]);

  const updateCount = async (event) => {
    event.preventDefault();

    await supabase
      .from("Posts")
      .update({ likes: count + 1 })
      .eq("id", id);

    setCount((count) => count + 1);
  };

  return (
    <div className="card">
      <div>
        <h3>
          Posted: {date.getMonth()}-{date.getDay()}-{date.getFullYear()}
        </h3>
        <Link to={"/post/" + id}>
          <h2 className="title">{title}</h2>
        </Link>
      </div>
      <div>
        <button className="likes" onClick={updateCount}>
          Likes: {count}
        </button>
        <Link to={"/edit/" + id}>
          <button className="">Edit</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
