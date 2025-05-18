// // import React, { useState, useEffect } from 'react';

// // const LiveEventsDashboard = () => {
// //   const [events, setEvents] = useState([]);
// //   const [filteredEvents, setFilteredEvents] = useState([]);
// //   const [searchQuery, setSearchQuery] = useState('');
// //   const [selectedCategory, setSelectedCategory] = useState('all');
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const eventsPerPage = 12;

// //   const API_KEY = 'cb7f0fb8730569089c51ceb91f6669cc286c0ea525d81588732bd7c4af730fb5';

// //   const categories = [
// //     { id: 'all', name: 'All Events', icon: '🎯' },
// //     { id: 'music', name: 'Music & Concerts', icon: '🎵' },
// //     { id: 'sports', name: 'Sports', icon: '⚽' },
// //     { id: 'theater', name: 'Theater & Arts', icon: '🎭' },
// //     { id: 'business', name: 'Business', icon: '💼' },
// //     { id: 'technology', name: 'Technology', icon: '💻' },
// //     { id: 'food', name: 'Food & Drink', icon: '🍽️' }
// //   ];

// //   useEffect(() => {
// //     fetchEvents();
// //   }, []);

// //   useEffect(() => {
// //     filterEvents();
// //   }, [events, searchQuery, selectedCategory]);

// //   const fetchEvents = async () => {
// //     setLoading(true);
// //     try {
// //       // Fetching different types of events
// //       const queries = [
// //         'concerts 2025 events',
// //         'sports events this week',
// //         'tech conferences 2025',
// //         'theater shows this month',
// //         'business events',
// //         'food festivals'
// //       ];

// //       const allEvents = [];
      
// //       for (const query of queries) {
// //         try {
// //           const response = await fetch(`https://serpapi.com/search.json?engine=google_events&q=${encodeURIComponent(query)}&api_key=${API_KEY}&num=20`);
// //           const data = await response.json();
          
// //           if (data.events_results) {
// //             const categoryEvents = data.events_results.map(event => ({
// //               ...event,
// //               category: getCategoryFromQuery(query),
// //               id: event.event_id || Math.random().toString(36).substr(2, 9)
// //             }));
// //             allEvents.push(...categoryEvents);
// //           }
// //         } catch (err) {
// //           console.error(`Error fetching events for query: ${query}`, err);
// //         }
// //       }

// //       setEvents(allEvents);
// //       setError(null);
// //     } catch (err) {
// //       setError('Failed to fetch events. Please try again later.');
// //       console.error('Error fetching events:', err);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const getCategoryFromQuery = (query) => {
// //     if (query.includes('concerts') || query.includes('music')) return 'music';
// //     if (query.includes('sports')) return 'sports';
// //     if (query.includes('tech')) return 'technology';
// //     if (query.includes('theater')) return 'theater';
// //     if (query.includes('business')) return 'business';
// //     if (query.includes('food')) return 'food';
// //     return 'all';
// //   };

// //   const filterEvents = () => {
// //     let filtered = events;

// //     if (selectedCategory !== 'all') {
// //       filtered = filtered.filter(event => event.category === selectedCategory);
// //     }

// //     if (searchQuery) {
// //       filtered = filtered.filter(event =>
// //         event.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
// //         event.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
// //         event.venue?.name?.toLowerCase().includes(searchQuery.toLowerCase())
// //       );
// //     }

// //     setFilteredEvents(filtered);
// //     setCurrentPage(1);
// //   };

// //   const handleSearch = (e) => {
// //     setSearchQuery(e.target.value);
// //   };

// //   const handleCategoryChange = (categoryId) => {
// //     setSelectedCategory(categoryId);
// //   };

// //   const formatDate = (dateString) => {
// //     if (!dateString) return 'Date TBA';
// //     try {
// //       const date = new Date(dateString);
// //       return date.toLocaleDateString('en-US', {
// //         weekday: 'short',
// //         month: 'short',
// //         day: 'numeric',
// //         year: 'numeric'
// //       });
// //     } catch {
// //       return dateString;
// //     }
// //   };

// //   const formatTime = (timeString) => {
// //     if (!timeString) return '';
// //     return timeString;
// //   };

// //   // Pagination
// //   const indexOfLastEvent = currentPage * eventsPerPage;
// //   const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
// //   const currentEvents = filteredEvents.slice(indexOfFirstEvent, indexOfLastEvent);
// //   const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);

// //   const paginate = (pageNumber) => setCurrentPage(pageNumber);

// //   if (loading) {
// //     return (
// //       <div style={styles.loadingContainer}>
// //         <div style={styles.loader}></div>
// //         <p style={styles.loadingText}>Loading amazing events for you...</p>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div style={styles.container}>
// //       {/* Header */}
// //       <header style={styles.header}>
// //         <div style={styles.headerContent}>
// //           <h1 style={styles.title}>
// //             <span style={styles.titleIcon}>🎪</span>
// //             Live Events Dashboard
// //           </h1>
// //           <p style={styles.subtitle}>Discover amazing events happening around you</p>
// //         </div>
// //       </header>

// //       {/* Search and Filter Section */}
// //       <section style={styles.controlSection}>
// //         <div style={styles.searchContainer}>
// //           <input
// //             type="text"
// //             placeholder="Search events, venues, or descriptions..."
// //             value={searchQuery}
// //             onChange={handleSearch}
// //             style={styles.searchInput}
// //           />
// //           <span style={styles.searchIcon}>🔍</span>
// //         </div>

// //         <div style={styles.categoryContainer}>
// //           {categories.map(category => (
// //             <button
// //               key={category.id}
// //               onClick={() => handleCategoryChange(category.id)}
// //               style={{
// //                 ...styles.categoryButton,
// //                 ...(selectedCategory === category.id ? styles.activeCategoryButton : {})
// //               }}
// //             >
// //               <span style={styles.categoryIcon}>{category.icon}</span>
// //               {category.name}
// //             </button>
// //           ))}
// //         </div>
// //       </section>

// //       {/* Stats Section */}
// //       <section style={styles.statsSection}>
// //         <div style={styles.statCard}>
// //           <span style={styles.statNumber}>{filteredEvents.length}</span>
// //           <span style={styles.statLabel}>Events Found</span>
// //         </div>
// //         <div style={styles.statCard}>
// //           <span style={styles.statNumber}>{categories.length - 1}</span>
// //           <span style={styles.statLabel}>Categories</span>
// //         </div>
// //         <div style={styles.statCard}>
// //           <span style={styles.statNumber}>Live</span>
// //           <span style={styles.statLabel}>Updates</span>
// //         </div>
// //       </section>

// //       {/* Events Grid */}
// //       <section style={styles.eventsSection}>
// //         {error && (
// //           <div style={styles.errorMessage}>
// //             <span style={styles.errorIcon}>⚠️</span>
// //             {error}
// //           </div>
// //         )}

// //         {currentEvents.length === 0 && !loading && !error && (
// //           <div style={styles.noEvents}>
// //             <span style={styles.noEventsIcon}>🔍</span>
// //             <h3>No events found</h3>
// //             <p>Try adjusting your search criteria or category filter</p>
// //           </div>
// //         )}

