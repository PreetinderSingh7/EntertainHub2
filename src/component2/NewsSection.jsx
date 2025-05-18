// import React, { useState, useEffect, useRef } from 'react';
// import './style2/NewsSection.css';

// const NewsSection = () => {
//   const [news, setNews] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const sectionRef = useRef(null);
  
//   // Add visibility check
//   useEffect(() => {
//     if (sectionRef.current) {
//       sectionRef.current.style.opacity = '1';
//       sectionRef.current.style.display = 'block';
//     }
//   }, []);

//   const NEWS_API_KEY = 'pub_67817118aef323d6a960ea45166cfcc65a0fb';
//   const NEWS_API_ENDPOINT = 'https://newsdata.io/api/1/news';

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const response = await fetch(`${NEWS_API_ENDPOINT}?apikey=${NEWS_API_KEY}&language=en&size=3`);
//         const data = await response.json();
        
//         // Check if the API returned results successfully
//         if (data.status === "success" && Array.isArray(data.results)) {
//           setNews(data.results);
//         } else {
//           // If no results or unexpected response format, use an empty array
//           console.error("API returned unexpected format:", data);
//           setNews([]);
//           setError('No news available or API returned unexpected format.');
//         }
        
//         setLoading(false);
//       } catch (err) {
//         console.error("Failed to fetch news:", err);
//         setError('Failed to fetch news. Please try again later.');
//         setLoading(false);
//       }
//     };

//     fetchNews();
//   }, []);

//   const formatDate = (dateString) => {
//     if (!dateString) return '';
//     try {
//       const date = new Date(dateString);
//       return date.toLocaleString();
//     } catch (e) {
//       return dateString;
//     }
//   };

//   return (
//     <section className="section news-section" id="news-content" ref={sectionRef}>
//       <h2 className="section-title">Current Affairs</h2>
//       <div className="news-grid">
//         {loading ? (
//           <div className="loading-container">
//             <div className="loading-spinner"></div>
//             <div className="loading-text">Loading latest news...</div>
//           </div>
//         ) : error ? (
//           <div className="error">{error}</div>
//         ) : news.length === 0 ? (
//           <div className="error">No news available at the moment.</div>
//         ) : (
//           news.map((item, index) => (
//             <div className="news-card" key={index} style={{animationDelay: `${index * 0.2}s`}}>
//               <div className="news-card-inner">
//                 <div className="news-image">
//                   <img 
//                     src={item.image_url || item.source_icon || `/api/placeholder/300/200?text=${encodeURIComponent(item.source_name || 'News')}`} 
//                     alt={item.title} 
//                     onError={(e) => {
//                       e.target.onerror = null;
//                       e.target.src = '/api/placeholder/300/200?text=No+Image';
//                     }}
//                   />
//                 </div>
//                 <div className="news-content">
//                   <h3>{item.title}</h3>
//                   <p>{item.description || item.content || 'No description available'}</p>
//                   <div className="card-footer">
//                     <small>{formatDate(item.pubDate)}</small>
//                     <a href={item.link || item.url} className="read-more-link" target="_blank" rel="noopener noreferrer">Read more</a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </section>
//   );
// };

// export default NewsSection;





// import React, { useState, useEffect, useRef } from 'react';
// import './style2/NewsSection.css';

// const NewsSection = () => {
//   const [news, setNews] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const sectionRef = useRef(null);
  
//   // Add visibility check with animation
//   useEffect(() => {
//     if (sectionRef.current) {
//       sectionRef.current.style.opacity = '1';
//       sectionRef.current.style.display = 'block';
//     }
    
//     // Create intersection observer for scroll animations
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('visible');
//         }
//       });
//     }, { threshold: 0.1 });
    
//     // Observe all news cards
//     document.querySelectorAll('.news-card').forEach(card => {
//       observer.observe(card);
//     });
    
//     return () => observer.disconnect();
//   }, [news]);

//   const NEWS_API_KEY = 'pub_67817118aef323d6a960ea45166cfcc65a0fb';
//   const NEWS_API_ENDPOINT = 'https://newsdata.io/api/1/news';

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const response = await fetch(`${NEWS_API_ENDPOINT}?apikey=${NEWS_API_KEY}&language=en&size=3`);
//         const data = await response.json();
        
//         // Check if the API returned results successfully
//         if (data.status === "success" && Array.isArray(data.results)) {
//           setNews(data.results);
//         } else {
//           // If no results or unexpected response format, use an empty array
//           console.error("API returned unexpected format:", data);
//           setNews([]);
//           setError('No news available or API returned unexpected format.');
//         }
        
//         setLoading(false);
//       } catch (err) {
//         console.error("Failed to fetch news:", err);
//         setError('Failed to fetch news. Please try again later.');
//         setLoading(false);
//       }
//     };

//     fetchNews();
//   }, []);

//   const formatDate = (dateString) => {
//     if (!dateString) return '';
//     try {
//       const date = new Date(dateString);
//       return date.toLocaleString();
//     } catch (e) {
//       return dateString;
//     }
//   };

//   return (
//     <section className="section news-section" id="news-content" ref={sectionRef}>
//       <div className="heading-container">
//         <h2 className="section-title">Current Affairs</h2>
//         <div className="heading-underline"></div>
//       </div>
      
