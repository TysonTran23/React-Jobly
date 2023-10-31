import React, { useState } from "react";

const ProfileForm = () => {
  const INITIAL_STATE = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
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
          id="username"
          name="username"
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="password">
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="firstName">
        <input
          id="firstName"
          name="firstName"
          type="text"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="lastName">
        <input
          id="lastName"
          name="lastName"
          type="text"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="email">
        <input
          id="email"
          name="email"
          type="text"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  );
};

export default ProfileForm;