// //         <div style={styles.eventsGrid}>
// //           {currentEvents.map((event, index) => (
// //             <div key={event.id || index} style={styles.eventCard}>
// //               <div style={styles.eventCardHeader}>
// //                 <span style={styles.eventCategory}>
// //                   {categories.find(cat => cat.id === event.category)?.icon || '📅'}
// //                 </span>
// //                 <span style={styles.eventDate}>
// //                   {formatDate(event.start_date || event.date)}
// //                 </span>
// //               </div>

// //               <div style={styles.eventContent}>
// //                 <h3 style={styles.eventTitle}>{event.title}</h3>
                
// //                 {event.venue && (
// //                   <div style={styles.eventVenue}>
// //                     <span style={styles.venueIcon}>📍</span>
// //                     <span>{event.venue.name}</span>
// //                     {event.venue.address && (
// //                       <span style={styles.venueAddress}>{event.venue.address}</span>
// //                     )}
// //                   </div>
// //                 )}

// //                 {event.description && (
// //                   <p style={styles.eventDescription}>
// //                     {event.description.substring(0, 120)}
// //                     {event.description.length > 120 ? '...' : ''}
// //                   </p>
// //                 )}

// //                 {event.start_time && (
// //                   <div style={styles.eventTime}>
// //                     <span style={styles.timeIcon}>⏰</span>
// //                     <span>{formatTime(event.start_time)}</span>
// //                   </div>
// //                 )}

// //                 {event.price && (
// //                   <div style={styles.eventPrice}>
// //                     <span style={styles.priceIcon}>💰</span>
// //                     <span style={styles.priceText}>{event.price}</span>
// //                   </div>
// //                 )}
// //               </div>

// //               <div style={styles.eventFooter}>
// //                 <button style={styles.eventButton}>
// //                   View Details
// //                 </button>
// //                 {event.link && (
// //                   <a 
// //                     href={event.link} 
// //                     target="_blank" 
// //                     rel="noopener noreferrer"
// //                     style={styles.eventLink}
// //                   >
// //                     Learn More →
// //                   </a>
// //                 )}
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Pagination */}
// //         {totalPages > 1 && (
// //           <div style={styles.pagination}>
// //             <button
// //               onClick={() => paginate(currentPage - 1)}
// //               disabled={currentPage === 1}
// //               style={{
// //                 ...styles.paginationButton,
// //                 ...(currentPage === 1 ? styles.disabledButton : {})
// //               }}
// //             >
// //               ← Previous
// //             </button>

// //             {[...Array(totalPages)].map((_, index) => (
// //               <button
// //                 key={index + 1}
// //                 onClick={() => paginate(index + 1)}
// //                 style={{
// //                   ...styles.paginationButton,
// //                   ...(currentPage === index + 1 ? styles.activePaginationButton : {})
// //                 }}
// //               >
// //                 {index + 1}
// //               </button>
// //             ))}

// //             <button
// //               onClick={() => paginate(currentPage + 1)}
// //               disabled={currentPage === totalPages}
// //               style={{
// //                 ...styles.paginationButton,
// //                 ...(currentPage === totalPages ? styles.disabledButton : {})
// //               }}
// //             >
// //               Next →
// //             </button>
// //           </div>
// //         )}
// //       </section>

