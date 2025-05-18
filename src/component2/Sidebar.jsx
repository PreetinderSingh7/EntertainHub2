// Sidebar.jsx
import React from 'react';
import './style2/Sidebar.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Sidebar = ({ isActive, onProfileClick, onNavigate, activeSection }) => {
 const navigate = useNavigate();

  const handleNavClick = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4001/api/user/logout', {}, {
        withCredentials: true, // Include cookies in the request
      });

      console.log(response.data.message); // Should print "Logout successful"

      // Redirect to the home page ("/") after logout
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <nav className={`sidebar ${isActive ? 'active' : ''}`} style={
      {
        display:'flex',
        flexDirection: 'column'
      }
    }>
      <div className="logo">
        <i className="fas fa-play-circle"></i>
        EntertainHub
      </div>
      <a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} 
         onClick={(e) => handleNavClick(e, 'home')}>
        <i className="fas fa-home"></i> Home
      </a>
      <a href="#features" className={`nav-link ${activeSection === 'features' ? 'active' : ''}`}
         onClick={(e) => handleNavClick(e, 'features')}>
        <i className="fas fa-star"></i> Features
      </a>
      <a href="#movies" className={`nav-link ${activeSection === 'movies' ? 'active' : ''}`}
         onClick={(e) => handleNavClick(e, 'movies')}>
        <i className="fas fa-film"></i> Movies
      </a>
      <a href="#shows" className={`nav-link ${activeSection === 'shows' ? 'active' : ''}`}
         onClick={(e) => handleNavClick(e, 'shows')}>
        <i className="fas fa-tv"></i> TV Shows
      </a>
      <a href="#music" className={`nav-link ${activeSection === 'music' ? 'active' : ''}`}
         onClick={(e) => handleNavClick(e, 'music')}>
        <i className="fas fa-music"></i> Music
      </a>
      <a href="#news" className={`nav-link ${activeSection === 'news' ? 'active' : ''}`}
         onClick={(e) => handleNavClick(e, 'news')}>
        <i className="fas fa-newspaper"></i> Current Affairs
      </a>
      <a href="#" className="nav-link" onClick={(e) => {
        e.preventDefault();
        onProfileClick();
      }}>
        <i className="fas fa-user"></i> Profile
      </a>
      <a href="#" className="nav-link" onClick={handleNavClick}>
        <i className="fas fa-sign-out-alt"></i> Logout
      </a>
    </nav>
  );
};

export default Sidebar;