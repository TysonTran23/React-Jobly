import React, { useState } from "react";

const LoginForm = () => {
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
    </form>
  );
};

export default LoginForm;
