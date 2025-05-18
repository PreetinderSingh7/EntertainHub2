// import React, { useState, useEffect } from 'react';

// const API_KEY = 'AIzaSyCidK3IstYtKFv9gPpIv5iPU9nA1eoD1sU';

// const MovieStreamingSite = () => {
//   const [movies, setMovies] = useState({
//     trending: [],
//     action: [],
//     comedy: [],
//     drama: [],
//     horror: []
//   });
//   const [searchResults, setSearchResults] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedMovie, setSelectedMovie] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [isSearching, setIsSearching] = useState(false);

//   const movieQueries = {
//     trending: 'most popular movies 2024 full movie',
//     action: 'action movies full movie',
//     comedy: 'comedy movies full movie',
//     drama: 'drama movies full movie',
//     horror: 'horror movies full movie'
//   };

//   useEffect(() => {
//     fetchMoviesByCategory();
//   }, []);

//   const fetchMoviesByCategory = async () => {
//     setLoading(true);
//     try {
//       const categories = Object.keys(movieQueries);
//       const promises = categories.map(category => 
//         fetchYouTubeVideos(movieQueries[category])
//       );
      
//       const results = await Promise.all(promises);
//       const movieData = {};
      
//       categories.forEach((category, index) => {
//         movieData[category] = results[index];
//       });
      
//       setMovies(movieData);
//     } catch (error) {
//       console.error('Error fetching movies:', error);
//     }
//     setLoading(false);
//   };

//   const fetchYouTubeVideos = async (query) => {
//     try {
//       const response = await fetch(
//         `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${encodeURIComponent(query)}&type=video&videoDuration=long&key=${API_KEY}`
//       );
//       const data = await response.json();
//       return data.items || [];
//     } catch (error) {
//       console.error('Error fetching YouTube videos:', error);
//       return [];
//     }
//   };

//   const handleSearch = async () => {
//     if (!searchQuery.trim()) return;
    
//     setIsSearching(true);
//     const results = await fetchYouTubeVideos(`${searchQuery} full movie`);
//     setSearchResults(results);
//     setIsSearching(false);
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       handleSearch();
//     }
//   };

//   const playMovie = (movie) => {
//     setSelectedMovie(movie);
//   };

//   const closePlayer = () => {
//     setSelectedMovie(null);
//   };

//   const MovieCard = ({ movie, size = 'normal' }) => {
//     const cardClass = size === 'large' ? 'movie-card-large' : 'movie-card';
    
//     return (
//       <div className={cardClass} onClick={() => playMovie(movie)}>
//         <img 
//           src={movie.snippet.thumbnails.high?.url || movie.snippet.thumbnails.default.url}
//           alt={movie.snippet.title}
//           className="movie-thumbnail"
//         />
//         <div className="movie-overlay">
//           <div className="play-button">▶</div>
//           <div className="movie-info">
//             <h3>{movie.snippet.title}</h3>
//             <p>{movie.snippet.channelTitle}</p>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const MovieSection = ({ title, movies, featured = false }) => (
//     <section className="movie-section">
//       <h2 className="section-title">{title}</h2>
//       <div className={featured ? 'movie-grid-featured' : 'movie-grid'}>
//         {movies.map((movie, index) => (
//           <MovieCard 
//             key={movie.id.videoId} 
//             movie={movie} 
//             size={featured && index === 0 ? 'large' : 'normal'}
//           />
//         ))}
//       </div>
//     </section>
//   );

//   if (loading) {
//     return (
//       <div className="loading-container">
//         <div className="loading-spinner"></div>
//         <p>Loading movies...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="movie-app">
//       <style>{`
//         * {
//           margin: 0;
//           padding: 0;
//           box-sizing: border-box;
//         }

//         body {
//           font-family: 'Arial', sans-serif;
//           background-color: #141414;
//           color: white;
//           overflow-x: hidden;
//         }

//         .movie-app {
//           min-height: 100vh;
//           background: linear-gradient(to bottom, #141414, #000000);
//         }

