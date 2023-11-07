import React, { useState, useContext } from "react";
import UserContext from "../auth/UserContext";

const LoginForm = () => {
  const { login } = useContext(UserContext);

  const INITIAL_STATE = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData.username, formData.password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          value={formData.username}
        />
      </label>
      <label htmlFor="password">
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={formData.password}
        />
      </label>
      <button>Login</button>
    </form>
  );
};

export default LoginForm;
