// View.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './View.css';
import data1 from '../data';
const View = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/add');
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Display the data in a table or a message
  let content;
  if (!(data.length === 0)) {
    content = (
      <tr>
        <td colSpan="5">No medicines added yet</td>
      </tr>
    );
  } else {
    content = data1.map((item, index) => (
      <tr key={index}>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.medicine}</td>
        <td>{item.mfd}</td>
        <td>{item.exp}</td>
      </tr>
    ));
  }

  return (
    <div className="view-container">
      <h2 className="view-title">Your medicines</h2>
      <table className="view-table">
        <thead>
          <tr>
            <th>Hospital Name</th>
            <th>Email</th>
            <th>Medicine</th>
            <th>Mfd</th>
            <th>Exp</th>
          </tr>
        </thead>
        <tbody>{content}</tbody>
      </table>
    </div>
  );
};

export default View;