//         .header {
//           position: fixed;
//           top: 0;
//           width: 100%;
//           z-index: 1000;
//           background: rgba(20, 20, 20, 0.9);
//           backdrop-filter: blur(10px);
//           padding: 20px;
//           border-bottom: 1px solid #333;
//         }

//         .nav-container {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           max-width: 1200px;
//           margin: 0 auto;
//         }

//         .logo {
//           font-size: 2rem;
//           font-weight: bold;
//           color: #e50914;
//         }

//         .search-container {
//           flex: 1;
//           max-width: 500px;
//           margin: 0 40px;
//         }

//         .search-form {
//           display: flex;
//           background: rgba(255, 255, 255, 0.1);
//           border-radius: 25px;
//           overflow: hidden;
//           border: 2px solid transparent;
//           transition: border-color 0.3s;
//         }

//         .search-input {
//           flex: 1;
//           padding: 12px 20px;
//           background: transparent;
//           border: none;
//           color: white;
//           font-size: 16px;
//           outline: none;
//         }

//         .search-input::placeholder {
//           color: #888;
//         }

//         .search-button {
//           padding: 12px 20px;
//           background: #e50914;
//           border: none;
//           color: white;
//           cursor: pointer;
//           transition: background 0.3s;
//         }

//         .search-button:hover {
//           background: #f40612;
//         }

//         .main-content {
//           padding-top: 100px;
//           padding-bottom: 50px;
//         }

//         .hero-section {
//           height: 60vh;
//           background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.8)),
//                       url('/api/placeholder/1200/600');
//           background-size: cover;
//           background-position: center;
//           display: flex;
//           align-items: center;
//           padding: 0 50px;
//           margin-bottom: 50px;
//         }

//         .hero-content {
//           max-width: 600px;
//         }

//         .hero-title {
//           font-size: 3.5rem;
//           margin-bottom: 20px;
//           font-weight: bold;
//         }

//         .hero-description {
//           font-size: 1.2rem;
//           margin-bottom: 30px;
//           line-height: 1.6;
//         }

//         .hero-buttons {
//           display: flex;
//           gap: 20px;
//         }

//         .btn {
//           padding: 15px 30px;
//           border: none;
//           border-radius: 5px;
//           font-size: 16px;
//           font-weight: bold;
//           cursor: pointer;
//           transition: all 0.3s;
//         }

//         .btn-primary {
//           background: #e50914;
//           color: white;
//         }

//         .btn-primary:hover {
//           background: #f40612;
//           transform: translateY(-2px);
//         }

//         .btn-secondary {
//           background: rgba(255, 255, 255, 0.2);
//           color: white;
//           border: 2px solid #fff;
//         }

//         .btn-secondary:hover {
//           background: rgba(255, 255, 255, 0.3);
//         }

//         .movie-section {
//           margin-bottom: 50px;
//           padding: 0 50px;
//         }

//         .section-title {
//           font-size: 1.8rem;
//           margin-bottom: 20px;
//           font-weight: bold;
//         }

//         .movie-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
//           gap: 20px;
//         }

//         .movie-grid-featured {
//           display: grid;
//           grid-template-columns: 2fr 1fr 1fr 1fr;
//           gap: 20px;
//           margin-bottom: 30px;
//         }

//         .movie-card, .movie-card-large {
//           position: relative;
//           border-radius: 10px;
//           overflow: hidden;
//           cursor: pointer;
//           transition: transform 0.3s, box-shadow 0.3s;
//           background: #222;
//         }

//         .movie-card {
//           aspect-ratio: 16/9;
//         }

//         .movie-card-large {
//           aspect-ratio: 16/10;
//         }

//         .movie-card:hover, .movie-card-large:hover {
//           transform: scale(1.05);
//           box-shadow: 0 10px 20px rgba(0,0,0,0.5);
//         }

//         .movie-thumbnail {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//         }

//         .movie-overlay {
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           background: linear-gradient(transparent 60%, rgba(0,0,0,0.8));
//           display: flex;
//           flex-direction: column;
//           justify-content: space-between;
//           padding: 20px;
//           opacity: 0;
//           transition: opacity 0.3s;
//         }

