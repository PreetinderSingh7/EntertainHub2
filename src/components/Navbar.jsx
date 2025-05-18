import React, { useState, useEffect } from 'react';
import '../style/Navbar.css';

const Navbar = ({ onSignInClick, isLoggedIn, onLogout }) => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  
  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="nav-logo">EntertainHub</div>
      <div className="nav-links">
        <a href="#movies">Movies</a>
        <a href="#music">Music</a>
        <a href="#shopping">Shopping</a>
        <a href="#games">Games</a>
        {isLoggedIn && (
          <>
            <a href="/dashboard" className="dashboard-link">Dashboard</a>
            <a href="/profile" className="profile-link">Profile</a>
          </>
        )}
      </div>
      {isLoggedIn ? (
        <button className="logout-btn" onClick={onLogout}>Log Out</button>
      ) : (
        <button className="sign-in-btn" onClick={onSignInClick}>Sign In</button>
      )}
    </nav>
  );
};

export default Navbar;