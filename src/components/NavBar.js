import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ searchTerm, onSearchChange }) => {
  const handleSearchChange = (event) => {
    onSearchChange(event.target.value);
  };

  return (
    <div className="navbar" style={navbarStyle}>
      <div className="navbar-center">
        <Link to="/">
          <h1>Sales App</h1>
        </Link>
      </div>
      <div className="navbar-right">
        <Link to="/contacts" style={linkStyle}>
          Contacts
        </Link>
        <Link to="/" style={linkStyle}>
          Home
        </Link>
        
        <Link to="/cart" style={linkStyle}>
          Shopping Cart
        </Link>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Searching..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="button">Search</button>
      </div>
    </div>
  );
};

const navbarStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px',
  backgroundColor: '#333',
  color: 'white',
};

const linkStyle = {
  marginLeft: '10px',
  color: 'white',
  textDecoration: 'none',
};

export default NavBar;
