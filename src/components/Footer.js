import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={contentStyle}>
        <p>Designed by Mary Njeri, Raymond Mwaiki, Lawrence Mwirigi, Mohammed Hussein, and Maina Zaquir</p>
        <p>&copy; 2023 E-Commerce App. All rights reserved.</p>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#333',
  color: 'white',
  padding: '20px 0',
  position: 'fixed',
  bottom: 0,
  width: '100%',
};

const contentStyle = {
  textAlign: 'center',
};

export default Footer;


