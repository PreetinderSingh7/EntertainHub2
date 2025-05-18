import React from 'react';
import '../style/Hero.css';

const Hero = ({ onGetStartedClick }) => {
  return (
    <div className="hero-container" style={
      {
        
          backgroundImage: "url('nightclub-equipment-mixing-technology-for-modern-entertainment-club-performance-space-generated-by-ai-free-photo.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        
      }
    }
    >
      <section className="hero">
        <h1
        style={{
          opacity: 1,
          // fontSize: '2.5rem',
          // marginTop: '20px',
        }}>All Your Entertainment in One Place</h1>
        <p
        style={
          {
            opacity: 1,
            fontSize: '1rem',
            marginTop: '10px',
          }
        }
        >Watch movies, listen to music, shop, and play games - all on one platform.</p>
        <br></br>
        <button className="sign-in-btn" onClick={onGetStartedClick}>Get Started</button>
      </section>
    </div>
  );
};

export default Hero;