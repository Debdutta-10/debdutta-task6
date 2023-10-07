import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <h2>Debdutta Mukherjee</h2>
      </div>
      <div className="other">
        <Link to="/">Home</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/mywork">My Work</Link>
        <Link to="/contact">Contact Me</Link>
      </div>
    </nav>
  );
}
