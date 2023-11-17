import React, { useContext } from "react";
import "./HomePage.css";
import UserContext from "../auth/UserContext";

const HomePage = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="HomePage-Content">
      {currentUser ? (
        <>
          <h1>Jobly</h1>
          <p>All the jobs in one, convenient place.</p>
          <h2>Welcome Back, {currentUser.username}</h2>
        </>
      ) : (
        <h1>Welcome to Jobly, Sign up</h1>
      )}
    </div>
  );
};

export default HomePage;
