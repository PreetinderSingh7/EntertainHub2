import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Main2.css';

// Component imports
import LoadingScreen from '../component2/LoadingScreen';
import Sidebar from '../component2/Sidebar';
import MenuToggle from '../component2/MenuToggle';
import ProfileModal from '../component2/ProfileModel';
import Hero from '../component2/Hero';
import ContentSection from '../component2/ContentSection';
import FeaturesSection from '../component2/FeaturesSection';
import NewsSection from '../component2/NewsSection';
import Footer from '../component2/Footer';
import Notification from '../component2/Notification';

function Main2() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const [isProfileModalActive, setIsProfileModalActive] = useState(false);
  const [notification, setNotification] = useState({ show: false, message: '' });
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [activeSection, setActiveSection] = useState('home');

  // State for API data
  const [movies, setMovies] = useState([]);
  const [shows, setShows] = useState([]);
  const [music, setMusic] = useState([]);
  const [moviesLoading, setMoviesLoading] = useState(true);
  const [showsLoading, setShowsLoading] = useState(true);
  const [musicLoading, setMusicLoading] = useState(true);
  

  // API Keys
  const OMDB_API_KEY = 'b246c37f'; // OMDb API key
  const LASTFM_API_KEY = '9fe653e686f9856c7e1d62cc2c62045d'; // Last.fm API key
  
  // Popular movie titles to search for
  const popularMovieTitles = [
    'Inception', 'The Dark Knight', 'Interstellar', 'Avengers', 'Dune'
  ];
  
  // Popular TV show titles
  const popularShowTitles = [
    'Breaking Bad', 'Game of Thrones', 'Stranger Things', 'The Crown', 'The Mandalorian'
  ];

  // Fetch Movies Data using OMDb API with multiple searches
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviePromises = popularMovieTitles.map(title => 
          fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${OMDB_API_KEY}`)
            .then(response => response.json())
        );
        
        const movieResults = await Promise.all(moviePromises);
        
        // Filter out any failed requests and format the data
        const formattedMovies = movieResults
          .filter(movie => movie.Response === "True")
          .map(movie => ({
            title: movie.Title,
            image: movie.Poster !== "N/A" ? movie.Poster : '/api/placeholder/300/200?text=Movie',
            rating: movie.imdbRating,
            genre: movie.Genre ? movie.Genre.split(',')[0] : 'Unknown',
            id: movie.imdbID,
            url: `https://www.imdb.com/title/${movie.imdbID}/`
          }));
        
        if (formattedMovies.length > 0) {
          setMovies(formattedMovies);
        } else {
          // Fallback to sample data if API returns no valid results
          setMovies([
            { title: 'Inception', image: '/api/placeholder/300/200', rating: '9.2', genre: 'Sci-Fi', id: 'tt1375666', url: 'https://www.imdb.com/title/tt1375666/' },
            { title: 'The Dark Knight', image: '/api/placeholder/300/200', rating: '9.0', genre: 'Action', id: 'tt0468569', url: 'https://www.imdb.com/title/tt0468569/' },
            { title: 'Fight Club', image: '/api/placeholder/300/200', rating: '8.8', genre: 'Drama', id: 'tt0137523', url: 'https://www.imdb.com/title/tt0137523/' },
            { title: 'Forrest Gump', image: '/api/placeholder/300/200', rating: '8.8', genre: 'Drama', id: 'tt0109830', url: 'https://www.imdb.com/title/tt0109830/' },
            { title: 'Matrix', image: '/api/placeholder/300/200', rating: '8.7', genre: 'Sci-Fi', id: 'tt0133093', url: 'https://www.imdb.com/title/tt0133093/' }
          ]);
        }
      } catch (error) {
        console.error('Error fetching movies:', error);
        // Fallback to sample data if API fails
        setMovies([
          { title: 'Inception', image: '/api/placeholder/300/200', rating: '9.2', genre: 'Sci-Fi', id: 'tt1375666', url: 'https://www.imdb.com/title/tt1375666/' },
          { title: 'The Dark Knight', image: '/api/placeholder/300/200', rating: '9.0', genre: 'Action', id: 'tt0468569', url: 'https://www.imdb.com/title/tt0468569/' },
          { title: 'Fight Club', image: '/api/placeholder/300/200', rating: '8.8', genre: 'Drama', id: 'tt0137523', url: 'https://www.imdb.com/title/tt0137523/' },
          { title: 'Forrest Gump', image: '/api/placeholder/300/200', rating: '8.8', genre: 'Drama', id: 'tt0109830', url: 'https://www.imdb.com/title/tt0109830/' },
          { title: 'Matrix', image: '/api/placeholder/300/200', rating: '8.7', genre: 'Sci-Fi', id: 'tt0133093', url: 'https://www.imdb.com/title/tt0133093/' }
        ]);
      } finally {
        setMoviesLoading(false);
      }
    };

    fetchMovies();
  }, []);

  // Fetch TV Shows Data using OMDb API
  useEffect(() => {
    const fetchShows = async () => {
      try {
        const showPromises = popularShowTitles.map(title => 
          fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(title)}&type=series&apikey=${OMDB_API_KEY}`)
            .then(response => response.json())
        );
        
        const showResults = await Promise.all(showPromises);
        
        // Filter out any failed requests and format the data
        const formattedShows = showResults
          .filter(show => show.Response === "True")
          .map(show => ({
            title: show.Title,
            image: show.Poster !== "N/A" ? show.Poster : '/api/placeholder/300/200?text=TV+Show',
            rating: show.imdbRating,
            genre: show.Genre ? show.Genre.split(',')[0] : 'Unknown',
            id: show.imdbID,
            url: `https://www.imdb.com/title/${show.imdbID}/`
          }));
        
        if (formattedShows.length > 0) {
          setShows(formattedShows);
        } else {
          // Fallback to sample data if API returns no valid results
          setShows([
            { title: 'Breaking Bad', image: '/api/placeholder/300/200', rating: '9.5', genre: 'Crime Drama', id: 'tt0903747', url: 'https://www.imdb.com/title/tt0903747/' },
            { title: 'Game of Thrones', image: '/api/placeholder/300/200', rating: '9.3', genre: 'Fantasy', id: 'tt0944947', url: 'https://www.imdb.com/title/tt0944947/' },
            { title: 'Stranger Things', image: '/api/placeholder/300/200', rating: '8.7', genre: 'Sci-Fi', id: 'tt4574334', url: 'https://www.imdb.com/title/tt4574334/' },
            { title: 'The Crown', image: '/api/placeholder/300/200', rating: '8.6', genre: 'Drama', id: 'tt4786824', url: 'https://www.imdb.com/title/tt4786824/' },
            { title: 'Chernobyl', image: '/api/placeholder/300/200', rating: '9.4', genre: 'Drama', id: 'tt7366338', url: 'https://www.imdb.com/title/tt7366338/' }
          ]);
        }
      } catch (error) {
        console.error('Error fetching TV shows:', error);
        // Fallback to sample data if API fails
        setShows([
          { title: 'Breaking Bad', image: '/api/placeholder/300/200', rating: '9.5', genre: 'Crime Drama', id: 'tt0903747', url: 'https://www.imdb.com/title/tt0903747/' },
          { title: 'Game of Thrones', image: '/api/placeholder/300/200', rating: '9.3', genre: 'Fantasy', id: 'tt0944947', url: 'https://www.imdb.com/title/tt0944947/' },
          { title: 'Stranger Things', image: '/api/placeholder/300/200', rating: '8.7', genre: 'Sci-Fi', id: 'tt4574334', url: 'https://www.imdb.com/title/tt4574334/' },
          { title: 'The Crown', image: '/api/placeholder/300/200', rating: '8.6', genre: 'Drama', id: 'tt4786824', url: 'https://www.imdb.com/title/tt4786824/' },
          { title: 'Chernobyl', image: '/api/placeholder/300/200', rating: '9.4', genre: 'Drama', id: 'tt7366338', url: 'https://www.imdb.com/title/tt7366338/' }
        ]);
      } finally {
        setShowsLoading(false);
      }
    };

    fetchShows();
  }, []);

  // Fetch Music Data using Last.fm API
  useEffect(() => {
    const fetchMusic = async () => {
      try {
        // Get top albums from Last.fm
        const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${LASTFM_API_KEY}&format=json&limit=5`);
        const data = await response.json();
        
        if (data && data.artists && data.artists.artist) {
          // Now fetch details for each artist to get more information
          const artistPromises = data.artists.artist.map(async (artist) => {
            try {
              // Get top albums for the artist
              const albumResponse = await fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${encodeURIComponent(artist.name)}&api_key=${LASTFM_API_KEY}&format=json&limit=1`);
              const albumData = await albumResponse.json();
              
              // Get genres (tags) for the artist
              const tagsResponse = await fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.gettoptags&artist=${encodeURIComponent(artist.name)}&api_key=${LASTFM_API_KEY}&format=json&limit=1`);
              const tagsData = await tagsResponse.json();
              
              const topAlbum = albumData.topalbums && albumData.topalbums.album && albumData.topalbums.album[0];
              const topTag = tagsData.toptags && tagsData.toptags.tag && tagsData.toptags.tag[0];
              
              return {
                title: topAlbum ? topAlbum.name : artist.name,
                image: topAlbum && topAlbum.image && topAlbum.image[2]['#text'] ? 
                       topAlbum.image[2]['#text'] : '/api/placeholder/300/200?text=Music',
                artist: artist.name,
                genre: topTag ? topTag.name : 'Unknown',
                listeners: artist.listeners,
                id: artist.mbid || `lastfm-${artist.name}`,
                url: `https://www.last.fm/music/${encodeURIComponent(artist.name)}`
              };
            } catch (error) {
              console.error(`Error fetching details for artist ${artist.name}:`, error);
              return {
                title: artist.name,
                image: '/api/placeholder/300/200?text=Music',
                artist: artist.name,
                genre: 'Unknown',
                listeners: artist.listeners,
                id: artist.mbid || `lastfm-${artist.name}`,
                url: `https://www.last.fm/music/${encodeURIComponent(artist.name)}`
              };
            }
          });
          
          const musicResults = await Promise.all(artistPromises);
          setMusic(musicResults);
        } else {
          throw new Error('Invalid data structure from Last.fm API');
        }
      } catch (error) {
        console.error('Error fetching music data:', error);
        // Fallback to sample data if API fails
        setMusic([
          { title: 'Top Hits 2025', image: '/api/placeholder/300/200', artist: 'Various Artists', genre: 'Pop', url: 'https://www.last.fm/tag/pop' },
          { title: 'Future Nostalgia', image: '/api/placeholder/300/200', artist: 'Dua Lipa', genre: 'Pop', url: 'https://www.last.fm/music/Dua+Lipa' },
          { title: 'Renaissance', image: '/api/placeholder/300/200', artist: 'Beyoncé', genre: 'R&B', url: 'https://www.last.fm/music/Beyoncé' },
          { title: 'Un Verano Sin Ti', image: '/api/placeholder/300/200', artist: 'Bad Bunny', genre: 'Latin', url: 'https://www.last.fm/music/Bad+Bunny' },
          { title: 'Heroes & Villains', image: '/api/placeholder/300/200', artist: 'Metro Boomin', genre: 'Hip-Hop', url: 'https://www.last.fm/music/Metro+Boomin' }
        ]);
      } finally {
        setMusicLoading(false);
      }
    };

    fetchMusic();
  }, []);

  // Handle item click for navigation
  const handleItemClick = (item, type) => {
    if (item.url) {
      window.open(item.url, '_blank');
      showNotification(`Opening ${item.title}...`);
    } else {
      let url;
      
      switch(type) {
        case 'movie':
        case 'show':
          url = item.id ? 
            `https://www.imdb.com/title/${item.id}/` : 
            `https://www.imdb.com/find?q=${encodeURIComponent(item.title)}`;
          break;
          
        case 'music':
          url = item.artist ? 
            `https://www.last.fm/music/${encodeURIComponent(item.artist)}` : 
            `https://www.last.fm/search?q=${encodeURIComponent(item.title)}`;
          break;
          
        default:
          return;
      }
      
      window.open(url, '_blank');
      showNotification(`Opening ${item.title}...`);
    }
  };

  // Handle loading screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  // Save theme to localStorage when it changes
  useEffect(() => {
    document.body.className = `theme-${theme}`;
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarActive(!isSidebarActive);
  };

  // Toggle profile modal
  const toggleProfileModal = () => {
    setIsProfileModalActive(!isProfileModalActive);
  };

  // Show notification
  const showNotification = (message) => {
    setNotification({ show: true, message });
    setTimeout(() => {
      setNotification({ show: false, message: '' });
    }, 3000);
  };

  // Navigation function - replaces Router functionality
  const navigateTo = (section) => {
    setActiveSection(section);
    setIsSidebarActive(false); // Close sidebar when navigating
    
    // Scroll to section if it exists
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // Show notification for navigation
    showNotification(`Navigated to ${section}`);
  };

  return (
    <div className={`app theme-${theme}`}>
      {isLoading && <LoadingScreen />}
      
      <MenuToggle 
        isActive={isSidebarActive} 
        onClick={toggleSidebar} 
      />
      
      <Sidebar 
        isActive={isSidebarActive} 
        onProfileClick={toggleProfileModal}
        onNavigate={navigateTo}
        activeSection={activeSection}
      />
      
      {isProfileModalActive && (
        <ProfileModal 
          onClose={toggleProfileModal} 
          theme={theme}
          setTheme={setTheme}
          showNotification={showNotification}
        />
      )}
      
      <main className={`main-content ${isSidebarActive ? 'shifted' : ''}`}>
        <div id="home">
          <Hero />
        </div>
        
        <ContentSection 
          id="movies" 
          title="Trending Movies" 
          items={movies} 
          type="movie" 
          isLoading={moviesLoading}
          onItemClick={(item) => handleItemClick(item, 'movie')}
        />
        
        <ContentSection 
          id="shows" 
          title="Popular Shows" 
          items={shows} 
          type="show" 
          isLoading={showsLoading}
          onItemClick={(item) => handleItemClick(item, 'show')}
        />
        
        <ContentSection 
          id="music" 
          title="Top Music" 
          items={music} 
          type="music" 
          isLoading={musicLoading}
          onItemClick={(item) => handleItemClick(item, 'music')}
        />
        
        <div id="news">
          <NewsSection />
        </div>
        
        <div id="features">
          <FeaturesSection />
        </div>
      </main>
      
      <Notification 
        show={notification.show} 
        message={notification.message} 
      />
      
      <Footer />

      <style>
        {`
        /* App.css - Main styling */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', sans-serif;
  }
  /* Modern Entertainment Platform Styles - Neon Cyberpunk Theme */

/* Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', 'Segoe UI', sans-serif;
}

:root {
  /* Core Theme Colors */
  --primary: #00f2ff;
  --primary-dark: #00c6d3;
  --primary-light: #7fffff;
  --secondary: #ff00e4;
  --secondary-dark: #c400aa;
  --accent: #ffcc00;
  
  /* UI Colors */
  --dark: #080b14;
  --darker: #050709;
  --dark-glass: rgba(8, 11, 20, 0.8);
  --light: #f0f0f0;
  --light-glass: rgba(240, 240, 240, 0.1);
  --surface: #0f1523;
  --surface-hover: #151c2e;
  --sidebar-width: 280px;
  
  /* Effects */
  --neon-glow: 0 0 10px rgba(0, 242, 255, 0.7), 0 0 20px rgba(0, 242, 255, 0.5), 0 0 30px rgba(0, 242, 255, 0.3);
  --pink-glow: 0 0 10px rgba(255, 0, 228, 0.7), 0 0 20px rgba(255, 0, 228, 0.5), 0 0 30px rgba(255, 0, 228, 0.3);
  --card-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  --hover-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --sharp-transition: all 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);
}

/* Theme Classes */
.theme-dark {
  --bg-primary: var(--dark);
  --bg-secondary: var(--surface);
  --text-primary: var(--light);
  --text-secondary: rgba(240, 240, 240, 0.7);
  --text-muted: rgba(240, 240, 240, 0.5);
  --border-color: rgba(255, 255, 255, 0.1);
}

.theme-light {
  --bg-primary: #fafafa;
  --bg-secondary: #f0f4fa;
  --text-primary: #16192a;
  --text-secondary: #3a3f53;
  --text-muted: #6e7386;
  --border-color: rgba(0, 0, 0, 0.1);
}

body {
  background: var(--bg-primary);
  color: var(--text-primary);
  min-height: 100vh;
  overflow-x: hidden;
  font-size: 16px;
  line-height: 1.5;
  transition: background 0.3s ease;
}

  
  /* :root {
    --primary: orange;
    --secondary: #10B981;
    --dark: rgb(0, 0, 0);
    --light: #F3F4F6;
    --sidebar-width: 280px;
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    --gray: #000000;
    --surface: #111316;
  } */
  
  /* Theme Classes */
  /* .theme-dark {
    --bg-primary: var(--dark);
    --bg-secondary: var(--surface);
    --text-primary: var(--light);
    --text-secondary: var(--gray);
  }
  
  .theme-light {
    --bg-primary: #FFFFFF;
    --bg-secondary: #F1F5F9;
    --text-primary: #1b1c1e;
    --text-secondary: #000000;
  }
  
  body {
    background: var(--dark);
    color: var(--light);
    overflow-x: hidden;
    min-height: 100vh;
    -ms-overflow-style: none;  
    scrollbar-width: none;    
  }
   */
  /* Hide scrollbar for Chrome, Safari and Opera */
  ::-webkit-scrollbar {
    display: none;
  }
  
  .main-content {
    padding: 1rem;
    margin-left: 0;
    transition: var(--transition);
    min-height: 100vh;
  }
  
  .main-content.shifted {
    margin-left: var(--sidebar-width);
  }
  
  /* Section Styling */
  .section {
    padding: 4rem 0;
    opacity: 0;
    transform: translateY(30px);
  }
  
  .section-title {
    font-size: 2rem;
    margin-bottom: 2rem;
    color: var(--primary);
    text-align: center;
  }
  
  /* Feature Grid */
  .feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 2rem;
  }
  
  /* Content Grid */
  .content-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    padding: 2rem;
  }
  
  /* News Grid */
  .news-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    padding: 2rem;
  }
  
  /* Media Queries */
  @media (max-width: 768px) {
    .hero h1 {
      font-size: 2.5rem;
    }
    
    .hero p {
      font-size: 1.2rem;
    }
  
    .section-title {
      font-size: 1.8rem;
    }
  
    .news-grid {
      grid-template-columns: 1fr;
    }
  }
  
  /* News Grid Additional Styles */
  .news-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    padding: 20px;
  }
  
  .news-card {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 15px;
    padding: 1.5rem;
    transition: var(--transition);
  }
  
  .news-card:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.1);
  }
  
  .news-card-inner {
    display: flex;
    flex-direction: column;
  }
  
  .news-image {
    width: 100%;
    height: 150px;
    overflow: hidden;
    border-radius: 8px;
    margin-bottom: 15px;
  }
  
  .news-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .news-content h3 {
    margin: 0 0 10px 0;
    font-size: 1.2rem;
  }
  
  .news-content p {
    margin: 0 0 15px 0;
    line-height: 1.5;
  }
  
  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .card-footer small {
    color: rgba(255, 255, 255, 0.7);
  }
  
  .card-footer a {
    color: var(--secondary);
    text-decoration: none;
  }
  
  .card-footer a:hover {
    text-decoration: underline;
  }
  
  .loading, .error {
    text-align: center;
    padding: 20px;
    color: rgba(255, 255, 255, 0.7);
  }
  
  .error {
    color: #dc3545;
  }
  
        
        `}
      </style>
    </div>
  );
}

export default Main2;