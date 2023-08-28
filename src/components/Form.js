// src/components/Form.js
import React, { useState, useEffect } from "react";
// import "./Form.css";

const Form = ({ addData, editingData }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    state: "",
    country: "",
    gender: "",
    file: null,
  });

  useEffect(() => {
    if (editingData) {
      // If editingData exists, populate the form with its values
      setFormData(editingData);
    }
  }, [editingData]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    const newValue = type === "file" ? files[0] : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addData(formData);
    setFormData({
      firstName: "",
      lastName: "",
      address: "",
      state: "",
      country: "",
      gender: "",
      file: null,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Address:
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        State:
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Country:
        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
        >
          <option value="">Select a country</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          {/* Add more countries */}
        </select>
      </label>
      <label>
        Gender:
        <label>
          Male:
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={formData.gender === "Male"}
            onChange={handleChange}
          />
        </label>
        <label>
          Female:
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={formData.gender === "Female"}
            onChange={handleChange}
          />
        </label>
      </label>
      <label>
        Upload File:
        <input type="file" name="file" onChange={handleChange} />
      </label>
      <button type="submit">{editingData ? "Update Data" : "Add Data"}</button>
    </form>
  );
};

export default Form;
