// src/components/Card.js
import React from "react";
import "./Card.css";

const Card = ({ data, onDelete, onEdit }) => {
  return (
    <div className="card">
      <h2>
        {data.firstName} {data.lastName}
      </h2>
      <p>Address: {data.address}</p>
      <p>State: {data.state}</p>
      <p>Country: {data.country}</p>
      <p>Gender: {data.gender}</p>
      <p>File: {data.file ? data.file.name : "No file selected"}</p>
      <button onClick={() => onEdit(data)}>Edit</button>
      <button onClick={() => onDelete(data)}>Delete</button>
    </div>
  );
};

export default Card;
