import React from 'react';
import FeaturedItem from './FeaturedItem';
import '../style/FeaturedContent.css';

const FeaturedContent = () => {
  const featuredItems = [
    {
      image: 'adivi-seshs-goodachari-2.webp',
      title: 'Latest Blockbuster',
      description: 'Watch now in 4K HDR'
    },
    {
      image: 'maxresdefault.jpg',
      title: 'Top Charts',
      description: 'Listen to trending hits'
    },
    {
      image: 'newgames.jpg',
      title: 'New Release',
      description: 'Play the latest games'
    }
  ];

  return (
    <section className="featured-content">
      <h2>Featured Content</h2>
      <div className="featured-grid">
        {featuredItems.map((item, index) => (
          <FeaturedItem 
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedContent;