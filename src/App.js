import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import AppRoutes from "./routes/Routes";
import NavBar from "./navbar/NavBar";
import UserContext from "./auth/UserContext";
import JoblyApi from "./api/api";
import { jwtDecode } from "jwt-decode";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    async function getCurrentUser() {
      try {
        if (token) {
          const { username } = jwtDecode(token);
          JoblyApi.token = token;
          let currentUser = await JoblyApi.getCurrentUser(username);
          setCurrentUser(currentUser);
        }
      } catch (e) {
        console.log(e);
      }
    }
    getCurrentUser();
  }, [token]);

  async function login(username, password) {
    try {
      let loginUserToken = await JoblyApi.login(username, password);
      setToken(loginUserToken);
      JoblyApi.token = loginUserToken;
    } catch (e) {
      console.log(e);
    }
  }

  async function signup(data) {
    try {
      let signupUserToken = await JoblyApi.signup(data);
      setToken(signupUserToken);
      JoblyApi.token = signupUserToken;
    } catch (e) {
      console.log(e);
    }
  }

  async function logout() {
    try {
      setCurrentUser(null);
      setToken(null);
      JoblyApi.token = null;
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{ currentUser, login, logout, signup }}>
          <NavBar />
          <AppRoutes />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
