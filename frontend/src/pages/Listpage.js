import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../stylesheets/styles.css";

const Listpage = () => {
  const [userList, setuserList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const responses = await axios.get("http://localhost:5000/user");
      console.log(responses.data);
      setuserList(responses.data);
    } catch (error) {
      alert(error);
    }
  };

  const handleDelete = async (userID) => {
    try {
      const response = await axios.delete(
        "http://localhost:5000/user/" + userID
      );
      alert(response.data);
      fetchData();
    } catch (error) {
      alert(error);
    }
  };

  const handleEdit = (userID) => {
    navigate("/form/" + userID);
  };

  return (
   
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Weight</th>
              <th>Color</th>
              <th>Country</th>
              <th>Total Cost</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user) => {
              return (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.Name}</td>
                  <td>{user.Weight}</td>
                  <td>{user.Color}</td>
                  <td>{user.Country}</td>
                  <td>{user.Cost}</td>
                  <td>
                    <button
                      className="btn"
                      onClick={() => handleEdit(user._id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn"
                      onClick={() => handleDelete(user._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
   
  );
};

export default Listpage;