//         .movie-card:hover .movie-overlay,
//         .movie-card-large:hover .movie-overlay {
//           opacity: 1;
//         }

//         .play-button {
//           align-self: center;
//           margin-top: auto;
//           margin-bottom: auto;
//           font-size: 3rem;
//           color: #e50914;
//           text-shadow: 0 0 10px rgba(229, 9, 20, 0.5);
//         }

//         .movie-info {
//           color: white;
//         }

//         .movie-info h3 {
//           font-size: 1.1rem;
//           margin-bottom: 5px;
//           display: -webkit-box;
//           -webkit-line-clamp: 2;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }

//         .movie-info p {
//           font-size: 0.9rem;
//           color: #ccc;
//         }

//         .movie-player {
//           position: fixed;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           background: rgba(0, 0, 0, 0.95);
//           z-index: 2000;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           padding: 20px;
//         }

//         .player-container {
//           position: relative;
//           width: 90%;
//           max-width: 1200px;
//           aspect-ratio: 16/9;
//           background: #000;
//           border-radius: 10px;
//           overflow: hidden;
//         }

//         .close-button {
//           position: absolute;
//           top: -50px;
//           right: 0;
//           background: none;
//           border: none;
//           color: white;
//           font-size: 2rem;
//           cursor: pointer;
//           z-index: 1;
//         }

//         .close-button:hover {
//           color: #e50914;
//         }

//         .youtube-player {
//           width: 100%;
//           height: 100%;
//           border: none;
//         }

//         .loading-container {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           height: 100vh;
//           background: #141414;
//         }

//         .loading-spinner {
//           width: 50px;
//           height: 50px;
//           border: 3px solid #333;
//           border-top: 3px solid #e50914;
//           border-radius: 50%;
//           animation: spin 1s linear infinite;
//           margin-bottom: 20px;
//         }

//         @keyframes spin {
//           0% { transform: rotate(0deg); }
//           100% { transform: rotate(360deg); }
//         }

//         .search-results {
//           padding: 0 50px;
//           margin-top: 30px;
//         }

//         @media (max-width: 768px) {
//           .nav-container {
//             flex-direction: column;
//             gap: 20px;
//           }

//           .search-container {
//             margin: 0;
//             width: 100%;
//           }

//           .hero-section {
//             height: 50vh;
//             padding: 0 20px;
//           }

//           .hero-title {
//             font-size: 2.5rem;
//           }

//           .movie-section {
//             padding: 0 20px;
//           }

//           .movie-grid-featured {
//             grid-template-columns: 1fr;
//           }

//           .movie-grid {
//             grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
//           }
//         }
//       `}</style>

//       <header className="header">
//         <div className="nav-container">
//           <div className="logo">CinemaFlix</div>
//           <div className="search-container">
//             <div className="search-form">
//               <input
//                 type="text"
//                 className="search-input"
//                 placeholder="Search for movies..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 onKeyPress={handleKeyPress}
//               />
//               <button type="button" className="search-button" onClick={handleSearch}>
//                 {isSearching ? '...' : 'Search'}
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       <main className="main-content">
//         {!searchQuery && (
//           <>
//             <section className="hero-section">
//               <div className="hero-content">
//                 <h1 className="hero-title">Unlimited Movies</h1>
//                 <p className="hero-description">
//                   Watch anywhere. Stream thousands of movies and shows instantly.
//                 </p>
//                 <div className="hero-buttons">
//                   <button className="btn btn-primary">Watch Now</button>
//                   <button className="btn btn-secondary">Learn More</button>
//                 </div>
//               </div>
//             </section>

//             <MovieSection title="Trending Now" movies={movies.trending} featured />
//             <MovieSection title="Action Movies" movies={movies.action} />
//             <MovieSection title="Comedy Movies" movies={movies.comedy} />
//             <MovieSection title="Drama Movies" movies={movies.drama} />
//             <MovieSection title="Horror Movies" movies={movies.horror} />
//           </>
//         )}

