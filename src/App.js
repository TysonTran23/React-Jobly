import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import AppRoutes from "./routes/Routes";
import NavBar from "./navbar/NavBar";
import UserContext from "./auth/UserContext";
import JoblyApi from "./api/api";
import { jwtDecode } from "jwt-decode";
import { saveToken, getToken, removeToken } from "./token/tokenService";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);
  const [jobsAppliedForID, setJobsAppliedForID] = useState(new Set([]));

  useEffect(() => {
    async function getCurrentUser() {
      try {
        const token = getToken();
        if (token) {
          const { username } = jwtDecode(token);
          JoblyApi.token = token;
          let currentUser = await JoblyApi.getCurrentUser(username);
          setCurrentUser(currentUser);
        }
      } catch (e) {
        console.log(e);
        logout();
      }
    }
    getCurrentUser();
  }, [token]);

  async function login(username, password) {
    try {
      let loginUserToken = await JoblyApi.login(username, password);
      setToken(loginUserToken);
      saveToken(loginUserToken);
    } catch (e) {
      console.log(e);
    }
  }

  async function signup(data) {
    try {
      let signupUserToken = await JoblyApi.signup(data);
      setToken(signupUserToken);
      saveToken(signupUserToken);
      JoblyApi.token = signupUserToken;
    } catch (e) {
      console.log(e);
    }
  }

  async function logout() {
    try {
      setCurrentUser(null);
      setToken(null);
      removeToken();
    } catch (e) {
      console.log(e);
    }
  }

  function hasAppliedToJob(id) {
    return jobsAppliedForID.has(id);
  }

  async function applyingToJob(id) {
    try {
      console.log(id);
      if (hasAppliedToJob(id)) return;
      await JoblyApi.applyToJob(currentUser.username, id);
      setJobsAppliedForID(new Set([...jobsAppliedForID, id]));
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider
          value={{
            currentUser,
            login,
            logout,
            signup,
            applyingToJob,
            hasAppliedToJob,
          }}
        >
          <NavBar />
          <AppRoutes />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
