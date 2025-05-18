import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import '../style/AuthModal.css';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import{jwtDecode} from 'jwt-decode'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Axios setup
axios.defaults.withCredentials = true;

const AuthModal = ({ isOpen, onClose, showToast }) => {
  const [showLogin, setShowLogin] = useState(true);
  const modalRef = useRef(null);
  const loginFormRef = useRef(null);
  const registerFormRef = useRef(null);
  const nav = useNavigate();

  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  useEffect(() => {
    if (isOpen) {
      animateOpen();
    }
  }, [isOpen]);

  const animateOpen = () => {
    gsap.fromTo(
      showLogin ? loginFormRef.current : registerFormRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
    );
  };

  const animateClose = () => {
    gsap.to([loginFormRef.current, registerFormRef.current], {
      opacity: 0,
      y: -50,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: onClose,
    });
  };

  const handleModalClick = (e) => {
    if (e.target === modalRef.current) {
      animateClose();
    }
  };

  const toggleForm = () => {
    const fromRef = showLogin ? loginFormRef : registerFormRef;
    const toRef = showLogin ? registerFormRef : loginFormRef;

    gsap.to(fromRef.current, {
      opacity: 0,
      y: -50,
      duration: 0.3,
      onComplete: () => {
        setShowLogin(!showLogin);
        gsap.fromTo(
          toRef.current,
          { opacity: 0, y: -50 },
          { opacity: 1, y: 0, duration: 0.3 }
        );
      },
    });
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase());
  const validatePassword = (password) => password.length >= 6;
  const validateUsername = (username) => username.length >= 3;

  const handleLoginChange = (e) => {
    const { id, value } = e.target;
    setLoginData((prev) => ({ ...prev, [id]: value }));
  };

  const handleRegisterChange = (e) => {
    const { id, value } = e.target;
    let key = id;
    if (id.startsWith('reg')) {
      key = id.replace('reg', '').toLowerCase();
    }
    setRegisterData((prev) => ({ ...prev, [key]: value }));
  };

 const handleLoginSubmit = async (e) => {
  e.preventDefault();

  if (!validateEmail(loginData.email)) {
    toast.error('Please enter a valid email address');
    return;
  }

  try {
    const response = await axios.post(
      'https://entertainhub2-backend.onrender.com/api/user/login',
      {
        email: loginData.email,
        password: loginData.password,
      },
  
    );
    if(response.data.message === 'Login successful') {
       toast.success('Successfully logged in!');
    animateClose();
    nav('/main2')
    }
  } catch (error) {
    toast.error(
      error.response?.data?.message || 'Login failed. Wrong username or password.'
    );
  }
};


const handleRegisterSubmit = async (e) => {
  e.preventDefault();
  const { username, email, password, confirmPassword } = registerData;

  if (!validateUsername(username)) {
    toast.error('Username must be at least 3 characters');
    return;
  }

  if (!validateEmail(email)) {
    toast.error('Please enter a valid email address');
    return;
  }

  if (!validatePassword(password)) {
    toast.error('Password must be at least 6 characters');
    return;
  }

  if (password !== confirmPassword) {
    toast.error('Passwords do not match');
    return;
  }

  try {
    const response = await axios.post(
      'https://entertainhub2-backend.onrender.com/api/user/signup',
      {
        name: username,
        email,
        password,
      },
      { withCredentials: true }
    );

    toast.success('Registration successful! Please login.');

    setRegisterData({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    });

    // Animate to login form instead of direct state switch
    gsap.to(registerFormRef.current, {
      opacity: 0,
      y: -50,
      duration: 0.3,
      onComplete: () => {
        setShowLogin(true);
        gsap.fromTo(
          loginFormRef.current,
          { opacity: 0, y: -50 },
          { opacity: 1, y: 0, duration: 0.3 }
        );
      },
    });
  } catch (error) {
    const errorMsg = error.response?.data?.message || 'Registration failed';
    toast.error(errorMsg);
  }
};

  if (!isOpen) return null;

  return (
    <div className="modal" ref={modalRef} onClick={handleModalClick}>
      <div
        className="login-form"
        ref={loginFormRef}
        style={{ display: showLogin ? 'block' : 'none' }}
      >
        <button className="close-modal" onClick={animateClose}>
          &times;
        </button>
        <h2>Welcome Back</h2>
        <form onSubmit={handleLoginSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              required
              value={loginData.email}
              onChange={handleLoginChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              required
              value={loginData.password}
              onChange={handleLoginChange}
            />
          </div>
          <div className="remember-me">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <div className="form-buttons">
            <button type="submit" className="login-btn">
              Log In
            </button>
          </div>
          <div className="auth-toggle">
            Don't have an account? <span onClick={toggleForm}>Register</span>
          </div>
        </form>
      </div>

      <div
        className="register-form"
        ref={registerFormRef}
        style={{ display: showLogin ? 'none' : 'block' }}
      >
        <button className="close-modal" onClick={animateClose}>
          &times;
        </button>
        <h2>Create Account</h2>
        <form onSubmit={handleRegisterSubmit}>
          <div className="form-group">
            <label htmlFor="regUsername">Username</label>
            <input
              type="text"
              id="regUsername"
              required
              value={registerData.username}
              onChange={handleRegisterChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="regEmail">Email</label>
            <input
              type="email"
              id="regEmail"
              required
              value={registerData.email}
              onChange={handleRegisterChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="regPassword">Password</label>
            <input
              type="password"
              id="regPassword"
              required
              value={registerData.password}
              onChange={handleRegisterChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              required
              value={registerData.confirmPassword}
              onChange={handleRegisterChange}
            />
          </div>
          <div className="form-buttons">
            <button type="submit" className="login-btn">
              Register
            </button>
          </div>
          <div className="auth-toggle">
            Already have an account? <span onClick={toggleForm}>Login</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;
