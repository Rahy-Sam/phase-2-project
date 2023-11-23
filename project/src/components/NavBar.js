import React from 'react';

const NavBar = ({ searchTerm, onSearchChange }) => {
  const handleSearchChange = (event) => {
    onSearchChange(event.target.value);
  };

  return (
    <div className="navbar">
      <h1>Sales App</h1>
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

export default NavBar;
