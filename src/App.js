// src/App.js
import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Form from "./components/Form";
import "./App.css";

function App() {
  const [dataList, setDataList] = useState([]);
  const [editingData, setEditingData] = useState(null);

  useEffect(() => {
    // Load data from local storage on component mount
    const storedData = JSON.parse(localStorage.getItem("dataList"));
    if (storedData) {
      setDataList(storedData);
    }
  }, []);

  useEffect(() => {
    // Save data to local storage whenever dataList changes
    localStorage.setItem("dataList", JSON.stringify(dataList));
  }, [dataList]);

  const addData = (formData) => {
    if (editingData) {
      // If editingData exists, update the existing data
      const updatedList = dataList.map((data) => {
        if (data === editingData) {
          return formData;
        }
        return data;
      });
      setDataList(updatedList);
      setEditingData(null);
    } else {
      // If editingData doesn't exist, add new data
      setDataList([...dataList, formData]);
    }
  };

  const deleteData = (formDataToDelete) => {
    const updatedList = dataList.filter((data) => data !== formDataToDelete);
    setDataList(updatedList);
  };

  const editData = (formDataToEdit) => {
    setEditingData(formDataToEdit);
  };

  return (
    <div className="app">
      <h1>CRUD App with Local Storage</h1>
      <Form addData={addData} editingData={editingData} />
      <div className="card-container">
        {dataList.map((data, index) => (
          <Card
            key={index}
            data={data}
            onDelete={deleteData}
            onEdit={editData}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
