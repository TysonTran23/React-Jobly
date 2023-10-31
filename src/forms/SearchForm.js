import React, { useState } from "react";

const SearchForm = () => {
  const initialState = {
    term: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="term">
        <input
          type="text"
          id="term"
          name="term"
          placeholder="Search Term"
          value={formData.term}
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  );
};

export default SearchForm;
