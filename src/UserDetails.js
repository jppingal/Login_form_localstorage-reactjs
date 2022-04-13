import React, { useState } from "react";
import "./index.css";

// to get localstorahge data from local Strorage

const getLocalItems = () => {
  let users = localStorage.getItem('userData');
  console.log("Table data", users);

  if (users) {
    return JSON.parse(localStorage.getItem('userData'));
  } else {
    return [];
  }
};

function UserDetails() {
  const [items, setItems] = useState(getLocalItems());
  return (
    <div className='user-container'>
      <h1>Wellcome in UserDatails Page..!</h1>
      <div className="table-data">
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email-Id</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {items.map((newArr, index) => {
              return (<tr key={index}>
                <td>{newArr.username}</td>
                <td>{newArr.email}</td>
                <td>{newArr.password}</td>
              </tr>)
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserDetails;