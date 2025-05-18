// import React, { useEffect, useRef } from 'react';
// import './style2/FeaturesSection.css';
// import { NavLink } from 'react-router-dom';
// // import { path } from '../../../Backend/app';

// const FeaturesSection = () => {
//   const sectionRef = useRef(null);
  
//   const features = [
//     {
//       icon: 'fas fa-film',
//       title: 'Movies & Shows',
//       description: 'Stream thousands of movies and TV shows anytime, anywhere.',
//       path: '/Movies'
//     },
//     {
//       icon: 'fas fa-music',
//       title: 'Music',
//       description: 'Listen to millions of songs and create your perfect playlist.',
//       path: '/Music'
//     },
//     {
//       icon: 'fas fa-shopping-cart',
//       title: 'Shopping',
//       description: 'Shop the latest trends with exclusive deals.',
//       path: '/Shopping'
//     },
//     {
//       icon: 'fas fa-gamepad',
//       title: 'Games',
//       description: 'Play exciting games and compete with friends.',
//       path: '/games'
//     },
//     {
//       icon: 'fas fa-mobile-alt',
//       title: 'Current Affairs',
//       description: "Know about what's happening in the world",
//       path: '/Current'
//     },
//     {
//       icon: 'fas fa-ticket-alt',
//       title: 'Live Events',
//       description: 'Experience live concerts and exclusive events.',
//       path: '/LiveEvents'
//     }
//   ];

//   useEffect(() => {
//     // Ensure component is visible after mounting
//     if (sectionRef.current) {
//       sectionRef.current.style.opacity = '1';
//       sectionRef.current.style.display = 'block';
//     }
//   }, []);

//   return (
//     <section className="section features-section" id="features-content" ref={sectionRef}>
//       <h2 className="section-title">Our Features</h2>
//       <div className="feature-grid">
//         {features.map((feature, index) => (
//           feature.path ? (
//             <NavLink
//               to={feature.path} 
//               style={{ textDecoration: 'none', color: 'inherit' }} 
//               key={index}
//               className="feature-link"
//             >
//               <div className="feature-card">
//                 <i className={feature.icon}></i>
//                 <h3>{feature.title}</h3>
//                 <p>{feature.description}</p>
//               </div>
//             </NavLink>
//           ) : (
//             <div className="feature-card" key={index}>
//               <i className={feature.icon}></i>
//               <h3>{feature.title}</h3>
//               <p>{feature.description}</p>
//             </div>
//           )
//         ))}
//       </div>
//     </section>
//   );
// };

// export default FeaturesSection;

import React, { useEffect, useRef, useState } from 'react';
import './style2/FeaturesSection.css';
import { NavLink } from 'react-router-dom';

// Custom SVG Icon Components
const MovieIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="feature-icon">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M17 4v16M3 8h18M3 16h18" />
    <rect x="3" y="4" width="18" height="16" rx="2" />
  </svg>
);

const MusicIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="feature-icon">
    <circle cx="5.5" cy="17.5" r="3.5" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17.5V4c0-1.1.9-2 2-2h6.5" />
    <circle cx="16.5" cy="6.5" r="3.5" />
  </svg>
);

const ShoppingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="feature-icon">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20a1 1 0 11-2 0 1 1 0 012 0zm8 0a1 1 0 11-2 0 1 1 0 012 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l2.4 12.5c.2.8.9 1.5 1.8 1.5h8.4c.9 0 1.6-.7 1.8-1.5L22 7H6" />
  </svg>
);

const GameIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="feature-icon">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17V9m3 8V5m3 12v-4" />
    <rect x="3" y="3" width="18" height="18" rx="2" />
  </svg>
);

const NewsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="feature-icon">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1M19 20a2 2 0 002-2V8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2h8zm-9-4h10" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12h6" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 16h6" />
  </svg>
);

const EventsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="feature-icon">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 14l2 2 4-4" />
  </svg>
);

const FeaturesSection = () => {
  const sectionRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const features = [
    {
      icon: <MovieIcon />,
      title: 'Movies & Shows',
      description: 'Stream thousands of movies and TV shows anytime, anywhere.',
      path: '/Movies',
      background: 'linear-gradient(135deg, #2980b9, #6dd5fa)'
    },
    {
      icon: <MusicIcon />,
      title: 'Music',
      description: 'Listen to millions of songs and create your perfect playlist.',
      path: '/Music',
      background: 'linear-gradient(135deg, #f2709c, #ff9472)'
    },
    {
      icon: <ShoppingIcon />,
      title: 'Shopping',
      description: 'Shop the latest trends with exclusive deals.',
      path: '/Shopping',
      background: 'linear-gradient(135deg, #4facfe, #00f2fe)'
    },
    {
      icon: <GameIcon />,
      title: 'Games',
      description: 'Play exciting games and compete with friends.',
      path: '/games',
      background: 'linear-gradient(135deg, #a18cd1, #fbc2eb)'
    },
    {
      icon: <NewsIcon />,
      title: 'Current Affairs',
      description: "Know about what's happening in the world",
      path: '/Current',
      background: 'linear-gradient(135deg, #ff8008, #ffc837)'
    },
    {
      icon: <EventsIcon />,
      title: 'Live Events',
      description: 'Experience live concerts and exclusive events.',
      path: '/LiveEvents',
      background: 'linear-gradient(135deg, #02aab0, #00cdac)'
    }
  ];

  useEffect(() => {
    // Ensure component is visible after mounting
    if (sectionRef.current) {
      sectionRef.current.style.opacity = '1';
      sectionRef.current.style.display = 'block';
    }
  }, []);

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <section className="section features-section" id="features-content" ref={sectionRef}>
      <h2 className="section-title">Our Features</h2>
      <div className="feature-grid">
        {features.map((feature, index) => (
          feature.path ? (
            <NavLink
              to={feature.path} 
              style={{ textDecoration: 'none', color: 'inherit' }} 
              key={index}
              className="feature-link"
            >
              <div 
                className={`feature-card ${hoveredCard === index ? 'hovered' : ''}`}
                style={{ 
                  background: hoveredCard === index ? feature.background : 'rgba(255, 255, 255, 0.1)',
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="icon-container">
                  {feature.icon}
                  <div className="icon-backdrop"></div>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <div className="card-shine"></div>
                <div className="card-border"></div>
              </div>
            </NavLink>
          ) : (
            <div 
              className={`feature-card ${hoveredCard === index ? 'hovered' : ''}`}
              style={{ 
                background: hoveredCard === index ? feature.background : 'rgba(255, 255, 255, 0.1)',
              }}
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="icon-container">
                {feature.icon}
                <div className="icon-backdrop"></div>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <div className="card-shine"></div>
              <div className="card-border"></div>
            </div>
          )
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;