import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../auth/UserContext";
import "./NavBar.css";

const NavBar = () => {
  const { currentUser, logout } = useContext(UserContext);

  return (
    <nav className="NavBar">
      <Link to="/" className="homeLink">
        Jobly
      </Link>
      <div className="navItems">
        {currentUser ? (
          <>
            <Link to="/companies">Companies</Link>
            <Link to="/jobs">Jobs</Link>
            <Link to="/profile">Profile</Link>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">SignUp</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
