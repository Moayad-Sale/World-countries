import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isLightMode, setIsLightMode] = useState(true);

  const toggleMode = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <div className={`navbar ${isLightMode ? 'light-mode' : 'dark-mode'}`}>
      <h3 className="navbar-title">World Countries</h3>
      <button className="mode-button" onClick={toggleMode}>
        {isLightMode ? 'Dark Mode' : 'Light Mode'}
      </button>
    </div>
  );
};

export default Navbar