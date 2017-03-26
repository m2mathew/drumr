// External Dependencies
import React from 'react';
import {
  Link
} from 'react-router-dom'

const navStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  maxWidth: 1440,
  height: 64,
  margin: '0 auto',
  padding: '0 24px',
  boxSizing: 'border-box',
	borderBottom: '4px solid #555',
};

// Component Definition
const TopNav = () => {
  return (
    <nav className="nav-container" style={navStyles}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/add">Add</Link></li>
      </ul>
    </nav>
  );
};

export default TopNav;
