import React from 'react';
const NavBar = ({ searchTerm, setSearchTerm }) => {
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="navbar">
      <h1>Sales App</h1>
      <div className="search-bar">
        <input type="text" placeholder="Search..." value={searchTerm} onChange={handleSearchChange} />
        <button type="button">Search</button>
      </div>
    </div>
  );
};

export default NavBar;

