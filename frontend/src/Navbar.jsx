import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Hotel Database</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/views">Views</Link>
        <Link to="/tables">Tables</Link>
        <Link to="/employees">Employees</Link>
      </div>
    </nav>
  );
};

export default Navbar;
