import React from 'react';
import '../style/CategoryCard.css';

const CategoryCard = ({ icon, title, description, isLocked }) => {
  return (
    <>
   
    <div className={`category-card ${isLocked ? 'locked' : 'unlocked'}`} data-protected={isLocked}>
      <div className="category-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
    </>
  );
};

export default CategoryCard;