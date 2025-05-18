import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../style/SplashScreen.css';

const SplashScreen = () => {
  const logoRef = useRef(null);
  const containerRef = useRef(null);
  
  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.to(logoRef.current, {
      opacity: 1,
      duration: 1,
      scale: 1.2,
      ease: "power2.inOut"
    })
    .to(logoRef.current, {
      scale: 1,
      duration: 0.5,
      ease: "bounce.out"
    })
    .to(logoRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.5,
      delay: 0.5,
      ease: "power2.inOut"
    })
    .to(containerRef.current, {
      opacity: 0,
      duration: 0.5
    });
  }, []);
  
  return (
    <div className="splash-screen" ref={containerRef}>
      <div className="logo" ref={logoRef}>EntertainHub</div>
    </div>
  );
};

export default SplashScreen;