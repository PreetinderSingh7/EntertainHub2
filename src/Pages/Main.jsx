// import React, { useState, useEffect } from 'react';
// import SplashScreen from './components/SplashScreen';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import Categories from './components/Categories';
// import FeaturedContent from './components/FeaturedContent';
// import Footer from './components/Footer';
// import AuthModal from './components/AuthModal';
// import Toast from './components/Toast';
// import './App.css';

// function App() {
//   const [showSplash, setShowSplash] = useState(true);
//   const [showModal, setShowModal] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [toastConfig, setToastConfig] = useState({ 
//     show: false, 
//     message: '', 
//     success: true 
//   });

//   useEffect(() => {
//     // Check if user is logged in
//     const currentUser = localStorage.getItem('currentUser');
//     if (currentUser) {
//       setIsLoggedIn(true);
//     }
    
//     // Hide splash screen after animation completes
//     const timer = setTimeout(() => {
//       setShowSplash(false);
//     }, 3000); // Match this with the GSAP animation duration
    
//     return () => clearTimeout(timer);
//   }, []);

//   const handleSignIn = () => {
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   const showToast = (message, success = true) => {
//     setToastConfig({ show: true, message, success });
//     setTimeout(() => {
//       setToastConfig(prev => ({ ...prev, show: false }));
//     }, 3000);
//   };

//   const handleLogin = (email, password) => {
//     try {
//       // Get users from localStorage
//       const users = JSON.parse(localStorage.getItem('users')) || {};
//       const user = users[email];
      
//       if (!user || user.password !== password) {
//         throw new Error('Invalid credentials');
//       }

//       const userData = {
//         email: user.email,
//         username: user.username
//       };

//       localStorage.setItem('currentUser', JSON.stringify(userData));
//       setIsLoggedIn(true);
//       showToast('Successfully logged in!');
//       setShowModal(false);
      
//       // In a real app, you might redirect here
//       // history.push('/dashboard');
//     } catch (error) {
//       showToast(error.message, false);
//     }
//   };

//   const handleRegister = (username, email, password) => {
//     try {
//       // Get users from localStorage
//       const users = JSON.parse(localStorage.getItem('users')) || {};
      
//       if (users[email]) {
//         throw new Error('Email already registered');
//       }

//       users[email] = {
//         username,
//         password,
//         email,
//         createdAt: new Date().toISOString(),
//         preferences: {}
//       };

//       localStorage.setItem('users', JSON.stringify(users));
//       showToast('Registration successful! Please login.');
//       return true;
//     } catch (error) {
//       showToast(error.message, false);
//       return false;
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('currentUser');
//     setIsLoggedIn(false);
//     showToast('Successfully logged out!');
//   };

//   return (
//     <div className="app">
//       {showSplash && <SplashScreen />}
      
//       <div className="app-content">
//         <Navbar 
//           onSignInClick={handleSignIn} 
//           isLoggedIn={isLoggedIn}
//           onLogout={handleLogout}
//         />
//         <Hero onGetStartedClick={handleSignIn} />
//         <Categories isLoggedIn={isLoggedIn} />
//         <FeaturedContent />
//         <Footer />
//       </div>
      
//       {showModal && (
//         <AuthModal 
//           onClose={handleCloseModal}
//           onLogin={handleLogin}
//           onRegister={handleRegister}
//         />
//       )}
      
//       {toastConfig.show && (
//         <Toast 
//           message={toastConfig.message} 
//           success={toastConfig.success} 
//         />
//       )}
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';
import SplashScreen from '../components/SplashScreen';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import FeaturedContent from '../components/FeaturedContent';
import Footer from '../components/Footer';
import AuthModal from '../components/AuthModal';
import Toast from '../components/Toast';
import './Main.css';

function Main() {
  const [showSplash, setShowSplash] = useState(true);
  const [modalType, setModalType] = useState(null); // 'login', 'register', or null
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [toastConfig, setToastConfig] = useState({
    show: false,
    message: '',
    success: true,
  });

  // Splash screen logic
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // Match this with your animation duration

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  // Toast notification function
  const showToast = (message, success = true) => {
    setToastConfig({ show: true, message, success });
    setTimeout(() => {
      setToastConfig((prev) => ({ ...prev, show: false }));
    }, 3000);
  };

  // Handle user login
  const handleLogin = (email, password) => {
    try {
      const users = JSON.parse(localStorage.getItem('users')) || {};
      const user = users[email];

      if (!user || user.password !== password) {
        throw new Error('Invalid credentials');
      }

      const userData = {
        email: user.email,
        username: user.username,
      };

      localStorage.setItem('currentUser', JSON.stringify(userData));
      setIsLoggedIn(true);
      showToast('Successfully logged in!', true);
      setModalType(null); // Close the modal
    } catch (error) {
      showToast(error.message, false);
    }
  };

  // Handle user registration
  const handleRegister = (username, email, password) => {
    try {
      const users = JSON.parse(localStorage.getItem('users')) || {};

      if (users[email]) {
        throw new Error('Email already registered');
      }

      users[email] = {
        username,
        password,
        email,
        createdAt: new Date().toISOString(),
        preferences: {},
      };

      localStorage.setItem('users', JSON.stringify(users));
      showToast('Registration successful! Please login.', true);
      setModalType('login'); // Switch to login modal
    } catch (error) {
      showToast(error.message, false);
    }
  };

  // Handle user logout
  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setIsLoggedIn(false);
    showToast('Successfully logged out!', true);
  };

  // Modal control functions
  const openLoginModal = () => setModalType('login');
  const openRegisterModal = () => setModalType('register');
  const closeModal = () => {
    setModalType(null)
  };

  return (
    <div className="app">
      {showSplash && <SplashScreen />}

      <div className="app-content">
        <Navbar
          onSignInClick={openLoginModal}
          isLoggedIn={isLoggedIn}
          onLogout={handleLogout}
        />
        <Hero onGetStartedClick={openLoginModal} />
        <Categories isLoggedIn={isLoggedIn} />
        <FeaturedContent />
        <Footer />
      </div>

      {modalType && (
        <AuthModal
          isOpen={!!modalType}
          onClose={closeModal}
          onLogin={handleLogin}
          onRegister={handleRegister}
          showToast={showToast}
        />
      )}

      {toastConfig.show && (
        <Toast message={toastConfig.message} success={toastConfig.success} />
      )}
    </div>
  );
}

export default Main;