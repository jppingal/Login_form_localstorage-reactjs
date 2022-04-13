import React, { useEffect, useState } from "react";
import "./index.css";
import { useLocalStorage } from "./useLocalStorage";

// to get localstorahge data from local Strorage
const getLocalItems = () => {
  let users = localStorage.getItem('userData');
  console.log("local data", users);

  if (users) {
    return JSON.parse(localStorage.getItem('userData'));
  } else {
    return [];
  }
};

const SignIn = () => {
  // this is useLocalStorage custom Hook
  // const [items, setItems] = useLocalStorage("Form Datas", "");
  const [items, setItems] = useState(getLocalItems());
  const [valid, setValid] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [data, setData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleInputChange = (event) => {
    setData((prevProps) => ({
      ...prevProps,
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (data.username && data.email && data.password) {
      setValid(true);
    }
    setItems([...items, data]);
    console.log(items);
    setSubmitted(true);
  };

  //  add to localstorage of userDetail(item)
  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(items))
  }, [items]);

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Login Us</h2>
        <div className="form-data">
          <input
            type="text"
            name="username"
            value={data.username}
            placeholder="Enter Your Username"
            autoComplete="off"
            onChange={handleInputChange}
          />
          {submitted && !data.username && <p id='last-name-error'>Please Enter Username</p>}
        </div>
        <div className="form-data">
          <input
            type="email"
            name="email"
            value={data.email}
            placeholder="Enter Your Email Id"
            autoComplete="off"
            onChange={handleInputChange}
          />
          {submitted && !data.email && <p id='last-name-error'>Please Enter a Email-Id</p>}
        </div>
        <div className="form-data">
          <input
            type="password"
            name="password"
            value={data.password}
            placeholder="Enter Your Password"
            autoComplete="off"
            onChange={handleInputChange}
          />
          {submitted && !data.password && <p id='last-name-error'>Please enter Password</p>}
        </div>
        <div className="form-control">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
export default SignIn;