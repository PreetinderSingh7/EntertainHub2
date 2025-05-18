import React, { useState } from 'react';
import './style2/ProfileModel.css';

const ProfileModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('profile');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    bio: ''
  });
  const [theme, setTheme] = useState('dark');
  const [privacySettings, setPrivacySettings] = useState({
    profileVisibility: true,
    activityStatus: false
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Profile updated:', formData);
    // Here you would typically send this data to your backend
    // For now, we'll just simulate a successful update
    document.getElementById('notification').classList.add('show');
    setTimeout(() => {
      document.getElementById('notification').classList.remove('show');
    }, 3000);
  };

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    document.body.className = `theme-${newTheme}`;
    localStorage.setItem('theme', newTheme);
  };

  const handlePrivacyToggle = (setting) => {
    setPrivacySettings(prevState => ({
      ...prevState,
      [setting]: !prevState[setting]
    }));
    
    document.getElementById('notification').textContent = 'Privacy settings updated';
    document.getElementById('notification').classList.add('show');
    setTimeout(() => {
      document.getElementById('notification').classList.remove('show');
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="profile-modal" id="profile-modal">
      <div className="profile-content">
        <button className="close-profile" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        <div className="settings-container">
          <div className="settings-tabs">
            <button 
              className={`tab-button ${activeTab === 'profile' ? 'active' : ''}`} 
              onClick={() => setActiveTab('profile')}
            >
              Profile
            </button>
            <button 
              className={`tab-button ${activeTab === 'appearance' ? 'active' : ''}`} 
              onClick={() => setActiveTab('appearance')}
            >
              Appearance
            </button>
            <button 
              className={`tab-button ${activeTab === 'privacy' ? 'active' : ''}`} 
              onClick={() => setActiveTab('privacy')}
            >
              Privacy
            </button>
          </div>

          {/* Profile Settings */}
          <div className={`settings-section ${activeTab === 'profile' ? 'active' : ''}`} id="profile-settings">
            <div className="avatar-upload">
              <div className="avatar-preview">
                <img src="/api/placeholder/150/150" alt="Profile Avatar" id="avatar-preview" />
              </div>
              <label className="avatar-upload-btn">
                <i className="fas fa-camera"></i>
                <input type="file" hidden accept="image/*" id="avatar-input" />
              </label>
            </div>

            <form id="profile-form" onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label className="form-label">Username</label>
                <input 
                  type="text" 
                  className="form-input" 
                  id="username" 
                  placeholder="Your username"
                  value={formData.username}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input 
                  type="email" 
                  className="form-input" 
                  id="email" 
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Bio</label>
                <textarea 
                  className="form-input" 
                  id="bio" 
                  rows="4" 
                  placeholder="Tell us about yourself"
                  value={formData.bio}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Save Changes</button>
            </form>
          </div>

          {/* Appearance Settings */}
          <div className={`settings-section ${activeTab === 'appearance' ? 'active' : ''}`} id="appearance-settings">
            <h3>Theme</h3>
            <div className="theme-options">
              <div 
                className={`theme-option ${theme === 'dark' ? 'active' : ''}`} 
                onClick={() => handleThemeChange('dark')}
              >
                <h4>Dark Theme</h4>
                <p>Perfect for night viewing</p>
              </div>
              <div 
                className={`theme-option ${theme === 'light' ? 'active' : ''}`} 
                onClick={() => handleThemeChange('light')}
              >
                <h4>Light Theme</h4>
                <p>Classic light mode</p>
              </div>
            </div>
          </div>

          {/* Privacy Settings */}
          <div className={`settings-section ${activeTab === 'privacy' ? 'active' : ''}`} id="privacy-settings">
            <div className="privacy-option">
              <div>
                <h4>Profile Visibility</h4>
                <p>Make your profile visible to other users</p>
              </div>
              <label className="toggle-switch">
                <input 
                  type="checkbox" 
                  className="toggle-input" 
                  checked={privacySettings.profileVisibility}
                  onChange={() => handlePrivacyToggle('profileVisibility')}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>

            <div className="privacy-option">
              <div>
                <h4>Activity Status</h4>
                <p>Show when you're online</p>
              </div>
              <label className="toggle-switch">
                <input 
                  type="checkbox" 
                  className="toggle-input"
                  checked={privacySettings.activityStatus}
                  onChange={() => handlePrivacyToggle('activityStatus')}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;