//         {searchQuery && searchResults.length > 0 && (
//           <div className="search-results">
//             <MovieSection title={`Search Results for "${searchQuery}"`} movies={searchResults} />
//           </div>
//         )}

//         {searchQuery && searchResults.length === 0 && !isSearching && (
//           <div className="search-results">
//             <h2 className="section-title">No results found for "{searchQuery}"</h2>
//           </div>
//         )}
//       </main>

//       {selectedMovie && (
//         <div className="movie-player">
//           <div className="player-container">
//             <button className="close-button" onClick={closePlayer}>×</button>
//             <iframe
//               className="youtube-player"
//               src={`https://www.youtube.com/embed/${selectedMovie.id.videoId}?autoplay=1&rel=0`}
//               title={selectedMovie.snippet.title}
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MovieStreamingSite;
import React, { useState, useEffect } from 'react';

const API_KEY = 'AIzaSyCidK3IstYtKFv9gPpIv5iPU9nA1eoD1sU';

const MovieStreamingSite = () => {
  const [movies, setMovies] = useState({
    trending: [],
    action: [],
    comedy: [],
    drama: [],
    horror: []
  });
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

  const movieQueries = {
    trending: 'most popular movies 2024 full movie',
    action: 'action movies full movie',
    comedy: 'comedy movies full movie',
    drama: 'drama movies full movie',
    horror: 'horror movies full movie'
  };

  useEffect(() => {
    fetchMoviesByCategory();
  }, []);

  const fetchMoviesByCategory = async () => {
    setLoading(true);
    try {
      const categories = Object.keys(movieQueries);
      const promises = categories.map(category => 
        fetchYouTubeVideos(movieQueries[category])
      );
      
      const results = await Promise.all(promises);
      const movieData = {};
      
      categories.forEach((category, index) => {
        movieData[category] = results[index];
      });
      
      setMovies(movieData);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
    setLoading(false);
  };

  const fetchYouTubeVideos = async (query) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${encodeURIComponent(query)}&type=video&videoDuration=long&key=${API_KEY}`
      );
      const data = await response.json();
      return data.items || [];
    } catch (error) {
      console.error('Error fetching YouTube videos:', error);
      return [];
    }
  };

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    const results = await fetchYouTubeVideos(`${searchQuery} full movie`);
    setSearchResults(results);
    setIsSearching(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const playMovie = (movie) => {
    setSelectedMovie(movie);
  };

  const closePlayer = () => {
    setSelectedMovie(null);
  };

  const handleWatchNow = () => {
    if (movies.trending.length > 0) {
      playMovie(movies.trending[0]);
    }
  };

  const handleLearnMore = () => {
    setShowInstructions(true);
  };

  const closeInstructions = () => {
    setShowInstructions(false);
  };

  const MovieCard = ({ movie, size = 'normal' }) => {
    const cardClass = size === 'large' ? 'movie-card-large' : 'movie-card';
    
    return (
      <div className={cardClass} onClick={() => playMovie(movie)}>
        <img 
          src={movie.snippet.thumbnails.high?.url || movie.snippet.thumbnails.default.url}
          alt={movie.snippet.title}
          className="movie-thumbnail"
        />
        <div className="movie-overlay">
          <div className="play-button">▶</div>
          <div className="movie-info">
            <h3>{movie.snippet.title}</h3>
            <p>{movie.snippet.channelTitle}</p>
          </div>
        </div>
      </div>
    );
  };

  const MovieSection = ({ title, movies, featured = false }) => (
    <section className="movie-section">
      <h2 className="section-title">{title}</h2>
      <div className={featured ? 'movie-grid-featured' : 'movie-grid'}>
        {movies.map((movie, index) => (
          <MovieCard 
            key={movie.id.videoId} 
            movie={movie} 
            size={featured && index === 0 ? 'large' : 'normal'}
          />
        ))}
      </div>
    </section>
  );

  const InstructionsModal = () => (
    <div className="instructions-modal">
      <div className="instructions-content">
        <button className="close-instructions" onClick={closeInstructions}>×</button>
        <h2>How to Use CinemaFlix</h2>
        <div className="instructions-text">
          <h3>🎬 Getting Started</h3>
          <p>Welcome to CinemaFlix! Here's how to enjoy unlimited movies:</p>
          
          <h3>🔍 Searching for Movies</h3>
          <ul>
            <li>Use the search bar at the top to find specific movies</li>
            <li>Type movie titles, actors, or genres</li>
            <li>Press Enter or click Search to see results</li>
          </ul>
          
          <h3>🎯 Browsing Categories</h3>
          <ul>
            <li><strong>Trending Now:</strong> Most popular current movies</li>
            <li><strong>Action:</strong> High-energy action films</li>
            <li><strong>Comedy:</strong> Funny movies to brighten your day</li>
            <li><strong>Drama:</strong> Emotional and compelling stories</li>
            <li><strong>Horror:</strong> Scary movies for thrill seekers</li>
          </ul>
          
          <h3>▶️ Watching Movies</h3>
          <ul>
            <li>Click on any movie poster to start watching</li>
            <li>Movies will open in a full-screen player</li>
            <li>Click the × button to close the player</li>
            <li>Use the "Watch Now" button on the homepage for instant entertainment</li>
          </ul>
          
          <h3>📱 Mobile Friendly</h3>
          <p>CinemaFlix works great on all devices - desktop, tablet, and mobile!</p>
          
          <h3>🆓 Completely Free</h3>
          <p>Enjoy unlimited streaming with no subscription required!</p>
        </div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading movies...</p>
      </div>
    );
  }

  return (
    <div className="movie-app">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Arial', sans-serif;
          background-color: #141414;
          color: white;
          overflow-x: hidden;
        }

        .movie-app {
          min-height: 100vh;
          background: linear-gradient(to bottom, #141414, #000000);
        }

        .header {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 1000;
          background: rgba(20, 20, 20, 0.9);
          backdrop-filter: blur(10px);
          padding: 20px;
          border-bottom: 1px solid #333;
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }

        .logo {
          font-size: 2rem;
          font-weight: bold;
          color: #e50914;
        }

        .search-container {
          flex: 1;
          max-width: 500px;
          margin: 0 40px;
        }

        .search-form {
          display: flex;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 25px;
          overflow: hidden;
          border: 2px solid transparent;
          transition: border-color 0.3s;
        }

        .search-input {
          flex: 1;
          padding: 12px 20px;
          background: transparent;
          border: none;
          color: white;
          font-size: 16px;
          outline: none;
        }

        .search-input::placeholder {
          color: #888;
        }

        .search-button {
          padding: 12px 20px;
          background: #e50914;
          border: none;
          color: white;
          cursor: pointer;
          transition: background 0.3s;
        }

        .search-button:hover {
          background: #f40612;
        }

        .main-content {
          padding-top: 100px;
          padding-bottom: 50px;
        }

        .hero-section {
          height: 60vh;
          background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.8)),
                      url('/api/placeholder/1200/600');
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          padding: 0 50px;
          margin-bottom: 50px;
        }

        .hero-content {
          max-width: 600px;
        }

        .hero-title {
          font-size: 3.5rem;
          margin-bottom: 20px;
          font-weight: bold;
        }

        .hero-description {
          font-size: 1.2rem;
          margin-bottom: 30px;
          line-height: 1.6;
        }

        .hero-buttons {
          display: flex;
          gap: 20px;
        }

        .btn {
          padding: 15px 30px;
          border: none;
          border-radius: 5px;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s;
        }

        .btn-primary {
          background: #e50914;
          color: white;
        }

        .btn-primary:hover {
          background: #f40612;
          transform: translateY(-2px);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          border: 2px solid #fff;
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        .movie-section {
          margin-bottom: 50px;
          padding: 0 50px;
        }

        .section-title {
          font-size: 1.8rem;
          margin-bottom: 20px;
          font-weight: bold;
        }

        .movie-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 20px;
        }

        .movie-grid-featured {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 20px;
          margin-bottom: 30px;
        }

        .movie-card, .movie-card-large {
          position: relative;
          border-radius: 10px;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.3s, box-shadow 0.3s;
          background: #222;
        }

        .movie-card {
          aspect-ratio: 16/9;
        }

        .movie-card-large {
          aspect-ratio: 16/10;
        }

        .movie-card:hover, .movie-card-large:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 20px rgba(0,0,0,0.5);
        }

        .movie-thumbnail {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .movie-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(transparent 60%, rgba(0,0,0,0.8));
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 20px;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .movie-card:hover .movie-overlay,
        .movie-card-large:hover .movie-overlay {
          opacity: 1;
        }

        .play-button {
          align-self: center;
          margin-top: auto;
          margin-bottom: auto;
          font-size: 3rem;
          color: #e50914;
          text-shadow: 0 0 10px rgba(229, 9, 20, 0.5);
        }

        .movie-info {
          color: white;
        }

        .movie-info h3 {
          font-size: 1.1rem;
          margin-bottom: 5px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .movie-info p {
          font-size: 0.9rem;
          color: #ccc;
        }

        .movie-player {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.95);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .player-container {
          position: relative;
          width: 90%;
          max-width: 1200px;
          aspect-ratio: 16/9;
          background: #000;
          border-radius: 10px;
          overflow: hidden;
        }

        .close-button {
          position: absolute;
          top: -60px;
          right: 0;
          background: #e50914;
          border: none;
          color: white;
          font-size: 2rem;
          cursor: pointer;
          z-index: 1;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
        }

        .close-button:hover {
          background: #f40612;
          transform: scale(1.1);
        }

        .youtube-player {
          width: 100%;
          height: 100%;
          border: none;
        }

        .instructions-modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.9);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .instructions-content {
          position: relative;
          background: #1a1a1a;
          border-radius: 15px;
          padding: 40px;
          max-width: 800px;
          max-height: 80vh;
          overflow-y: auto;
          border: 2px solid #e50914;
        }

        .close-instructions {
          position: absolute;
          top: 15px;
          right: 20px;
          background: #e50914;
          border: none;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
          width: 35px;
          height: 35px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
        }

        .close-instructions:hover {
          background: #f40612;
          transform: scale(1.1);
        }

        .instructions-content h2 {
          color: #e50914;
          margin-bottom: 25px;
          font-size: 2rem;
          text-align: center;
        }

        .instructions-content h3 {
          color: #fff;
          margin: 20px 0 10px 0;
          font-size: 1.3rem;
        }

        .instructions-content p {
          margin-bottom: 15px;
          line-height: 1.6;
          color: #ccc;
        }

        .instructions-content ul {
          margin-left: 20px;
          margin-bottom: 20px;
        }

        .instructions-content li {
          margin-bottom: 8px;
          color: #ccc;
          line-height: 1.5;
        }

        .footer {
          background: #000;
          padding: 50px 0 30px 0;
          border-top: 1px solid #333;
          margin-top: 50px;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 50px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
          margin-bottom: 30px;
        }

        .footer-section h3 {
          color: #e50914;
          margin-bottom: 20px;
          font-size: 1.2rem;
        }

        .footer-section ul {
          list-style: none;
        }

        .footer-section li {
          margin-bottom: 10px;
        }

        .footer-section a {
          color: #ccc;
          text-decoration: none;
          transition: color 0.3s;
        }

        .footer-section a:hover {
          color: #e50914;
        }

        .footer-bottom {
          border-top: 1px solid #333;
          padding-top: 20px;
          text-align: center;
          color: #666;
        }

        .social-icons {
          display: flex;
          gap: 15px;
          justify-content: center;
          margin-bottom: 15px;
        }

        .social-icon {
          width: 40px;
          height: 40px;
          background: #333;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ccc;
          text-decoration: none;
          transition: all 0.3s;
        }

        .social-icon:hover {
          background: #e50914;
          color: white;
          transform: translateY(-3px);
        }

        .loading-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background: #141414;
        }

        .loading-spinner {
          width: 50px;
          height: 50px;
          border: 3px solid #333;
          border-top: 3px solid #e50914;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 20px;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .search-results {
          padding: 0 50px;
          margin-top: 30px;
        }

        @media (max-width: 768px) {
          .nav-container {
            flex-direction: column;
            gap: 20px;
          }

          .search-container {
            margin: 0;
            width: 100%;
          }

          .hero-section {
            height: 50vh;
            padding: 0 20px;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .movie-section {
            padding: 0 20px;
          }

          .footer-content {
            padding: 0 20px;
          }

          .movie-grid-featured {
            grid-template-columns: 1fr;
          }

          .movie-grid {
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          }

          .instructions-content {
            padding: 30px 20px;
            margin: 10px;
          }

          .hero-buttons {
            flex-direction: column;
            gap: 15px;
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
        }
          .close-button {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(229, 9, 20, 0.9);
          border: none;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
          z-index: 10;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }
      `}</style>

      <header className="header">
        <div className="nav-container">
          <div className="logo">CinemaFlix</div>
          <div className="search-container">
            <div className="search-form">
              <input
                type="text"
                className="search-input"
                placeholder="Search for movies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button type="button" className="search-button" onClick={handleSearch}>
                {isSearching ? '...' : 'Search'}
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="main-content">
        {!searchQuery && (
          <>
            <section className="hero-section">
              <div className="hero-content">
                <h1 className="hero-title">Unlimited Movies</h1>
                <p className="hero-description">
                  Watch anywhere. Stream thousands of movies and shows instantly.
                </p>
                <div className="hero-buttons">
                  <button className="btn btn-primary" onClick={handleWatchNow}>
                    Watch Now
                  </button>
                  <button className="btn btn-secondary" onClick={handleLearnMore}>
                    Learn More
                  </button>
                </div>
              </div>
            </section>

            <MovieSection title="Trending Now" movies={movies.trending} featured />
            <MovieSection title="Action Movies" movies={movies.action} />
            <MovieSection title="Comedy Movies" movies={movies.comedy} />
            <MovieSection title="Drama Movies" movies={movies.drama} />
            <MovieSection title="Horror Movies" movies={movies.horror} />
          </>
        )}

        {searchQuery && searchResults.length > 0 && (
          <div className="search-results">
            <MovieSection title={`Search Results for "${searchQuery}"`} movies={searchResults} />
          </div>
        )}

        {searchQuery && searchResults.length === 0 && !isSearching && (
          <div className="search-results">
            <h2 className="section-title">No results found for "{searchQuery}"</h2>
          </div>
        )}
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-grid">
            <div className="footer-section">
              <h3>Browse</h3>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#trending">Trending</a></li>
                <li><a href="#movies">Movies</a></li>
                <li><a href="#genres">Genres</a></li>
                <li><a href="#new-releases">New Releases</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Help & Support</h3>
              <ul>
                <li><a href="#help">Help Center</a></li>
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#feedback">Feedback</a></li>
                <li><a href="#report">Report Issue</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Company</h3>
              <ul>
                <li><a href="#about">About CinemaFlix</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#press">Press</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#investors">Investors</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Legal</h3>
              <ul>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms of Service</a></li>
                <li><a href="#cookies">Cookie Policy</a></li>
                <li><a href="#dmca">DMCA</a></li>
                <li><a href="#accessibility">Accessibility</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="social-icons">
              <a href="#facebook" className="social-icon">f</a>
              <a href="#twitter" className="social-icon">t</a>
              <a href="#instagram" className="social-icon">i</a>
              <a href="#youtube" className="social-icon">y</a>
            </div>
            <p>&copy; 2024 CinemaFlix. All rights reserved. | Made with ❤️ for movie lovers</p>
          </div>
        </div>
      </footer>

      {selectedMovie && (
        <div className="movie-player">
          <div className="player-container">
            <button className="close-button" onClick={closePlayer}>×</button>
            <iframe
              className="youtube-player"
              src={`https://www.youtube.com/embed/${selectedMovie.id.videoId}?autoplay=1&rel=0`}
              title={selectedMovie.snippet.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {showInstructions && <InstructionsModal />}
    </div>
  );
};

export default MovieStreamingSite;