// //       {/* Refresh Button */}
// //       <div style={styles.refreshContainer}>
// //         <button
// //           onClick={fetchEvents}
// //           style={styles.refreshButton}
// //           disabled={loading}
// //         >
// //           {loading ? '🔄 Refreshing...' : '🔄 Refresh Events'}
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // const styles = {
// //   container: {
// //     minHeight: '100vh',
// //     background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
// //     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
// //   },
// //   header: {
// //     background: 'rgba(255, 255, 255, 0.1)',
// //     backdropFilter: 'blur(10px)',
// //     padding: '2rem 0',
// //     textAlign: 'center',
// //     borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
// //   },
// //   headerContent: {
// //     maxWidth: '1200px',
// //     margin: '0 auto',
// //     padding: '0 1rem'
// //   },
// //   title: {
// //     fontSize: '3rem',
// //     fontWeight: 'bold',
// //     color: 'white',
// //     margin: '0 0 0.5rem 0',
// //     textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
// //   },
// //   titleIcon: {
// //     marginRight: '1rem'
// //   },
// //   subtitle: {
// //     fontSize: '1.2rem',
// //     color: 'rgba(255, 255, 255, 0.9)',
// //     margin: 0
// //   },
// //   controlSection: {
// //     maxWidth: '1200px',
// //     margin: '2rem auto',
// //     padding: '0 1rem'
// //   },
// //   searchContainer: {
// //     position: 'relative',
// //     marginBottom: '2rem'
// //   },
// //   searchInput: {
// //     width: '100%',
// //     padding: '1rem 3rem 1rem 1rem',
// //     fontSize: '1.1rem',
// //     border: 'none',
// //     borderRadius: '50px',
// //     background: 'white',
// //     boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
// //     outline: 'none',
// //     transition: 'all 0.3s ease'
// //   },
// //   searchIcon: {
// //     position: 'absolute',
// //     right: '1rem',
// //     top: '50%',
// //     transform: 'translateY(-50%)',
// //     fontSize: '1.2rem'
// //   },
// //   categoryContainer: {
// //     display: 'flex',
// //     flexWrap: 'wrap',
// //     gap: '1rem',
// //     justifyContent: 'center'
// //   },
// //   categoryButton: {
// //     padding: '0.8rem 1.5rem',
// //     border: 'none',
// //     borderRadius: '25px',
// //     background: 'rgba(255, 255, 255, 0.2)',
// //     color: 'white',
// //     fontSize: '1rem',
// //     cursor: 'pointer',
// //     transition: 'all 0.3s ease',
// //     backdropFilter: 'blur(10px)',
// //     display: 'flex',
// //     alignItems: 'center',
// //     gap: '0.5rem'
// //   },
// //   activeCategoryButton: {
// //     background: 'rgba(255, 255, 255, 0.9)',
// //     color: '#333',
// //     transform: 'scale(1.05)'
// //   },
// //   categoryIcon: {
// //     fontSize: '1.2rem'
// //   },
// //   statsSection: {
// //     display: 'flex',
// //     justifyContent: 'center',
// //     gap: '2rem',
// //     maxWidth: '1200px',
// //     margin: '2rem auto',
// //     padding: '0 1rem'
// //   },
// //   statCard: {
// //     background: 'rgba(255, 255, 255, 0.15)',
// //     backdropFilter: 'blur(10px)',
// //     padding: '1.5rem',
// //     borderRadius: '15px',
// //     textAlign: 'center',
// //     color: 'white',
// //     minWidth: '150px'
// //   },
// //   statNumber: {
// //     display: 'block',
// //     fontSize: '2rem',
// //     fontWeight: 'bold',
// //     marginBottom: '0.5rem'
// //   },
// //   statLabel: {
// //     fontSize: '0.9rem',
// //     opacity: 0.9
// //   },
// //   eventsSection: {
// //     maxWidth: '1200px',
// //     margin: '0 auto',
// //     padding: '0 1rem 2rem 1rem'
// //   },
// //   eventsGrid: {
// //     display: 'grid',
// //     gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
// //     gap: '2rem',
// //     marginBottom: '3rem'
// //   },
// //   eventCard: {
// //     background: 'white',
// //     borderRadius: '20px',
// //     overflow: 'hidden',
// //     boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
// //     transition: 'all 0.3s ease',
// //     cursor: 'pointer'
// //   },
// //   eventCardHeader: {
// //     background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
// //     padding: '1rem',
// //     display: 'flex',
// //     justifyContent: 'space-between',
// //     alignItems: 'center'
// //   },
// //   eventCategory: {
// //     fontSize: '1.5rem'
// //   },
// //   eventDate: {
// //     color: 'white',
// //     fontWeight: 'bold',
// //     fontSize: '0.9rem'
// //   },
// //   eventContent: {
// //     padding: '1.5rem'
// //   },
// //   eventTitle: {
// //     fontSize: '1.3rem',
// //     fontWeight: 'bold',
// //     color: '#333',
// //     marginBottom: '1rem',
// //     lineHeight: '1.4'
// //   },
// //   eventVenue: {
// //     display: 'flex',
// //     alignItems: 'center',
// //     gap: '0.5rem',
// //     marginBottom: '1rem',
// //     color: '#666',
// //     fontSize: '0.9rem'
// //   },
// //   venueIcon: {
// //     fontSize: '1rem'
// //   },
// //   venueAddress: {
// //     fontSize: '0.8rem',
// //     opacity: 0.8
// //   },
// //   eventDescription: {
// //     color: '#666',
// //     fontSize: '0.95rem',
// //     lineHeight: '1.6',
// //     marginBottom: '1rem'
// //   },
// //   eventTime: {
// //     display: 'flex',
// //     alignItems: 'center',
// //     gap: '0.5rem',
// //     color: '#666',
// //     fontSize: '0.9rem',
// //     marginBottom: '0.5rem'
// //   },
// //   timeIcon: {
// //     fontSize: '1rem'
// //   },
// //   eventPrice: {
// //     display: 'flex',
// //     alignItems: 'center',
// //     gap: '0.5rem',
// //     marginBottom: '1rem'
// //   },
// //   priceIcon: {
// //     fontSize: '1rem'
// //   },
// //   priceText: {
// //     fontWeight: 'bold',
// //     color: '#f5576c'
// //   },
// //   eventFooter: {
// //     padding: '1rem 1.5rem',
// //     background: '#f8f9fa',
// //     display: 'flex',
// //     justifyContent: 'space-between',
// //     alignItems: 'center'
// //   },
// //   eventButton: {
// //     padding: '0.6rem 1.2rem',
// //     background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
// //     color: 'white',
// //     border: 'none',
// //     borderRadius: '25px',
// //     fontSize: '0.9rem',
// //     cursor: 'pointer',
// //     transition: 'all 0.3s ease'
// //   },
// //   eventLink: {
// //     color: '#667eea',
// //     textDecoration: 'none',
// //     fontSize: '0.9rem',
// //     fontWeight: '500'
// //   },
// //   pagination: {
// //     display: 'flex',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     gap: '0.5rem',
// //     marginTop: '2rem'
// //   },
// //   paginationButton: {
// //     padding: '0.8rem 1.2rem',
// //     border: 'none',
// //     borderRadius: '8px',
// //     background: 'rgba(255, 255, 255, 0.2)',
// //     color: 'white',
// //     cursor: 'pointer',
// //     transition: 'all 0.3s ease',
// //     backdropFilter: 'blur(10px)'
// //   },
// //   activePaginationButton: {
// //     background: 'white',
// //     color: '#333'
// //   },
// //   disabledButton: {
// //     opacity: 0.5,
// //     cursor: 'not-allowed'
// //   },
// //   loadingContainer: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     height: '100vh',
// //     background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
// //   },
// //   loader: {
// //     width: '50px',
// //     height: '50px',
// //     border: '3px solid rgba(255,255,255,0.3)',
// //     borderTop: '3px solid white',
// //     borderRadius: '50%',
// //     animation: 'spin 1s linear infinite'
// //   },
// //   loadingText: {
// //     color: 'white',
// //     fontSize: '1.2rem',
// //     marginTop: '1rem'
// //   },
// //   errorMessage: {
// //     background: 'rgba(244, 67, 54, 0.9)',
// //     color: 'white',
// //     padding: '1rem',
// //     borderRadius: '10px',
// //     textAlign: 'center',
// //     marginBottom: '2rem',
// //     display: 'flex',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     gap: '0.5rem'
// //   },
// //   errorIcon: {
// //     fontSize: '1.5rem'
// //   },
// //   noEvents: {
// //     textAlign: 'center',
// //     color: 'white',
// //     padding: '3rem'
// //   },
// //   noEventsIcon: {
// //     fontSize: '3rem',
// //     display: 'block',
// //     marginBottom: '1rem'
// //   },
// //   refreshContainer: {
// //     textAlign: 'center',
// //     padding: '2rem'
// //   },
// //   refreshButton: {
// //     padding: '1rem 2rem',
// //     background: 'rgba(255, 255, 255, 0.2)',
// //     color: 'white',
// //     border: 'none',
// //     borderRadius: '25px',
// //     fontSize: '1.1rem',
// //     cursor: 'pointer',
// //     transition: 'all 0.3s ease',
// //     backdropFilter: 'blur(10px)'
// //   }
// // };

// // // Add CSS animation for loading spinner
// // const styleSheet = document.createElement("style");
// // styleSheet.innerText = `
// //   @keyframes spin {
// //     0% { transform: rotate(0deg); }
// //     100% { transform: rotate(360deg); }
// //   }
  
// //   .eventCard:hover {
// //     transform: translateY(-5px);
// //     box-shadow: 0 15px 40px rgba(0,0,0,0.2);
// //   }
  
// //   .categoryButton:hover {
// //     transform: scale(1.05);
// //     background: rgba(255, 255, 255, 0.3);
// //   }
  
// //   .eventButton:hover {
// //     transform: scale(1.05);
// //   }
  
// //   .refreshButton:hover {
// //     background: rgba(255, 255, 255, 0.3);
// //     transform: scale(1.05);
// //   }
  
// //   .paginationButton:hover:not(.disabledButton) {
// //     background: rgba(255, 255, 255, 0.3);
// //   }
  
// //   .searchInput:focus {
// //     box-shadow: 0 12px 40px rgba(0,0,0,0.15);
// //     transform: scale(1.02);
// //   }
// // `;
// // document.head.appendChild(styleSheet);

// // export default LiveEventsDashboard;



// import React, { useState, useEffect } from 'react';

// const LiveSportsEventsDashboard = () => {
//   const [allFixtures, setAllFixtures] = useState([]);
//   const [filteredFixtures, setFilteredFixtures] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedSport, setSelectedSport] = useState('all');
//   const [selectedStatus, setSelectedStatus] = useState('all');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [viewMode, setViewMode] = useState('grid'); // grid or list
//   const [favorites, setFavorites] = useState([]);
//   const [liveOnly, setLiveOnly] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
//   const eventsPerPage = 12;

//   const API_KEY = '3e6a193cf636e95770435c61fe2579ab';

