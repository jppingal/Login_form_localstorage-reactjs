import React from "react";
import './App.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header-container'>
      <Link to="/" className="link" >Dashboard</Link>
      <Link to="/login" className="link">Login</Link>
      <Link to="/users" className="link" >Users</Link>
      <Link to="/contact" className="link" >ContactUs</Link>
    </div>
  );
}

export default Header;
