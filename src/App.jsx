import { useState, useEffect } from 'react'
import Card from '../components/Card';
import { supabase } from "../src/client.jsx";
import './App.css'

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // READ all post from table

    async function fetchPost() {
      const { data } = await supabase
        .from("posts")
        .select()
        .order("created_at", { ascending: true });

      // set state of posts
      setPosts(data);
    }
    fetchPost();
  }, []);

  return (
    <div className="posts">
      {posts && posts.length > 0 ? (
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
  );
}

export default App
