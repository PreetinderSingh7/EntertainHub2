import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import '../style/Toast.css';

const Toast = ({ message, isSuccess, isVisible, onHide }) => {
  const toastRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (isVisible && message) {
      showToast();
    }
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      gsap.killTweensOf(toastRef.current);
    };
  }, [isVisible, message]);

  const showToast = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      gsap.killTweensOf(toastRef.current);
    }

    gsap.fromTo(
      toastRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
    );

    timeoutRef.current = setTimeout(() => {
      gsap.to(toastRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: "power2.in",
        onComplete: onHide
      });
    }, 3000);
  };

  if (!isVisible) return null;

  return (
    <div 
      className="toast" 
      ref={toastRef}
      style={{ 
        background: isSuccess 
          ? 'rgba(46, 125, 50, 0.95)' 
          : 'rgba(198, 40, 40, 0.95)'
      }}
    >
      {message}
    </div>
  );
};

export default Toast;