//   const sports = [
//     { id: 'all', name: 'All Sports', icon: '🏆', color: '#667eea' },
//     { id: 'football', name: 'Football', icon: '⚽', color: '#4CAF50', leagues: [39, 140, 78, 135] },
//     { id: 'basketball', name: 'Basketball', icon: '🏀', color: '#FF9800', leagues: [12] },
//     { id: 'tennis', name: 'Tennis', icon: '🎾', color: '#9C27B0', leagues: [1, 2] },
//     { id: 'ice-hockey', name: 'Ice Hockey', icon: '🏒', color: '#2196F3', leagues: [57] },
//     { id: 'baseball', name: 'Baseball', icon: '⚾', color: '#F44336', leagues: [1] },
//     { id: 'volleyball', name: 'Volleyball', icon: '🏐', color: '#00BCD4', leagues: [1] }
//   ];

//   const statusTypes = [
//     { id: 'all', name: 'All Status', icon: '📋' },
//     { id: 'live', name: 'Live Now', icon: '🔴' },
//     { id: 'scheduled', name: 'Upcoming', icon: '⏰' },
//     { id: 'finished', name: 'Finished', icon: '✅' },
//     { id: 'postponed', name: 'Postponed', icon: '⏸️' }
//   ];

//   useEffect(() => {
//     fetchSportsEvents();
//   }, [selectedDate]);

//   useEffect(() => {
//     filterFixtures();
//   }, [allFixtures, searchQuery, selectedSport, selectedStatus, liveOnly]);

//   const fetchSportsEvents = async () => {
//     setLoading(true);
//     try {
//       const allEvents = [];
      
//       // Fetch fixtures for different sports
//       for (const sport of sports) {
//         if (sport.id === 'all') continue;
        
//         if (sport.leagues) {
//           for (const leagueId of sport.leagues) {
//             try {
//               const response = await fetch(`https://v3.football.api-sports.io/fixtures?league=${leagueId}&date=${selectedDate}`, {
//                 method: 'GET',
//                 headers: {
//                   'X-RapidAPI-Key': API_KEY,
//                   'X-RapidAPI-Host': 'v3.football.api-sports.io'
//                 }
//               });

//               if (response.ok) {
//                 const data = await response.json();
//                 if (data.response) {
//                   const sportEvents = data.response.map(fixture => ({
//                     ...fixture,
//                     sport: sport.id,
//                     sportName: sport.name,
//                     sportIcon: sport.icon,
//                     sportColor: sport.color,
//                     id: fixture.fixture.id
//                   }));
//                   allEvents.push(...sportEvents);
//                 }
//               }
//             } catch (err) {
//               console.error(`Error fetching ${sport.name} fixtures:`, err);
//             }
//           }
//         }
//       }

//       setAllFixtures(allEvents);
//       setError(null);
//     } catch (err) {
//       setError('Failed to fetch sports events. Please try again later.');
//       console.error('Error fetching sports events:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const filterFixtures = () => {
//     let filtered = allFixtures;

//     if (selectedSport !== 'all') {
//       filtered = filtered.filter(fixture => fixture.sport === selectedSport);
//     }

//     if (selectedStatus !== 'all') {
//       filtered = filtered.filter(fixture => {
//         const status = fixture.fixture.status.short.toLowerCase();
//         switch (selectedStatus) {
//           case 'live':
//             return ['1h', '2h', 'ht', 'et', 'bt', 'p'].includes(status);
//           case 'scheduled':
//             return status === 'ns';
//           case 'finished':
//             return status === 'ft';
//           case 'postponed':
//             return status === 'pst';
//           default:
//             return true;
//         }
//       });
//     }

//     if (liveOnly) {
//       filtered = filtered.filter(fixture => {
//         const status = fixture.fixture.status.short.toLowerCase();
//         return ['1h', '2h', 'ht', 'et', 'bt', 'p'].includes(status);
//       });
//     }

//     if (searchQuery) {
//       filtered = filtered.filter(fixture =>
//         fixture.teams.home.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         fixture.teams.away.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         fixture.league.name.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     setFilteredFixtures(filtered);
//     setCurrentPage(1);
//   };

//   const toggleFavorite = (fixtureId) => {
//     setFavorites(prev => 
//       prev.includes(fixtureId) 
//         ? prev.filter(id => id !== fixtureId)
//         : [...prev, fixtureId]
//     );
//   };

//   const formatDateTime = (timestamp) => {
//     const date = new Date(timestamp * 1000);
//     return {
//       date: date.toLocaleDateString('en-US', {
//         weekday: 'short',
//         month: 'short',
//         day: 'numeric'
//       }),
//       time: date.toLocaleTimeString('en-US', {
//         hour: '2-digit',
//         minute: '2-digit'
//       })
//     };
//   };

//   const getStatusColor = (status) => {
//     switch (status.toLowerCase()) {
//       case '1h':
//       case '2h':
//       case 'ht':
//       case 'et':
//       case 'bt':
//       case 'p':
//         return '#FF4444';
//       case 'ns':
//         return '#4CAF50';
//       case 'ft':
//         return '#666';
//       case 'pst':
//         return '#FF9800';
//       default:
//         return '#999';
//     }
//   };

//   const getStatusText = (status) => {
//     switch (status.toLowerCase()) {
//       case '1h': return 'First Half';
//       case '2h': return 'Second Half';
//       case 'ht': return 'Half Time';
//       case 'et': return 'Extra Time';
//       case 'bt': return 'Break Time';
//       case 'p': return 'Penalty';
//       case 'ns': return 'Not Started';
//       case 'ft': return 'Full Time';
//       case 'pst': return 'Postponed';
//       default: return status;
//     }
//   };

//   // Pagination
//   const indexOfLastEvent = currentPage * eventsPerPage;
//   const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
//   const currentEvents = filteredFixtures.slice(indexOfFirstEvent, indexOfLastEvent);
//   const totalPages = Math.ceil(filteredFixtures.length / eventsPerPage);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   if (loading) {
//     return (
//       <div style={styles.loadingContainer}>
//         <div style={styles.loader}></div>
//         <p style={styles.loadingText}>Loading live sports events...</p>
//       </div>
//     );
//   }

//   return (
//     <div style={styles.container}>
//       {/* Header */}
//       <header style={styles.header}>
//         <div style={styles.headerContent}>
//           <h1 style={styles.title}>
//             <span style={styles.titleIcon}>🏆</span>
//             Live Sports Events Dashboard
//           </h1>
//           <p style={styles.subtitle}>Real-time sports fixtures and results from around the world</p>
//         </div>
//       </header>

//       {/* Controls Section */}
//       <section style={styles.controlSection}>
//         <div style={styles.topControls}>
//           <div style={styles.searchContainer}>
//             <input
//               type="text"
//               placeholder="Search teams, leagues, or matches..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               style={styles.searchInput}
//             />
//             <span style={styles.searchIcon}>🔍</span>
//           </div>

//           <div style={styles.dateContainer}>
//             <label style={styles.dateLabel}>📅 Select Date:</label>
//             <input
//               type="date"
//               value={selectedDate}
//               onChange={(e) => setSelectedDate(e.target.value)}
//               style={styles.dateInput}
//             />
//           </div>