//       <div className="news-grid">
//         {loading ? (
//           <div className="loading-container">
//             <div className="loading-spinner"></div>
//             <div className="loading-text">Loading latest news...</div>
//           </div>
//         ) : error ? (
//           <div className="error">{error}</div>
//         ) : news.length === 0 ? (
//           <div className="error">No news available at the moment.</div>
//         ) : (
//           news.map((item, index) => (
//             <div 
//               className={`news-card ${hoveredCard === index ? 'hovered' : ''}`}
//               key={index} 
//               style={{animationDelay: `${index * 0.2}s`}}
//               onMouseEnter={() => setHoveredCard(index)}
//               onMouseLeave={() => setHoveredCard(null)}
//             >
//               <div className="news-card-inner">
//                 <div className="news-image-container">
//                   <div className="news-image">
//                     <img 
//                       src={item.image_url || item.source_icon || `/api/placeholder/300/200?text=${encodeURIComponent(item.source_name || 'News')}`} 
//                       alt={item.title} 
//                       onError={(e) => {
//                         e.target.onerror = null;
//                         e.target.src = '/api/placeholder/300/200?text=No+Image';
//                       }}
//                     />
//                     <div className="image-overlay">
//                       <div className="overlay-content">
//                         <span>Read Article</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="news-content">
//                   <h3>{item.title}</h3>
//                   <p>{item.description || item.content || 'No description available'}</p>
//                   <div className="card-footer">
//                     <small>{formatDate(item.pubDate)}</small>
//                     <a href={item.link || item.url} className="read-more-link" target="_blank" rel="noopener noreferrer">
//                       Read more
//                       <span className="link-arrow">→</span>
//                     </a>
//                   </div>
//                 </div>
//               </div>
              
//               {/* Decorative elements */}
//               <div className="card-decoration top-left"></div>
//               <div className="card-decoration top-right"></div>
//               <div className="card-decoration bottom-left"></div>
//               <div className="card-decoration bottom-right"></div>
//             </div>
//           ))
//         )}
//       </div>
//     </section>
//   );
// };

// export default NewsSection;






import React, { useState, useEffect, useRef } from 'react';
import './style2/NewsSection.css';

const NewsSection = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);
  
  // Add visibility check with animation
  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.style.opacity = '1';
      sectionRef.current.style.display = 'block';
    }
    
    // Create intersection observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    // Observe all news cards
    document.querySelectorAll('.news-card').forEach(card => {
      observer.observe(card);
    });
    
    return () => observer.disconnect();
  }, [news]);

  const NEWS_API_KEY = 'pub_67817118aef323d6a960ea45166cfcc65a0fb';
  const NEWS_API_ENDPOINT = 'https://newsdata.io/api/1/news';

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(`${NEWS_API_ENDPOINT}?apikey=${NEWS_API_KEY}&language=en&size=3`);
        const data = await response.json();
        
        // Check if the API returned results successfully
        if (data.status === "success" && Array.isArray(data.results)) {
          setNews(data.results);
        } else {
          // If no results or unexpected response format, use an empty array
          console.error("API returned unexpected format:", data);
          setNews([]);
          setError('No news available or API returned unexpected format.');
        }
        
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch news:", err);
        setError('Failed to fetch news. Please try again later.');
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return '';
    try {
      const date = new Date(dateString);
      return date.toLocaleString();
    } catch (e) {
      return dateString;
    }
  };

  // Function to truncate text to a specific length
  const truncateText = (text, maxLength = 120) => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <section className="section news-section" id="news-content" ref={sectionRef}>
      <div className="heading-container">
        <h2 className="section-title">Current Affairs</h2>
        <div className="heading-underline"></div>
      </div>
      
      <div className="news-grid">
        {loading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <div className="loading-text">Loading latest news...</div>
          </div>
        ) : error ? (
          <div className="error">{error}</div>
        ) : news.length === 0 ? (
          <div className="error">No news available at the moment.</div>
        ) : (
          news.map((item, index) => (
            <div 
              className={`news-card ${hoveredCard === index ? 'hovered' : ''}`}
              key={index} 
              style={{animationDelay: `${index * 0.2}s`}}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="news-card-inner">
                <div className="news-image-container">
                  <div className="news-image">
                    <img 
                      src={item.image_url || item.source_icon || `/api/placeholder/300/200?text=${encodeURIComponent(item.source_name || 'News')}`} 
                      alt={item.title} 
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/api/placeholder/300/200?text=No+Image';
                      }}
                    />
                    <div className="image-overlay">
                      <div className="overlay-content">
                        <span>Read Article</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="news-content">
                  <h3>{truncateText(item.title, 80)}</h3>
                  <p className="news-description">{truncateText(item.description || item.content || 'No description available', 120)}</p>
                  <div className="card-footer">
                    <small>{formatDate(item.pubDate)}</small>
                    <a href={item.link || item.url} className="read-more-link" target="_blank" rel="noopener noreferrer">
                      Read more
                      <span className="link-arrow">→</span>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="card-decoration top-left"></div>
              <div className="card-decoration top-right"></div>
              <div className="card-decoration bottom-left"></div>
              <div className="card-decoration bottom-right"></div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default NewsSection;