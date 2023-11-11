import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index={true} element={<App />} />
        <Route path="/create-post" element={<App />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
