import { useState, useEffect } from "react";
import Card from "../components/Card";
import { supabase } from "../src/client.jsx";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [sort, setSort] = useState("created_at");

  useEffect(() => {
    // READ all post from table

    async function fetchPost() {
      const { data } = await supabase
        .from("posts")
        .select()
        .order(sort, { ascending: true });

      // set state of posts
      setPosts(data);
    }
    fetchPost();
  }, [sort]); 

  const handleSort = (event) => {
    if (event.target.id == "popular"){ 
      setSort("likes");
    } else {
      setSort("created_at");
    }
  }

  return (
    <>
      <div className="sort">
        <button className="sortButton" id="new" onClick={handleSort}>Newest</button>
        <button className="sortButton" id="popular" onClick={handleSort}>Most Popular</button>
      </div>
      <div className="posts">
        {sort && posts && posts.length > 0 ? (
          posts.map((post) => (
            // eslint-disable-next-line react/jsx-key
            <Card
              id={post.id}
              time={post.created_at}
              title={post.title}
              likes={post.likes}
            />
          ))
        ) : (
          <h2>{"No Posts Yet"}</h2>
        )}
      </div>
    </>
  );
}

export default App;
