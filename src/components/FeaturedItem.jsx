import React from 'react';
import '../style/FeaturedItem.css';

const FeaturedItem = ({ image, title, description }) => {
  return (
    <div className="featured-item">
      <img src={image} alt={title} />
      <div className="featured-overlay">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FeaturedItem;