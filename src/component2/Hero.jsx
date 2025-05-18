// Hero.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './style2/Hero.css';

const Hero = () => {
  const titleRef = useRef(null);
  const descRef = useRef(null);

  useEffect(() => {
    // Animate title and description
    gsap.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.5
    });

    gsap.to(descRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.8
    });
  }, []);

  return (
    <section 
      className="hero" 
      id="home"
      style={{
        backgroundImage: `url('audience-1850665_1920.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }} 
    >
      <div className="hero-overlay" 
      
      ></div>
      <div className="hero-content" >
        <h1 ref={titleRef}>Welcome to EntertainHub</h1>
        <p ref={descRef}>Your ultimate entertainment destination</p>
      </div>
    </section>
  );
};

export default Hero;