//           <div style={styles.toggleContainer}>
//             <button
//               onClick={() => setLiveOnly(!liveOnly)}
//               style={{
//                 ...styles.toggleButton,
//                 ...(liveOnly ? styles.activeToggle : {})
//               }}
//             >
//               🔴 Live Only
//             </button>
//             <button
//               onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
//               style={styles.toggleButton}
//             >
//               {viewMode === 'grid' ? '📋' : '⚏'} {viewMode === 'grid' ? 'List' : 'Grid'}
//             </button>
//           </div>
//         </div>

//         <div style={styles.filterContainer}>
//           <div style={styles.sportsContainer}>
//             <h3 style={styles.filterTitle}>Sports:</h3>
//             <div style={styles.sportsGrid}>
//               {sports.map(sport => (
//                 <button
//                   key={sport.id}
//                   onClick={() => setSelectedSport(sport.id)}
//                   style={{
//                     ...styles.sportButton,
//                     backgroundColor: selectedSport === sport.id ? sport.color : 'rgba(255, 255, 255, 0.2)',
//                     color: selectedSport === sport.id ? 'white' : 'rgba(255, 255, 255, 0.9)'
//                   }}
//                 >
//                   <span style={styles.sportIcon}>{sport.icon}</span>
//                   {sport.name}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div style={styles.statusContainer}>
//             <h3 style={styles.filterTitle}>Status:</h3>
//             <div style={styles.statusGrid}>
//               {statusTypes.map(status => (
//                 <button
//                   key={status.id}
//                   onClick={() => setSelectedStatus(status.id)}
//                   style={{
//                     ...styles.statusButton,
//                     ...(selectedStatus === status.id ? styles.activeStatusButton : {})
//                   }}
//                 >
//                   <span style={styles.statusIcon}>{status.icon}</span>
//                   {status.name}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section style={styles.statsSection}>
//         <div style={styles.statCard}>
//           <span style={styles.statNumber}>{filteredFixtures.length}</span>
//           <span style={styles.statLabel}>Total Matches</span>
//         </div>
//         <div style={styles.statCard}>
//           <span style={styles.statNumber}>
//             {filteredFixtures.filter(f => {
//               const status = f.fixture.status.short.toLowerCase();
//               return ['1h', '2h', 'ht', 'et', 'bt', 'p'].includes(status);
//             }).length}
//           </span>
//           <span style={styles.statLabel}>Live Now</span>
//         </div>
//         <div style={styles.statCard}>
//           <span style={styles.statNumber}>{favorites.length}</span>
//           <span style={styles.statLabel}>Favorites</span>
//         </div>
//         <div style={styles.statCard}>
//           <span style={styles.statNumber}>
//             {sports.filter(s => s.id !== 'all').length}
//           </span>
//           <span style={styles.statLabel}>Sports</span>
//         </div>
//       </section>

//       {/* Events Section */}
//       <section style={styles.eventsSection}>
//         {error && (
//           <div style={styles.errorMessage}>
//             <span style={styles.errorIcon}>⚠️</span>
//             {error}
//           </div>
//         )}

//         {currentEvents.length === 0 && !loading && !error && (
//           <div style={styles.noEvents}>
//             <span style={styles.noEventsIcon}>🔍</span>
//             <h3>No events found</h3>
//             <p>Try adjusting your search criteria, date, or filters</p>
//           </div>
//         )}

//         <div style={viewMode === 'grid' ? styles.eventsGrid : styles.eventsList}>
//           {currentEvents.map((fixture) => {
//             const datetime = formatDateTime(fixture.fixture.timestamp);
//             const isLive = ['1h', '2h', 'ht', 'et', 'bt', 'p'].includes(fixture.fixture.status.short.toLowerCase());
//             const isFavorite = favorites.includes(fixture.id);
            
//             return (
//               <div 
//                 key={fixture.id} 
//                 style={viewMode === 'grid' ? styles.eventCard : styles.eventListItem}
//               >
//                 <div style={styles.eventCardHeader}>
//                   <div style={styles.eventHeaderLeft}>
//                     <span style={styles.sportBadge}>
//                       {fixture.sportIcon} {fixture.sportName}
//                     </span>
//                     {isLive && <span style={styles.liveBadge}>🔴 LIVE</span>}
//                   </div>
//                   <button
//                     onClick={() => toggleFavorite(fixture.id)}
//                     style={{
//                       ...styles.favoriteButton,
//                       color: isFavorite ? '#FF4444' : '#999'
//                     }}
//                   >
//                     {isFavorite ? '❤️' : '🤍'}
//                   </button>
//                 </div>

//                 <div style={styles.matchContent}>
//                   <div style={styles.leagueInfo}>
//                     <span style={styles.leagueName}>{fixture.league.name}</span>
//                     <span style={styles.leagueCountry}>{fixture.league.country}</span>
//                   </div>

//                   <div style={styles.matchInfo}>
//                     <div style={styles.teamContainer}>
//                       <div style={styles.team}>
//                         <img 
//                           src={fixture.teams.home.logo} 
//                           alt={fixture.teams.home.name}
//                           style={styles.teamLogo}
//                         />
//                         <span style={styles.teamName}>{fixture.teams.home.name}</span>
//                       </div>

//                       <div style={styles.matchCenter}>
//                         <div style={styles.score}>
//                           {fixture.goals.home !== null ? (
//                             <>
//                               <span style={styles.homeScore}>{fixture.goals.home}</span>
//                               <span style={styles.scoreSeparator}>-</span>
//                               <span style={styles.awayScore}>{fixture.goals.away}</span>
//                             </>
//                           ) : (
//                             <span style={styles.vsText}>VS</span>
//                           )}
//                         </div>
//                         <div 
//                           style={{
//                             ...styles.statusBadge,
//                             backgroundColor: getStatusColor(fixture.fixture.status.short)
//                           }}
//                         >
//                           {getStatusText(fixture.fixture.status.short)}
//                         </div>
//                       </div>

//                       <div style={styles.team}>
//                         <img 
//                           src={fixture.teams.away.logo} 
//                           alt={fixture.teams.away.name}
//                           style={styles.teamLogo}
//                         />
//                         <span style={styles.teamName}>{fixture.teams.away.name}</span>
//                       </div>
//                     </div>

//                     <div style={styles.matchDetails}>
//                       <div style={styles.dateTime}>
//                         <span style={styles.matchDate}>📅 {datetime.date}</span>
//                         <span style={styles.matchTime}>⏰ {datetime.time}</span>
//                       </div>
//                       {fixture.fixture.venue && (
//                         <div style={styles.venue}>
//                           <span style={styles.venueIcon}>🏟️</span>
//                           <span>{fixture.fixture.venue.name}, {fixture.fixture.venue.city}</span>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>

//                 <div style={styles.eventFooter}>
//                   <button style={styles.detailsButton}>
//                     View Details
//                   </button>
//                   <div style={styles.eventStats}>
//                     {fixture.fixture.status.elapsed && (
//                       <span style={styles.elapsed}>{fixture.fixture.status.elapsed}'</span>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Pagination */}
//         {totalPages > 1 && (
//           <div style={styles.pagination}>
//             <button
//               onClick={() => paginate(currentPage - 1)}
//               disabled={currentPage === 1}
//               style={{
//                 ...styles.paginationButton,
//                 ...(currentPage === 1 ? styles.disabledButton : {})
//               }}
//             >
//               ← Previous
//             </button>

