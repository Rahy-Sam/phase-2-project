import React from 'react';
import Footer from './Footer'; 

const NavBar = () => {
  return (
    <div className="navbar">
      <h1>Sales App</h1>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button type="button">Search</button>
      </div>
      <Footer /> {/* Include the Footer component */}
    </div>
  );
};


export default NavBar;
