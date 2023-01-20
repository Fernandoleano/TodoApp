import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="topnav">
      <nav>
          <Link to='/home' className="links">Home</Link>
          <Link to='/about' className="links">About</Link>
          <Link to='/main' className="links">Todo List</Link>
        </nav>
    </div>
  )
}

export default NavBar
