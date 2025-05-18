// ContentCard.jsx
import React from 'react';
import './style2/ContentCard.css';

const ContentCard = ({ item, type }) => {
  return (
    <div className="content-card">
      <div className="card-media">
        <img 
          src={item.image || '/api/placeholder/300/200'} 
          alt={item.title} 
          className="card-image"
        />
      </div>
      <div className="card-content">
        <h3>{item.title}</h3>
        
        {type === 'movie' || type === 'show' ? (
          <>
            <p>Rating: {item.rating}</p>
            <p>Genre: {item.genre}</p>
          </>
        ) : type === 'music' ? (
          <>
            <p>Artist: {item.artist}</p>
            <p>Genre: {item.genre}</p>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default ContentCard;