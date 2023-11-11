import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Create from "../routes/Create.jsx";
import Edit from "../routes/Edit.jsx";
import Post from "../routes/Post.jsx";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index={true} element={<App />} />
        <Route path="/create-post" element={<Create />}/>
        <Route path="/edit/:id" element={<Edit />}/>
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