//             {[...Array(Math.min(5, totalPages))].map((_, index) => {
//               const pageNumber = currentPage <= 3 ? index + 1 : currentPage - 2 + index;
//               if (pageNumber > totalPages) return null;
              
//               return (
//                 <button
//                   key={pageNumber}
//                   onClick={() => paginate(pageNumber)}
//                   style={{
//                     ...styles.paginationButton,
//                     ...(currentPage === pageNumber ? styles.activePaginationButton : {})
//                   }}
//                 >
//                   {pageNumber}
//                 </button>
//               );
//             })}

//             <button
//               onClick={() => paginate(currentPage + 1)}
//               disabled={currentPage === totalPages}
//               style={{
//                 ...styles.paginationButton,
//                 ...(currentPage === totalPages ? styles.disabledButton : {})
//               }}
//             >
//               Next →
//             </button>
//           </div>
//         )}
//       </section>

//       {/* Refresh Button */}
//       <div style={styles.refreshContainer}>
//         <button
//           onClick={fetchSportsEvents}
//           style={styles.refreshButton}
//           disabled={loading}
//         >
//           {loading ? '🔄 Refreshing...' : '🔄 Refresh Events'}
//         </button>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     minHeight: '100vh',
//     background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
//     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
//   },
//   header: {
//     background: 'rgba(255, 255, 255, 0.1)',
//     backdropFilter: 'blur(10px)',
//     padding: '2rem 0',
//     textAlign: 'center',
//     borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
//   },
//   headerContent: {
//     maxWidth: '1200px',
//     margin: '0 auto',
//     padding: '0 1rem'
//   },
//   title: {
//     fontSize: '3rem',
//     fontWeight: 'bold',
//     color: 'white',
//     margin: '0 0 0.5rem 0',
//     textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
//   },
//   titleIcon: {
//     marginRight: '1rem'
//   },
//   subtitle: {
//     fontSize: '1.2rem',
//     color: 'rgba(255, 255, 255, 0.9)',
//     margin: 0
//   },
//   controlSection: {
//     maxWidth: '1200px',
//     margin: '2rem auto',
//     padding: '0 1rem'
//   },
//   topControls: {
//     display: 'flex',
//     gap: '1rem',
//     marginBottom: '2rem',
//     flexWrap: 'wrap',
//     alignItems: 'center'
//   },
//   searchContainer: {
//     position: 'relative',
//     flex: '1',
//     minWidth: '300px'
//   },
//   searchInput: {
//     width: '100%',
//     padding: '1rem 3rem 1rem 1rem',
//     fontSize: '1.1rem',
//     border: 'none',
//     borderRadius: '50px',
//     background: 'white',
//     boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
//     outline: 'none',
//     transition: 'all 0.3s ease'
//   },
//   searchIcon: {
//     position: 'absolute',
//     right: '1rem',
//     top: '50%',
//     transform: 'translateY(-50%)',
//     fontSize: '1.2rem'
//   },
//   dateContainer: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '0.5rem'
//   },
//   dateLabel: {
//     color: 'white',
//     fontSize: '0.9rem',
//     fontWeight: 'bold'
//   },
//   dateInput: {
//     padding: '0.8rem',
//     border: 'none',
//     borderRadius: '10px',
//     background: 'white',
//     fontSize: '1rem',
//     outline: 'none'
//   },
//   toggleContainer: {
//     display: 'flex',
//     gap: '1rem'
//   },
//   toggleButton: {
//     padding: '0.8rem 1.5rem',
//     border: 'none',
//     borderRadius: '25px',
//     background: 'rgba(255, 255, 255, 0.2)',
//     color: 'white',
//     fontSize: '1rem',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//     backdropFilter: 'blur(10px)'
//   },
//   activeToggle: {
//     background: 'rgba(255, 68, 68, 0.8)',
//     transform: 'scale(1.05)'
//   },
//   filterContainer: {
//     background: 'rgba(255, 255, 255, 0.1)',
//     backdropFilter: 'blur(10px)',
//     padding: '2rem',
//     borderRadius: '20px',
//     border: '1px solid rgba(255, 255, 255, 0.2)'
//   },
//   filterTitle: {
//     color: 'white',
//     fontSize: '1.2rem',
//     marginBottom: '1rem',
//     fontWeight: 'bold'
//   },
//   sportsContainer: {
//     marginBottom: '2rem'
//   },
//   sportsGrid: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     gap: '1rem'
//   },
//   sportButton: {
//     padding: '0.8rem 1.5rem',
//     border: 'none',
//     borderRadius: '25px',
//     fontSize: '1rem',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//     display: 'flex',
//     alignItems: 'center',
//     gap: '0.5rem',
//     fontWeight: 'bold'
//   },
//   sportIcon: {
//     fontSize: '1.2rem'
//   },
//   statusContainer: {},
//   statusGrid: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     gap: '1rem'
//   },
//   statusButton: {
//     padding: '0.8rem 1.5rem',
//     border: 'none',
//     borderRadius: '25px',
//     background: 'rgba(255, 255, 255, 0.2)',
//     color: 'white',
//     fontSize: '1rem',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//     display: 'flex',
//     alignItems: 'center',
//     gap: '0.5rem'
//   },
//   activeStatusButton: {
//     background: 'rgba(255, 255, 255, 0.9)',
//     color: '#333',
//     transform: 'scale(1.05)'
//   },
//   statusIcon: {
//     fontSize: '1.2rem'
//   },
//   statsSection: {
//     display: 'flex',
//     justifyContent: 'center',
//     gap: '2rem',
//     maxWidth: '1200px',
//     margin: '2rem auto',
//     padding: '0 1rem',
//     flexWrap: 'wrap'
//   },
//   statCard: {
//     background: 'rgba(255, 255, 255, 0.15)',
//     backdropFilter: 'blur(10px)',
//     padding: '1.5rem',
//     borderRadius: '15px',
//     textAlign: 'center',
//     color: 'white',
//     minWidth: '150px',
//     border: '1px solid rgba(255, 255, 255, 0.2)'
//   },
//   statNumber: {
//     display: 'block',
//     fontSize: '2rem',
//     fontWeight: 'bold',
//     marginBottom: '0.5rem'
//   },
//   statLabel: {
//     fontSize: '0.9rem',
//     opacity: 0.9
//   },
//   eventsSection: {
//     maxWidth: '1200px',
//     margin: '0 auto',
//     padding: '0 1rem 2rem 1rem'
//   },
//   eventsGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
//     gap: '2rem',
//     marginBottom: '3rem'
//   },
//   eventsList: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '1rem',
//     marginBottom: '3rem'
//   },
//   eventCard: {
//     background: 'white',
//     borderRadius: '20px',
//     overflow: 'hidden',
//     boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
//     transition: 'all 0.3s ease',
//     cursor: 'pointer'
//   },
//   eventListItem: {
//     background: 'white',
//     borderRadius: '15px',
//     padding: '1.5rem',
//     boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
//     transition: 'all 0.3s ease'
//   },
//   eventCardHeader: {
//     background: 'linear-gradient(135deg, #4CAF50 0%, #2E7D3E 100%)',
//     padding: '1rem',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center'
//   },
//   eventHeaderLeft: {
//     display: 'flex',
//     gap: '1rem',
//     alignItems: 'center'
//   },
//   sportBadge: {
//     background: 'rgba(255, 255, 255, 0.2)',
//     color: 'white',
//     padding: '0.5rem 1rem',
//     borderRadius: '20px',
//     fontSize: '0.9rem',
//     fontWeight: 'bold'
//   },
//   liveBadge: {
//     background: '#FF4444',
//     color: 'white',
//     padding: '0.3rem 0.8rem',
//     borderRadius: '15px',
//     fontSize: '0.8rem',
//     fontWeight: 'bold',
//     animation: 'pulse 2s infinite'
//   },
//   favoriteButton: {
//     background: 'none',
//     border: 'none',
//     fontSize: '1.5rem',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease'
//   },
//   matchContent: {
//     padding: '1.5rem'
//   },
//   leagueInfo: {
//     marginBottom: '1rem'
//   },
//   leagueName: {
//     fontSize: '1.1rem',
//     fontWeight: 'bold',
//     color: '#333',
//     marginRight: '0.5rem'
//   },
//   leagueCountry: {
//     fontSize: '0.9rem',
//     color: '#666',
//     background: '#f0f0f0',
//     padding: '0.2rem 0.8rem',
//     borderRadius: '15px'
//   },
//   matchInfo: {
//     marginBottom: '1rem'
//   },
//   teamContainer: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginBottom: '1rem'
//   },
//   team: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     gap: '0.5rem',
//     flex: '1'
//   },
//   teamLogo: {
//     width: '40px',
//     height: '40px',
//     objectFit: 'contain'
//   },
//   teamName: {
//     fontSize: '0.9rem',
//     fontWeight: 'bold',
//     textAlign: 'center',
//     color: '#333'
//   },
//   matchCenter: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     gap: '0.5rem',
//     flex: '0 0 auto'
//   },
//   score: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '0.5rem',
//     fontSize: '1.5rem',
//     fontWeight: 'bold'
//   },
//   homeScore: {
//     color: '#4CAF50'
//   },
//   awayScore: {
//     color: '#4CAF50'
//   },
//   scoreSeparator: {
//     color: '#999'
//   },
//   vsText: {
//     color: '#999',
//     fontSize: '1.2rem',
//     fontWeight: 'bold'
//   },
//   statusBadge: {
//     padding: '0.3rem 0.8rem',
//     borderRadius: '15px',
//     color: 'white',
//     fontSize: '0.8rem',
//     fontWeight: 'bold',
//     textAlign: 'center'
//   },
//   matchDetails: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     flexWrap: 'wrap',
//     gap: '1rem'
//   },
//   dateTime: {
//     display: 'flex',
//     gap: '1rem',
//     alignItems: 'center'
//   },
//   matchDate: {
//     color: '#666',
//     fontSize: '0.9rem'
//   },
//   matchTime: {
//     color: '#666',
//     fontSize: '0.9rem'
//   },
//   venue: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '0.5rem',
//     color: '#666',
//     fontSize: '0.9rem'
//   },
//   venueIcon: {
//     fontSize: '1rem'
//   },
//   eventFooter: {
//     padding: '1rem 1.5rem',
//     background: '#f8f9fa',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center'
//   },
//   detailsButton: {
//     padding: '0.6rem 1.2rem',
//     background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
//     color: 'white',
//     border: 'none',
//     borderRadius: '25px',
//     fontSize: '0.9rem',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease'
//   },
//   eventStats: {
//     display: 'flex',
//     gap: '1rem',
//     alignItems: 'center'
//   },
//   elapsed: {
//     background: '#4CAF50',
//     color: 'white',
//     padding: '0.3rem 0.8rem',
//     borderRadius: '10px',
//     fontSize: '0.8rem',
//     fontWeight: 'bold'
//   },
//   pagination: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     gap: '0.5rem',
//     marginTop: '2rem',
//     flexWrap: 'wrap'
//   },
//   paginationButton: {
//     padding: '0.8rem 1.2rem',
//     border: 'none',
//     borderRadius: '8px',
//     background: 'rgba(255, 255, 255, 0.2)',
//     color: 'white',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//     backdropFilter: 'blur(10px)'
//   },
//   activePaginationButton: {
//     background: 'white',
//     color: '#333'
//   },
//   disabledButton: {
//     opacity: 0.5,
//     cursor: 'not-allowed'
//   },
//   loadingContainer: {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',
//     background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)'
//   },
//   loader: {
//     width: '50px',
//     height: '50px',
//     border: '3px solid rgba(255,255,255,0.3)',
//     borderTop: '3px solid white',
//     borderRadius: '50%',
//     animation: 'spin 1s linear infinite'
//   },
//   loadingText: {
//     color: 'white',
//     fontSize: '1.2rem',
//     marginTop: '1rem'
//   },
//   errorMessage: {
//     background: 'rgba(244, 67, 54, 0.9)',
//     color: 'white',
//     padding: '1rem',
//     borderRadius: '10px',
//     textAlign: 'center',
//     marginBottom: '2rem',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     gap: '0.5rem'
//   },
//   errorIcon: {
//     fontSize: '1.5rem'
//   },
//   noEvents: {
//     textAlign: 'center',
//     color: 'white',
//     padding: '3rem'
//   },
//   noEventsIcon: {
//     fontSize: '3rem',
//     display: 'block',
//     marginBottom: '1rem'
//   },
//   refreshContainer: {
//     textAlign: 'center',
//     padding: '2rem'
//   },
//   refreshButton: {
//     padding: '1rem 2rem',
//     background: 'rgba(255, 255, 255, 0.2)',
//     color: 'white',
//     border: 'none',
//     borderRadius: '25px',
//     fontSize: '1.1rem',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//     backdropFilter: 'blur(10px)'
//   }
// };

