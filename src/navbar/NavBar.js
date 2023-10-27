import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to="/">HomePage</Link>
            <Link to="/companies">Companies</Link>
            <Link to="/companies/apple">Company: Apple</Link>
            <Link to="/jobs">Jobs</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">SignUp</Link>
            <Link to="/profile">Profile</Link>
        </nav>
    )
}

export default NavBar
