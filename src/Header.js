import React from "react";
import './App.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header-container'>
      <Link to="/" className="link" >Dashboard</Link>
      <Link to="/contact" className="link">ContactUs</Link>
      <Link to="/login" className="link">Login</Link>
    </div>
  );
}

export default Header;