// // Add CSS animations
// const styleSheet = document.createElement("style");
// styleSheet.innerText = `
//   @keyframes spin {
//     0% { transform: rotate(0deg); }
//     100% { transform: rotate(360deg); }
//   }
  
//   @keyframes pulse {
//     0%, 100% { opacity: 1; }
//     50% { opacity: 0.5; }
//   }
  
//   .eventCard:hover, .eventListItem:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 15px 40px rgba(0,0,0,0.2);
//   }
  
//   .sportButton:hover {
//     transform: scale(1.05);
//   }
  
//   .statusButton:hover {
//     transform: scale(1.05);
//     background: rgba(255, 255, 255, 0.3);
//   }
  
//   .detailsButton:hover {
//     transform: scale(1.05);
//     box-shadow: 0 5px 15px rgba(0,0,0,0.2);
//   }
  
//   .refreshButton:hover {
//     background: rgba(255, 255, 255, 0.3);
//     transform: scale(1.05);
//   }
  
//   .toggleButton:hover {
//     background: rgba(255, 255, 255, 0.3);
//     transform: scale(1.05);
//   }
  
//   .paginationButton:hover:not(.disabledButton) {
//     background: rgba(255, 255, 255, 0.3);
//     transform: scale(1.05);
//   }
  
//   .searchInput:focus {
//     box-shadow: 0 12px 40px rgba(0,0,0,0.15);
//     transform: scale(1.02);
//   }
  
