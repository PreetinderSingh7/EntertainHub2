// MenuToggle.jsx
import React from 'react';
import './style2/MenuToggle.css';

const MenuToggle = ({ isActive, onClick }) => {
  return (
    <button 
      className={`menu-toggle ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      <i className="fas fa-bars"></i>
    </button>
  );
};

export default MenuToggle;