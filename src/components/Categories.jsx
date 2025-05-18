import React from 'react';
import CategoryCard from './CategoryCard';
// import './Categories.css';
import '../style/Categories.css';

const Categories = ({ isLoggedIn }) => {
  const categories = [
    {
      icon: '🎬',
      title: 'Movies & Shows',
      description: 'Stream thousands of movies and TV shows anytime, anywhere. Experience cinema-quality entertainment from the comfort of your home.'
    },
    {
      icon: '🎵',
      title: 'Music',
      description: 'Listen to millions of songs and create your perfect playlist. Discover new artists and genres that match your taste.'
    },
    {
      icon: '🛍️',
      title: 'Shopping',
      description: 'Shop the latest trends in fashion, electronics, and more. Get exclusive deals and fast delivery on all your favorite items.'
    },
    {
      icon: '🎮',
      title: 'Games',
      description: 'Play exciting mini-games and compete with friends. Join tournaments and win amazing prizes in our gaming community.'
    },
    {
      icon: '📱',
      title: 'Mobile Entertainment',
      description: 'Take your entertainment on the go with our mobile app.'
    },
    {
      icon: '🎭',
      title: 'Live Events',
      description: 'Experience live concerts, theater shows, and exclusive events.'
    },
    {
      icon: '🌐',
      title: 'Current Affairs',
      description: 'Stay updated with the latest news, global events, and trending stories. From politics to technology, get real-time updates and insights to keep you informed.'
    },
    {
      icon: '🍿',
      title: 'Movie Booking',
      description: 'Book tickets for the latest blockbusters and upcoming releases. Enjoy seamless online booking with seat selection, show timings, and exclusive offers for your favorite cinemas.'
    }
  ];

  return (
    <section className="categories">
      <h1 style={{
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'


   }}>Features</h1>
      <div className="category-grid">
        {categories.map((category, index) => (
          <CategoryCard 
            key={index}
            icon={category.icon}
            title={category.title}
            description={category.description}
            isLocked={!isLoggedIn}
          />
        ))}
      </div>
    </section>
  );
};

export default Categories;