//   .favoriteButton:hover {
//     transform: scale(1.2);
//   }
  
//   @media (max-width: 768px) {
//     .topControls {
//       flex-direction: column;
//       align-items: stretch;
//     }
    
//     .sportsGrid, .statusGrid {
//       justify-content: center;
//     }
    
//     .teamContainer {
//       flex-direction: column;
//       gap: 1rem;
//     }
    
//     .matchCenter {
//       order: -1;
//       margin-bottom: 1rem;
//     }
    
//     .eventsGrid {
//       grid-template-columns: 1fr;
//     }
    
//     .statsSection {
//       grid-template-columns: repeat(2, 1fr);
//     }
//   }
// `;
// document.head.appendChild(styleSheet);

// export default LiveSportsEventsDashboard;





import React, { useState, useEffect } from 'react';

const LiveEventsPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = 'lMqgaKpTlGmnoZEnws1wlGa7Lo4a2f0R';
  const apiUrl = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&size=20&sort=date,asc`;

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setEvents(data._embedded?.events || []);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching events:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatTime = (timeStr) => {
    if (!timeStr) return '';
    const time = new Date(`1970-01-01T${timeStr}`);
    return time.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  if (loading) {
    return (
      <div style={styles.container}>
        <div style={styles.loader}>
          <div style={styles.loaderSpinner}></div>
          <p style={styles.loaderText}>Loading amazing events...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={styles.container}>
        <div style={styles.error}>
          <h2>Oops! Something went wrong</h2>
          <p>{error}</p>
          <button 
            style={styles.retryButton}
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>🎭 Live Events</h1>
        <p style={styles.subtitle}>Discover amazing events happening near you</p>
      </header>

      <div style={styles.eventsGrid}>
        {events.map((event) => (
          <div key={event.id} style={styles.eventCard}>
            <div style={styles.imageContainer}>
              <img
                src={event.images?.[0]?.url || '/api/placeholder/400/250'}
                alt={event.name}
                style={styles.eventImage}
              />
              <div style={styles.priceTag}>
                {event.priceRanges?.[0]?.min ? 
                  `$${event.priceRanges[0].min}` : 
                  'Price TBA'
                }
              </div>
            </div>
            
            <div style={styles.eventContent}>
              <h3 style={styles.eventTitle}>{event.name}</h3>
              
              <div style={styles.eventDetail}>
                <span style={styles.icon}>📅</span>
                <span>{formatDate(event.dates.start.localDate)}</span>
              </div>
              
              {event.dates.start.localTime && (
                <div style={styles.eventDetail}>
                  <span style={styles.icon}>🕒</span>
                  <span>{formatTime(event.dates.start.localTime)}</span>
                </div>
              )}
              
              <div style={styles.eventDetail}>
                <span style={styles.icon}>📍</span>
                <span>
                  {event._embedded?.venues?.[0]?.name || 'Venue TBA'}, {' '}
                  {event._embedded?.venues?.[0]?.city?.name || 'City TBA'}
                </span>
              </div>
              
              {event.classifications?.[0] && (
                <div style={styles.eventDetail}>
                  <span style={styles.icon}>🎨</span>
                  <span>{event.classifications[0].segment?.name}</span>
                </div>
              )}
              
              <div style={styles.cardFooter}>
                <a
                  href={event.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.ticketButton}
                >
                  Get Tickets
                </a>
                <div style={styles.eventStatus}>
                  <span style={{
                    ...styles.statusBadge,
                    backgroundColor: event.dates.status.code === 'onsale' ? '#22c55e' : '#f59e0b'
                  }}>
                    {event.dates.status.code === 'onsale' ? 'On Sale' : 'Coming Soon'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {events.length === 0 && (
        <div style={styles.noEvents}>
          <p>No events found at the moment. Check back soon!</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '20px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  },
  
  header: {
    textAlign: 'center',
    marginBottom: '40px',
    color: 'white'
  },
  
  title: {
    fontSize: '3rem',
    fontWeight: '700',
    margin: '0 0 10px 0',
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
  },
  
  subtitle: {
    fontSize: '1.2rem',
    fontWeight: '300',
    margin: '0',
    opacity: '0.9'
  },
  
  eventsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
    gap: '25px',
    maxWidth: '1400px',
    margin: '0 auto'
  },
  
  eventCard: {
    backgroundColor: 'white',
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    ':hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 15px 35px rgba(0,0,0,0.15)'
    }
  },
  
  imageContainer: {
    position: 'relative',
    height: '200px',
    overflow: 'hidden'
  },
  
  eventImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease'
  },
  
  priceTag: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    backgroundColor: '#ff6b6b',
    color: 'white',
    padding: '8px 15px',
    borderRadius: '20px',
    fontWeight: '600',
    fontSize: '0.9rem',
    boxShadow: '0 3px 10px rgba(255,107,107,0.3)'
  },
  
  eventContent: {
    padding: '20px'
  },
  
  eventTitle: {
    fontSize: '1.3rem',
    fontWeight: '600',
    color: '#2d3748',
    margin: '0 0 15px 0',
    lineHeight: '1.4'
  },
  
  eventDetail: {
    display: 'flex',
    alignItems: 'center',
    margin: '8px 0',
    color: '#4a5568',
    fontSize: '0.95rem'
  },
  
  icon: {
    marginRight: '10px',
    fontSize: '1.1rem'
  },
  
  cardFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '20px',
    paddingTop: '15px',
    borderTop: '1px solid #e2e8f0'
  },
  
  ticketButton: {
    backgroundColor: '#4f46e5',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '0.9rem',
    transition: 'all 0.3s ease',
    border: 'none',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: '#4338ca',
      transform: 'translateY(-2px)',
      boxShadow: '0 5px 15px rgba(79,70,229,0.4)'
    }
  },
  
  eventStatus: {
    display: 'flex',
    alignItems: 'center'
  },
  
  statusBadge: {
    padding: '5px 12px',
    borderRadius: '15px',
    color: 'white',
    fontSize: '0.8rem',
    fontWeight: '500'
  },
  
  loader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '60vh',
    color: 'white'
  },
  
  loaderSpinner: {
    width: '50px',
    height: '50px',
    border: '5px solid rgba(255,255,255,0.3)',
    borderTop: '5px solid white',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
    marginBottom: '20px'
  },
  
  loaderText: {
    fontSize: '1.2rem',
    fontWeight: '300'
  },
  
  error: {
    textAlign: 'center',
    color: 'white',
    padding: '40px',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: '15px',
    maxWidth: '500px',
    margin: '0 auto'
  },
  
  retryButton: {
    backgroundColor: '#ef4444',
    color: 'white',
    padding: '12px 25px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    marginTop: '15px',
    transition: 'background-color 0.3s ease'
  },
  
  noEvents: {
    textAlign: 'center',
    color: 'white',
    fontSize: '1.2rem',
    fontWeight: '300',
    padding: '40px'
  }
};

// Add keyframes for spinner animation
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  .event-card:hover .event-image {
    transform: scale(1.05);
  }
  
  .ticket-button:hover {
    background-color: #4338ca !important;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(79,70,229,0.4);
  }
`;
document.head.appendChild(styleSheet);

export default LiveEventsPage;