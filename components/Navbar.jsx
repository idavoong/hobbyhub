import { Outlet, Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="links">
        <li className="home link">
          <Link to="/" className="text">Home</Link>
        </li>
        <li className="create link">
          <Link to="/create-post" className="text">Create New Post</Link>
        </li>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
