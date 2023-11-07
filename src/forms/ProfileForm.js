import React, { useState, useContext } from "react";
import UserContext from "../auth/UserContext";
import JoblyApi from "../api/api";

const ProfileForm = () => {
  const { currentUser } = useContext(UserContext);

  const INITIAL_STATE = {
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
  };

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let userData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
    };

    let username = formData.username;
    let updatedUser;

    try {
      updatedUser = await JoblyApi.saveUser(username, userData);
    } catch (e) {
      console.log(e);
    }

    setFormData((f) => ({ ...f }));
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button>Save Changes</button>
    </form>
  );
};

export default ProfileForm;
