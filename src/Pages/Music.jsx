

// import React, { useState, useEffect, useRef } from 'react';
// import './Music.css';

// // Define icons as React components instead of using Lucide imports
// const SearchIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <circle cx="11" cy="11" r="8"></circle>
//     <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
//   </svg>
// );

// const HeartIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
//   </svg>
// );

// const HeartFillIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
//   </svg>
// );

// const StarIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
//   </svg>
// );

// const StarFillIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
//   </svg>
// );

// const PlusIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <line x1="12" y1="5" x2="12" y2="19"></line>
//     <line x1="5" y1="12" x2="19" y2="12"></line>
//   </svg>
// );

// const TrashIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M3 6h18"></path>
//     <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
//     <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
//   </svg>
// );

// const PlayIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <polygon points="5 3 19 12 5 21 5 3"></polygon>
//   </svg>
// );

// const PauseIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <rect x="6" y="4" width="4" height="16"></rect>
//     <rect x="14" y="4" width="4" height="16"></rect>
//   </svg>
// );

// const SkipForwardIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <polygon points="5 4 15 12 5 20 5 4"></polygon>
//     <line x1="19" y1="5" x2="19" y2="19"></line>
//   </svg>
// );

// const SkipBackIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <polygon points="19 20 9 12 19 4 19 20"></polygon>
//     <line x1="5" y1="19" x2="5" y2="5"></line>
//   </svg>
// );

// const Volume2Icon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
//     <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
//     <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
//   </svg>
// );

// const VolumeXIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
//     <line x1="23" y1="9" x2="17" y2="15"></line>
//     <line x1="17" y1="9" x2="23" y2="15"></line>
//   </svg>
// );

// // Jamendo API configuration
// const JAMENDO_API_CONFIG = {
//   clientId: '4cc12761',
//   baseUrl: 'https://api.jamendo.com/v3.0'
// };

// const Music = () => {
//   // State management
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [playlists, setPlaylists] = useState([]);
//   const [currentPlaylist, setCurrentPlaylist] = useState(null);
//   const [likedSongs, setLikedSongs] = useState([]);
//   const [ratedSongs, setRatedSongs] = useState({});
//   const [currentSong, setCurrentSong] = useState(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [volume, setVolume] = useState(0.5);
//   const [isMuted, setIsMuted] = useState(false);
//   const [newPlaylistName, setNewPlaylistName] = useState('');
//   const [showNewPlaylistInput, setShowNewPlaylistInput] = useState(false);
  
//   // Music sections
//   const [featuredSongs, setFeaturedSongs] = useState([]);
//   const [popularSongs, setPopularSongs] = useState([]);
//   const [newReleases, setNewReleases] = useState([]);
//   const [genres, setGenres] = useState([]);
//   const [currentGenre, setCurrentGenre] = useState(null);
//   const [genreSongs, setGenreSongs] = useState([]);

//   const audioRef = useRef(null);

//   // Load data from localStorage on component mount
//   useEffect(() => {
//     const storedPlaylists = localStorage.getItem('playlists');
//     const storedLikedSongs = localStorage.getItem('likedSongs');
//     const storedRatedSongs = localStorage.getItem('ratedSongs');

//     if (storedPlaylists) setPlaylists(JSON.parse(storedPlaylists));
//     if (storedLikedSongs) setLikedSongs(JSON.parse(storedLikedSongs));
//     if (storedRatedSongs) setRatedSongs(JSON.parse(storedRatedSongs));
    
//     // Load initial music sections
//     loadFeaturedSongs();
//     loadPopularSongs();
//     loadNewReleases();
//     loadGenres();
//   }, []);

//   // Save data to localStorage whenever it changes
//   useEffect(() => {
//     localStorage.setItem('playlists', JSON.stringify(playlists));
//   }, [playlists]);

//   useEffect(() => {
//     localStorage.setItem('likedSongs', JSON.stringify(likedSongs));
//   }, [likedSongs]);

//   useEffect(() => {
//     localStorage.setItem('ratedSongs', JSON.stringify(ratedSongs));
//   }, [ratedSongs]);

//   // Handle audio playback
//   useEffect(() => {
//     if (currentSong && audioRef.current) {
//       audioRef.current.src = currentSong.audio || '';
//       if (isPlaying) {
//         audioRef.current.play().catch(err => console.error('Playback error:', err));
//       } else {
//         audioRef.current.pause();
//       }
//     }
//   }, [currentSong, isPlaying]);

//   // Handle volume changes
//   useEffect(() => {
//     if (audioRef.current) {
//       audioRef.current.volume = isMuted ? 0 : volume;
//     }
//   }, [volume, isMuted]);

//   // Load genre songs when a genre is selected
//   useEffect(() => {
//     if (currentGenre) {
//       loadGenreSongs(currentGenre);
//     }
//   }, [currentGenre]);

//   // Format Jamendo API track data
//   const formatTrackData = (track) => {
//     return {
//       id: track.id,
//       title: track.name,
//       artist: track.artist_name,
//       album: track.album_name || '',
//       audio: track.audio,
//       cover: track.image || '/api/placeholder/200/200',
//       duration: track.duration,
//       releaseDate: track.releasedate
//     };
//   };

//   // Load featured songs from Jamendo
//   const loadFeaturedSongs = async () => {
//     try {
//       const response = await fetch(`${JAMENDO_API_CONFIG.baseUrl}/tracks/?client_id=${JAMENDO_API_CONFIG.clientId}&format=json&featured=1&limit=10`);
//       const data = await response.json();
      
//       if (data.results) {
//         setFeaturedSongs(data.results.map(formatTrackData));
//       }
//     } catch (error) {
//       console.error('Error loading featured songs:', error);
//       // Fallback data
//       setFeaturedSongs([
//         { id: '1', title: 'Featured Song 1', artist: 'Artist A', album: 'Album X', audio: '', cover: '/api/placeholder/200/200' },
//         { id: '2', title: 'Featured Song 2', artist: 'Artist B', album: 'Album Y', audio: '', cover: '/api/placeholder/200/200' },
//       ]);
//     }
//   };

//   // Load popular songs from Jamendo
//   const loadPopularSongs = async () => {
//     try {
//       const response = await fetch(`${JAMENDO_API_CONFIG.baseUrl}/tracks/?client_id=${JAMENDO_API_CONFIG.clientId}&format=json&boost=popularity&limit=10`);
//       const data = await response.json();
      
//       if (data.results) {
//         setPopularSongs(data.results.map(formatTrackData));
//       }
//     } catch (error) {
//       console.error('Error loading popular songs:', error);
//       // Fallback data
//       setPopularSongs([
//         { id: '3', title: 'Popular Song 1', artist: 'Artist C', album: 'Album Z', audio: '', cover: '/api/placeholder/200/200' },
//         { id: '4', title: 'Popular Song 2', artist: 'Artist D', album: 'Album W', audio: '', cover: '/api/placeholder/200/200' },
//       ]);
//     }
//   };

//   // Load new releases from Jamendo
//   const loadNewReleases = async () => {
//     try {
//       const response = await fetch(`${JAMENDO_API_CONFIG.baseUrl}/tracks/?client_id=${JAMENDO_API_CONFIG.clientId}&format=json&datebetween=2023-01-01_2025-12-31&boost=releasedate&limit=10`);
//       const data = await response.json();
      
//       if (data.results) {
//         setNewReleases(data.results.map(formatTrackData));
//       }
//     } catch (error) {
//       console.error('Error loading new releases:', error);
//       // Fallback data
//       setNewReleases([
//         { id: '5', title: 'New Release 1', artist: 'Artist E', album: 'Album V', audio: '', cover: '/api/placeholder/200/200' },
//         { id: '6', title: 'New Release 2', artist: 'Artist F', album: 'Album U', audio: '', cover: '/api/placeholder/200/200' },
//       ]);
//     }
//   };

//   // Load genres from Jamendo
//   const loadGenres = async () => {
//     try {
//       const response = await fetch(`${JAMENDO_API_CONFIG.baseUrl}/tags/?client_id=${JAMENDO_API_CONFIG.clientId}&format=json&type=genre`);
//       const data = await response.json();
      
//       if (data.results) {
//         setGenres(data.results);
//       }
//     } catch (error) {
//       console.error('Error loading genres:', error);
//       // Fallback data
//       setGenres([
//         { id: '1', name: 'Rock' },
//         { id: '2', name: 'Pop' },
//         { id: '3', name: 'Jazz' },
//         { id: '4', name: 'Classical' },
//         { id: '5', name: 'Electronic' },
//       ]);
//     }
//   };

//   // Load songs by genre from Jamendo
//   const loadGenreSongs = async (genre) => {
//     setIsLoading(true);
//     try {
//       const response = await fetch(`${JAMENDO_API_CONFIG.baseUrl}/tracks/?client_id=${JAMENDO_API_CONFIG.clientId}&format=json&tags=${genre.name}&limit=10`);
//       const data = await response.json();
      
//       if (data.results) {
//         setGenreSongs(data.results.map(formatTrackData));
//       }
//     } catch (error) {
//       console.error(`Error loading ${genre.name} songs:`, error);
//       // Fallback data
//       setGenreSongs([
//         { id: `${genre.id}-1`, title: `${genre.name} Song 1`, artist: 'Artist X', album: 'Album J', audio: '', cover: '/api/placeholder/200/200' },
//         { id: `${genre.id}-2`, title: `${genre.name} Song 2`, artist: 'Artist Y', album: 'Album K', audio: '', cover: '/api/placeholder/200/200' },
//       ]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Search for music using Jamendo API
//   const searchMusic = async () => {
//     if (!searchTerm.trim()) return;
    
//     setIsLoading(true);
//     try {
//       const response = await fetch(`${JAMENDO_API_CONFIG.baseUrl}/tracks/?client_id=${JAMENDO_API_CONFIG.clientId}&format=json&namesearch=${encodeURIComponent(searchTerm)}&limit=20`);
//       const data = await response.json();
      
//       if (data.results) {
//         setSearchResults(data.results.map(formatTrackData));
//       } else {
//         setSearchResults([]);
//       }
//     } catch (error) {
//       console.error('Error searching for music:', error);
//       // Fallback data
//       setSearchResults([
//         { id: '101', title: `Search: ${searchTerm} - Result 1`, artist: 'Artist A', album: 'Album X', audio: '', cover: '/api/placeholder/200/200' },
//         { id: '102', title: `Search: ${searchTerm} - Result 2`, artist: 'Artist B', album: 'Album Y', audio: '', cover: '/api/placeholder/200/200' },
//       ]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Toggle like status for a song
//   const toggleLike = (song) => {
//     const songIndex = likedSongs.findIndex(s => s.id === song.id);
//     if (songIndex === -1) {
//       setLikedSongs([...likedSongs, song]);
//     } else {
//       setLikedSongs(likedSongs.filter(s => s.id !== song.id));
//     }
//   };

//   // Rate a song (1-5 stars)
//   const rateSong = (song, rating) => {
//     setRatedSongs({
//       ...ratedSongs,
//       [song.id]: rating
//     });
//   };

//   // Create a new playlist
//   const createPlaylist = () => {
//     if (!newPlaylistName.trim()) return;
    
//     const newPlaylist = {
//       id: Date.now().toString(),
//       name: newPlaylistName,
//       songs: []
//     };
    
//     setPlaylists([...playlists, newPlaylist]);
//     setNewPlaylistName('');
//     setShowNewPlaylistInput(false);
//     setCurrentPlaylist(newPlaylist);
//   };

//   // Add a song to the current playlist
//   const addToPlaylist = (song) => {
//     if (!currentPlaylist) return;
    
//     // Check if song is already in the playlist
//     if (currentPlaylist.songs.some(s => s.id === song.id)) return;
    
//     const updatedPlaylist = {
//       ...currentPlaylist,
//       songs: [...currentPlaylist.songs, song]
//     };
    
//     setPlaylists(playlists.map(p => 
//       p.id === currentPlaylist.id ? updatedPlaylist : p
//     ));
    
//     setCurrentPlaylist(updatedPlaylist);
//   };

//   // Remove a song from the current playlist
//   const removeFromPlaylist = (songId) => {
//     if (!currentPlaylist) return;
    
//     const updatedPlaylist = {
//       ...currentPlaylist,
//       songs: currentPlaylist.songs.filter(s => s.id !== songId)
//     };
    
//     setPlaylists(playlists.map(p => 
//       p.id === currentPlaylist.id ? updatedPlaylist : p
//     ));
    
//     setCurrentPlaylist(updatedPlaylist);
//   };

//   // Delete a playlist
//   const deletePlaylist = (playlistId) => {
//     setPlaylists(playlists.filter(p => p.id !== playlistId));
//     if (currentPlaylist && currentPlaylist.id === playlistId) {
//       setCurrentPlaylist(null);
//     }
//   };

//   // Play/pause toggle
//   const togglePlay = () => {
//     setIsPlaying(!isPlaying);
//   };

//   // Play a specific song
//   const playSong = (song) => {
//     setCurrentSong(song);
//     setIsPlaying(true);
//   };

//   // Handle previous song
//   const playPrevious = () => {
//     if (!currentPlaylist || !currentSong) return;
    
//     const currentIndex = currentPlaylist.songs.findIndex(s => s.id === currentSong.id);
//     if (currentIndex > 0) {
//       playSong(currentPlaylist.songs[currentIndex - 1]);
//     }
//   };

//   // Handle next song
//   const playNext = () => {
//     if (!currentPlaylist || !currentSong) return;
    
//     const currentIndex = currentPlaylist.songs.findIndex(s => s.id === currentSong.id);
//     if (currentIndex < currentPlaylist.songs.length - 1) {
//       playSong(currentPlaylist.songs[currentIndex + 1]);
//     }
//   };

//   // Toggle mute
//   const toggleMute = () => {
//     setIsMuted(!isMuted);
//   };

//   // Handle volume change
//   const handleVolumeChange = (e) => {
//     setVolume(parseFloat(e.target.value));
//     if (isMuted) setIsMuted(false);
//   };

//   // Render star ratings
//   const renderStarRating = (song) => {
//     const currentRating = ratedSongs[song.id] || 0;
    
//     return (
//       <div className="star-rating">
//         {[1, 2, 3, 4, 5].map(star => (
//           <button 
//             key={star} 
//             onClick={() => rateSong(song, star)}
//             className="rating-btn"
//           >
//             {star <= currentRating ? <StarFillIcon /> : <StarIcon />}
//           </button>
//         ))}
//       </div>
//     );
//   };

//   // Render song card component (used in multiple sections)
//   const renderSongCard = (song) => (
//     <div key={song.id} className="song-card">
//       <div className="song-cover">
//         <img src={song.cover || '/api/placeholder/200/200'} alt={song.title} />
//         <button className="play-overlay" onClick={() => playSong(song)}>
//           <PlayIcon />
//         </button>
//       </div>
//       <div className="song-info">
//         <h3>{song.title}</h3>
//         <p>{song.artist}</p>
//         <div className="song-actions">
//           <button 
//             className="like-btn" 
//             onClick={() => toggleLike(song)}
//           >
//             {likedSongs.some(s => s.id === song.id) ? <HeartFillIcon /> : <HeartIcon />}
//           </button>
//           {renderStarRating(song)}
//           {currentPlaylist && currentPlaylist.id !== 'liked' && (
//             <button 
//               className="add-to-playlist-btn" 
//               onClick={() => addToPlaylist(song)}
//             >
//               <PlusIcon />
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );

//   // Render song list component
//   const renderSongList = (title, songs) => (
//     <div className="song-section">
//       <h2>{title}</h2>
//       <div className="song-list">
//         {songs.map(song => renderSongCard(song))}
//       </div>
//     </div>
//   );

//   return (
//     <div className="music-app">
//       <div className="app-header">
//         <h1>Music Player</h1>
//         <div className="search-bar">
//           <input
//             type="text"
//             placeholder="Search for songs, artists, or albums..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             onKeyPress={(e) => e.key === 'Enter' && searchMusic()}
//           />
//           <button onClick={searchMusic} className="search-btn">
//             <SearchIcon />
//           </button>
//         </div>
//       </div>

//       <div className="main-content">
//         <div className="sidebar">
//           <div className="playlists-section">
//             <div className="section-header">
//               <h2>Playlists</h2>
//               <button className="add-btn" onClick={() => setShowNewPlaylistInput(!showNewPlaylistInput)}>
//                 <PlusIcon />
//               </button>
//             </div>
            
//             {showNewPlaylistInput && (
//               <div className="new-playlist-form">
//                 <input
//                   type="text"
//                   placeholder="Playlist name"
//                   value={newPlaylistName}
//                   onChange={(e) => setNewPlaylistName(e.target.value)}
//                   onKeyPress={(e) => e.key === 'Enter' && createPlaylist()}
//                 />
//                 <button onClick={createPlaylist}>Create</button>
//               </div>
//             )}
            
//             <ul className="playlist-list">
//               {playlists.map(playlist => (
//                 <li 
//                   key={playlist.id} 
//                   className={currentPlaylist && currentPlaylist.id === playlist.id ? 'active' : ''}
//                 >
//                   <span onClick={() => setCurrentPlaylist(playlist)}>{playlist.name}</span>
//                   <button onClick={() => deletePlaylist(playlist.id)} className="delete-btn">
//                     <TrashIcon />
//                   </button>
//                 </li>
//               ))}
//             </ul>

//             <div className="liked-songs">
//               <h3 onClick={() => setCurrentPlaylist({id: 'liked', name: 'Liked Songs', songs: likedSongs})}>
//                 Liked Songs
//               </h3>
//               <span>{likedSongs.length} songs</span>
//             </div>
//           </div>

//           <div className="genres-section">
//             <h2>Genres</h2>
//             <ul className="genre-list">
//               {genres.map(genre => (
//                 <li 
//                   key={genre.id}
//                   className={currentGenre && currentGenre.id === genre.id ? 'active' : ''}
//                   onClick={() => setCurrentGenre(genre)}
//                 >
//                   {genre.name}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         <div className="content-area">
//           {isLoading ? (
//             <div className="loading">Loading...</div>
//           ) : (
//             <>
//               {/* Show search results if available */}
//               {searchResults.length > 0 && (
//                 <div className="search-results">
//                   <h2>Search Results</h2>
//                   <div className="song-list">
//                     {searchResults.map(song => renderSongCard(song))}
//                   </div>
//                 </div>
//               )}

//               {/* Show current genre songs if a genre is selected */}
//               {currentGenre && genreSongs.length > 0 && (
//                 renderSongList(`${currentGenre.name} Music`, genreSongs)
//               )}

//               {/* Show current playlist if selected */}
//               {currentPlaylist && (
//                 <div className="current-playlist">
//                   <h2>{currentPlaylist.name}</h2>
//                   {currentPlaylist.songs.length === 0 ? (
//                     <p>This playlist is empty.</p>
//                   ) : (
//                     <div className="playlist-songs">
//                       {currentPlaylist.songs.map(song => (
//                         <div 
//                           key={song.id} 
//                           className={`playlist-song ${currentSong && currentSong.id === song.id ? 'playing' : ''}`}
//                         >
//                           <div className="song-play">
//                             <button onClick={() => playSong(song)}>
//                               {currentSong && currentSong.id === song.id && isPlaying ? <PauseIcon /> : <PlayIcon />}
//                             </button>
//                           </div>
//                           <div className="playlist-song-info">
//                             <h4>{song.title}</h4>
//                             <p>{song.artist}</p>
//                           </div>
//                           <div className="playlist-song-actions">
//                             <button 
//                               className="like-btn" 
//                               onClick={() => toggleLike(song)}
//                             >
//                               {likedSongs.some(s => s.id === song.id) ? <HeartFillIcon /> : <HeartIcon />}
//                             </button>
//                             {renderStarRating(song)}
//                             {currentPlaylist.id !== 'liked' && (
//                               <button 
//                                 className="remove-btn" 
//                                 onClick={() => removeFromPlaylist(song.id)}
//                               >
//                                 <TrashIcon />
//                               </button>
//                             )}
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               )}

//               {/* Home page sections (shown when no search or playlist is active) */}
//               {!searchResults.length && !currentPlaylist && !currentGenre && (
//                 <div className="home-sections">
//                   {/* Featured Songs */}
//                   {featuredSongs.length > 0 && renderSongList('Featured Music', featuredSongs)}
                  
//                   {/* Popular Songs */}
//                   {popularSongs.length > 0 && renderSongList('Popular Music', popularSongs)}
                  
//                   {/* New Releases */}
//                   {newReleases.length > 0 && renderSongList('New Releases', newReleases)}
//                 </div>
//               )}
//             </>
//           )}
//         </div>
//       </div>
//       <div className="player-bar">
//         <audio ref={audioRef} onEnded={playNext} />
        
//         {currentSong && (
//           <div className="now-playing">
//             <img src={currentSong.cover || '/api/placeholder/50/50'} alt={currentSong.title} />
//             <div className="now-playing-info">
//               <h4>{currentSong.title}</h4>
//               <p>{currentSong.artist}</p>
//             </div>
//           </div>
//         )}
        
//         <div className="player-controls">
//           <button className="control-btn" onClick={playPrevious}>
//             <SkipBackIcon />
//           </button>
//           <button className="play-btn" onClick={togglePlay}>
//             {isPlaying ? <PauseIcon /> : <PlayIcon />}
//           </button>
//           <button className="control-btn" onClick={playNext}>
//             <SkipForwardIcon />
//           </button>
//         </div>
        
//         <div className="volume-control">
//           <button className="mute-btn" onClick={toggleMute}>
//             {isMuted ? <VolumeXIcon /> : <Volume2Icon />}
//           </button>
//           <input
//             type="range"
//             min="0"
//             max="1"
//             step="0.01"
//             value={volume}
//             onChange={handleVolumeChange}
//             className="volume-slider"
//           />
//         </div>
//       </div>
//       <style>{`
      
//       /* Add CSS styling */
// .music-app {
//   display: flex;
//   flex-direction: column;
//   height: 100vh;
//   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//   color: #333;
//   background-color: #f5f5f5;
// }

// .app-header {
//   padding: 20px;
//   background-color: #fff;
//   border-bottom: 1px solid #e0e0e0;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// }

// .app-header h1 {
//   margin: 0;
//   font-size: 24px;
//   color: #333;
// }

// .search-bar {
//   display: flex;
//   width: 50%;
// }

// .search-bar input {
//   flex: 1;
//   padding: 10px;
//   border: 1px solid #ddd;
//   border-radius: 4px 0 0 4px;
//   font-size: 14px;
// }

// .search-btn {
//   padding: 8px 12px;
//   background-color: #1db954;
//   color: white;
//   border: none;
//   border-radius: 0 4px 4px 0;
//   cursor: pointer;
// }

// .main-content {
//   display: flex;
//   flex: 1;
//   overflow: hidden;
// }

// .sidebar {
//   width: 250px;
//   background-color: #fff;
//   border-right: 1px solid #e0e0e0;
//   padding: 20px;
//   overflow-y: auto;
// }

// .section-header {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// }

// .add-btn {
//   background: none;
//   border: none;
//   color: #1db954;
//   cursor: pointer;
// }

// .new-playlist-form {
//   margin: 10px 0;
//   display: flex;
// }

// .new-playlist-form input {
//   flex: 1;
//   padding: 8px;
//   border: 1px solid #ddd;
//   border-radius: 4px 0 0 4px;
// }

// .new-playlist-form button {
//   padding: 8px 12px;
//   background-color: #1db954;
//   color: white;
//   border: none;
//   border-radius: 0 4px 4px 0;
//   cursor: pointer;
// }

// .playlist-list {
//   list-style: none;
//   padding: 0;
//   margin-top: 10px;
// }

// .playlist-list li {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 8px 0;
//   cursor: pointer;
//   border-radius: 4px;
// }

// .playlist-list li.active {
//   background-color: #f0f0f0;
//   font-weight: bold;
// }

// .playlist-list li span {
//   flex: 1;
// }

// .delete-btn {
//   background: none;
//   border: none;
//   color: #888;
//   cursor: pointer;
// }

// .delete-btn:hover {
//   color: #e74c3c;
// }

// .liked-songs {
//   margin-top: 20px;
//   padding: 10px;
//   background-color: #f9f9f9;
//   border-radius: 4px;
//   cursor: pointer;
// }

// .liked-songs h3 {
//   margin: 0;
//   font-size: 16px;
// }

// .liked-songs span {
//   font-size: 12px;
//   color: #888;
// }

// .genres-section {
//   margin-top: 30px;
// }

// .genre-list {
//   list-style: none;
//   padding: 0;
// }

// .genre-list li {
//   padding: 8px 0;
//   cursor: pointer;
//   border-radius: 4px;
// }

// .genre-list li.active {
//   font-weight: bold;
//   color: #1db954;
// }

// .content-area {
//   flex: 1;
//   padding: 20px;
//   overflow-y: auto;
// }

// .loading {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100%;
//   font-size: 18px;
//   color: #888;
// }

// .song-section {
//   margin-bottom: 30px;
// }

// .song-section h2 {
//   border-bottom: 1px solid #eee;
//   padding-bottom: 10px;
// }

// .song-list {
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
//   gap: 20px;
// }

// .song-card {
//   background-color: #fff;
//   border-radius: 8px;
//   overflow: hidden;
//   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
//   transition: transform 0.2s;
// }

// .song-card:hover {
//   transform: translateY(-5px);
// }

// .song-cover {
//   position: relative;
//   width: 100%;
//   padding-top: 100%; /* 1:1 Aspect Ratio */
// }

// .song-cover img {
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// }

// .play-overlay {
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   background-color: rgba(0, 0, 0, 0.5);
//   color: white;
//   border: none;
//   border-radius: 50%;
//   width: 50px;
//   height: 50px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   cursor: pointer;
//   opacity: 0;
//   transition: opacity 0.2s;
// }

// .song-cover:hover .play-overlay {
//   opacity: 1;
// }

// .song-info {
//   padding: 15px;
// }

// .song-info h3 {
//   margin: 0 0 5px;
//   font-size: 16px;
//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;
// }

// .song-info p {
//   margin: 0;
//   font-size: 14px;
//   color: #888;
//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;
// }

// .song-actions {
//   display: flex;
//   align-items: center;
//   margin-top: 10px;
// }

// .like-btn, .rating-btn, .add-to-playlist-btn {
//   background: none;
//   border: none;
//   cursor: pointer;
//   padding: 5px;
// }

// .like-btn {
//   color: #e74c3c;
// }

// .rating-btn {
//   color: #f39c12;
// }

// .add-to-playlist-btn {
//   color: #3498db;
//   margin-left: auto;
// }

// .star-rating {
//   display: flex;
// }

// .current-playlist {
//   margin-bottom: 30px;
// }

// .playlist-songs {
//   background-color: #fff;
//   border-radius: 8px;
//   overflow: hidden;
//   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
// }

// .playlist-song {
//   display: flex;
//   align-items: center;
//   padding: 10px 15px;
//   border-bottom: 1px solid #eee;
// }

// .playlist-song.playing {
//   background-color: #f0f0f0;
// }

// .playlist-song:last-child {
//   border-bottom: none;
// }

// .song-play button {
//   background: none;
//   border: none;
//   cursor: pointer;
//   color: #888;
// }

// .playlist-song.playing .song-play button {
//   color: #1db954;
// }

// .playlist-song-info {
//   flex: 1;
//   margin-left: 15px;
// }

// .playlist-song-info h4 {
//   margin: 0;
//   font-size: 16px;
// }

// .playlist-song-info p {
//   margin: 5px 0 0;
//   font-size: 14px;
//   color: #888;
// }

// .playlist-song-actions {
//   display: flex;
//   align-items: center;
// }

// .remove-btn {
//   background: none;
//   border: none;
//   cursor: pointer;
//   color: #888;
//   margin-left: 10px;
// }

// .remove-btn:hover {
//   color: #e74c3c;
// }

// .player-bar {
//   display: flex;
//   align-items: center;
//   background-color: #333;
//   color: white;
//   padding: 15px 20px;
// }

// .now-playing {
//   display: flex;
//   align-items: center;
//   width: 250px;
// }

// .now-playing img {
//   width: 50px;
//   height: 50px;
//   object-fit: cover;
//   border-radius: 4px;
// }

// .now-playing-info {
//   margin-left: 10px;
//   overflow: hidden;
// }

// .now-playing-info h4 {
//   margin: 0;
//   font-size: 14px;
//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;
// }

// .now-playing-info p {
//   margin: 5px 0 0;
//   font-size: 12px;
//   color: #aaa;
//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;
// }

// .player-controls {
//   flex: 1;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

// .control-btn, .play-btn {
//   background: none;
//   border: none;
//   color: white;
//   cursor: pointer;
//   margin: 0 10px;
// }

// .play-btn {
//   background-color: #1db954;
//   border-radius: 50%;
//   width: 40px;
//   height: 40px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

// .volume-control {
//   display: flex;
//   align-items: center;
//   width: 150px;
// }

// .mute-btn {
//   background: none;
//   border: none;
//   color: white;
//   cursor: pointer;
//   margin-right: 10px;
// }

// .volume-slider {
//   width: 100%;
//   cursor: pointer;
// }

// /* Responsive adjustments */
// @media (max-width: 768px) {
//   .main-content {
//     flex-direction: column;
//   }
  
//   .sidebar {
//     width: 100%;
//     border-right: none;
//     border-bottom: 1px solid #e0e0e0;
//   }
  
//   .player-bar {
//     flex-direction: column;
//     padding: 10px;
//   }
  
//   .now-playing {
//     width: 100%;
//     margin-bottom: 10px;
//   }
  
//   .player-controls {
//     margin: 10px 0;
//   }
  
//   .volume-control {
//     width: 100%;
//   }
// }

// /* Animation for the loading state */
// @keyframes spin {
//   0% { transform: rotate(0deg); }
//   100% { transform: rotate(360deg); }
// }

// .loading::after {
//   content: "";
//   display: inline-block;
//   width: 20px;
//   height: 20px;
//   border: 2px solid rgba(0, 0, 0, 0.1);
//   border-left-color: #1db954;
//   border-radius: 50%;
//   margin-left: 10px;
//   animation: spin 1s linear infinite;
// }
      
//       `}</style>
//     </div>
//   );
// };

// export default Music;

import React, { useState, useEffect, useRef } from 'react';
import './Music.css';

// Define icons as React components instead of using Lucide imports
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
  </svg>
);

const HeartFillIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
  </svg>
);

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

const StarFillIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6h18"></path>
    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
  </svg>
);

const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="5 3 19 12 5 21 5 3"></polygon>
  </svg>
);

const PauseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="4" width="4" height="16"></rect>
    <rect x="14" y="4" width="4" height="16"></rect>
  </svg>
);

const SkipForwardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="5 4 15 12 5 20 5 4"></polygon>
    <line x1="19" y1="5" x2="19" y2="19"></line>
  </svg>
);

const SkipBackIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="19 20 9 12 19 4 19 20"></polygon>
    <line x1="5" y1="19" x2="5" y2="5"></line>
  </svg>
);

const Volume2Icon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
    <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
  </svg>
);

const VolumeXIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
    <line x1="23" y1="9" x2="17" y2="15"></line>
    <line x1="17" y1="9" x2="23" y2="15"></line>
  </svg>
);

// Spotify API configuration
const SPOTIFY_API_CONFIG = {
  clientId: 'bbf8dd40fc3b412eb847d661b96543e7',
  redirectUri: window.location.origin,
  authEndpoint: 'https://accounts.spotify.com/authorize',
  tokenEndpoint: 'https://accounts.spotify.com/api/token',
  scopes: [
    'user-read-private',
    'user-read-email',
    'user-library-read',
    'playlist-read-private',
    'playlist-read-collaborative',
    'streaming'
  ]
};

const Music = () => {
  // State management
  const [token, setToken] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [playlists, setPlaylists] = useState([]);
  const [currentPlaylist, setCurrentPlaylist] = useState(null);
  const [likedSongs, setLikedSongs] = useState([]);
  const [ratedSongs, setRatedSongs] = useState({});
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [newPlaylistName, setNewPlaylistName] = useState('');
  const [showNewPlaylistInput, setShowNewPlaylistInput] = useState(false);
  const [showFloatingPlayer, setShowFloatingPlayer] = useState(false);
  
  // Music sections
  const [featuredSongs, setFeaturedSongs] = useState([]);
  const [popularSongs, setPopularSongs] = useState([]);
  const [newReleases, setNewReleases] = useState([]);
  const [genres, setGenres] = useState([]);
  const [currentGenre, setCurrentGenre] = useState(null);
  const [genreSongs, setGenreSongs] = useState([]);

  const audioRef = useRef(null);

  // Check for authentication on component mount
  useEffect(() => {
    const hash = window.location.hash
      .substring(1)
      .split('&')
      .reduce((initial, item) => {
        if (item) {
          const parts = item.split('=');
          initial[parts[0]] = decodeURIComponent(parts[1]);
        }
        return initial;
      }, {});

    if (hash.access_token) {
      setToken(hash.access_token);
      window.location.hash = '';
      localStorage.setItem('spotify_token', hash.access_token);
    } else {
      // Check if token exists in localStorage
      const storedToken = localStorage.getItem('spotify_token');
      if (storedToken) {
        setToken(storedToken);
      }
    }
  }, []);

  // Load data from localStorage on component mount
  useEffect(() => {
    const storedPlaylists = localStorage.getItem('playlists');
    const storedLikedSongs = localStorage.getItem('likedSongs');
    const storedRatedSongs = localStorage.getItem('ratedSongs');

    if (storedPlaylists) setPlaylists(JSON.parse(storedPlaylists));
    if (storedLikedSongs) setLikedSongs(JSON.parse(storedLikedSongs));
    if (storedRatedSongs) setRatedSongs(JSON.parse(storedRatedSongs));
  }, []);

  // Load Spotify data once we have the token
  useEffect(() => {
    if (token) {
      loadFeaturedSongs();
      loadPopularSongs();
      loadNewReleases();
      loadGenres();
    }
  }, [token]);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('playlists', JSON.stringify(playlists));
  }, [playlists]);

  useEffect(() => {
    localStorage.setItem('likedSongs', JSON.stringify(likedSongs));
  }, [likedSongs]);

  useEffect(() => {
    localStorage.setItem('ratedSongs', JSON.stringify(ratedSongs));
  }, [ratedSongs]);

  // Handle audio playback
  useEffect(() => {
    if (currentSong && audioRef.current) {
      audioRef.current.src = currentSong.preview_url || '';
      if (isPlaying) {
        audioRef.current.play().catch(err => console.error('Playback error:', err));
      } else {
        audioRef.current.pause();
      }
    }
    
    // Show the floating player if there's a current song
    setShowFloatingPlayer(!!currentSong);
  }, [currentSong, isPlaying]);

  // Handle volume changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  // Load genre songs when a genre is selected
  useEffect(() => {
    if (currentGenre && token) {
      loadGenreSongs(currentGenre);
    }
  }, [currentGenre, token]);

  // Format Spotify API track data
  const formatTrackData = (track) => {
    return {
      id: track.id,
      title: track.name,
      artist: track.artists.map(artist => artist.name).join(', '),
      album: track.album?.name || '',
      preview_url: track.preview_url,
      cover: track.album?.images[0]?.url || '/api/placeholder/200/200',
      duration: track.duration_ms,
      uri: track.uri
    };
  };

  // Login with Spotify
  const login = () => {
    const params = new URLSearchParams({
      client_id: SPOTIFY_API_CONFIG.clientId,
      redirect_uri: SPOTIFY_API_CONFIG.redirectUri,
      scope: SPOTIFY_API_CONFIG.scopes.join(' '),
      response_type: 'token',
      show_dialog: true
    });
    
    window.location = `${SPOTIFY_API_CONFIG.authEndpoint}?${params.toString()}`;
  };

  // Load featured songs from Spotify
  const loadFeaturedSongs = async () => {
    try {
      const response = await fetch('https://api.spotify.com/v1/browse/featured-playlists', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch featured playlists');
      }
      
      const data = await response.json();
      
      // Get first playlist's tracks
      if (data.playlists && data.playlists.items.length > 0) {
        const playlistId = data.playlists.items[0].id;
        const tracksResponse = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=10`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        
        if (!tracksResponse.ok) {
          throw new Error('Failed to fetch playlist tracks');
        }
        
        const tracksData = await tracksResponse.json();
        setFeaturedSongs(tracksData.items.map(item => formatTrackData(item.track)).filter(track => track.preview_url));
      }
    } catch (error) {
      console.error('Error loading featured songs:', error);
      // Fallback data
      setFeaturedSongs([
        { id: '1', title: 'Featured Song 1', artist: 'Artist A', album: 'Album X', preview_url: '', cover: '/api/placeholder/200/200' },
        { id: '2', title: 'Featured Song 2', artist: 'Artist B', album: 'Album Y', preview_url: '', cover: '/api/placeholder/200/200' },
      ]);
    }
  };

  // Load popular songs from Spotify
  const loadPopularSongs = async () => {
    try {
      const response = await fetch('https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF', { // Global Top 50 playlist
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch popular songs');
      }
      
      const data = await response.json();
      
      if (data.tracks && data.tracks.items) {
        setPopularSongs(data.tracks.items.slice(0, 10).map(item => formatTrackData(item.track)).filter(track => track.preview_url));
      }
    } catch (error) {
      console.error('Error loading popular songs:', error);
      // Fallback data
      setPopularSongs([
        { id: '3', title: 'Popular Song 1', artist: 'Artist C', album: 'Album Z', preview_url: '', cover: '/api/placeholder/200/200' },
        { id: '4', title: 'Popular Song 2', artist: 'Artist D', album: 'Album W', preview_url: '', cover: '/api/placeholder/200/200' },
      ]);
    }
  };

  // Load new releases from Spotify
  const loadNewReleases = async () => {
    try {
      const response = await fetch('https://api.spotify.com/v1/browse/new-releases?limit=10', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch new releases');
      }
      
      const data = await response.json();
      
      if (data.albums && data.albums.items) {
        // For each album, get the first track
        const albumsWithTracks = await Promise.all(data.albums.items.map(async (album) => {
          try {
            const trackResponse = await fetch(`https://api.spotify.com/v1/albums/${album.id}/tracks?limit=1`, {
              headers: {
                Authorization: `Bearer ${token}`
              }
            });
            
            if (!trackResponse.ok) {
              return null;
            }
            
            const trackData = await trackResponse.json();
            if (trackData.items && trackData.items.length > 0) {
              const trackWithDetails = {
                ...trackData.items[0],
                album: album
              };
              return formatTrackData(trackWithDetails);
            }
            return null;
          } catch (error) {
            console.error('Error fetching album tracks:', error);
            return null;
          }
        }));
        
        setNewReleases(albumsWithTracks.filter(track => track && track.preview_url));
      }
    } catch (error) {
      console.error('Error loading new releases:', error);
      // Fallback data
      setNewReleases([
        { id: '5', title: 'New Release 1', artist: 'Artist E', album: 'Album V', preview_url: '', cover: '/api/placeholder/200/200' },
        { id: '6', title: 'New Release 2', artist: 'Artist F', album: 'Album U', preview_url: '', cover: '/api/placeholder/200/200' },
      ]);
    }
  };

  // Load genres from Spotify
  const loadGenres = async () => {
    try {
      const response = await fetch('https://api.spotify.com/v1/browse/categories?limit=20', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch genres');
      }
      
      const data = await response.json();
      
      if (data.categories && data.categories.items) {
        setGenres(data.categories.items.map(category => ({
          id: category.id,
          name: category.name
        })));
      }
    } catch (error) {
      console.error('Error loading genres:', error);
      // Fallback data
      setGenres([
        { id: '1', name: 'Rock' },
        { id: '2', name: 'Pop' },
        { id: '3', name: 'Jazz' },
        { id: '4', name: 'Classical' },
        { id: '5', name: 'Electronic' },
      ]);
    }
  };

  // Load songs by genre from Spotify
  const loadGenreSongs = async (genre) => {
    setIsLoading(true);
    try {
      // First get playlists for the genre
      const response = await fetch(`https://api.spotify.com/v1/browse/categories/${genre.id}/playlists?limit=1`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      if (!response.ok) {
        throw new Error(`Failed to fetch ${genre.name} playlists`);
      }
      
      const data = await response.json();
      
      if (data.playlists && data.playlists.items.length > 0) {
        // Get tracks from the first playlist
        const playlistId = data.playlists.items[0].id;
        const tracksResponse = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=10`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        
        if (!tracksResponse.ok) {
          throw new Error(`Failed to fetch ${genre.name} tracks`);
        }
        
        const tracksData = await tracksResponse.json();
        
        if (tracksData.items) {
          setGenreSongs(tracksData.items
            .map(item => item.track ? formatTrackData(item.track) : null)
            .filter(track => track && track.preview_url)
          );
        }
      }
    } catch (error) {
      console.error(`Error loading ${genre.name} songs:`, error);
      // Fallback data
      setGenreSongs([
        { id: `${genre.id}-1`, title: `${genre.name} Song 1`, artist: 'Artist X', album: 'Album J', preview_url: '', cover: '/api/placeholder/200/200' },
        { id: `${genre.id}-2`, title: `${genre.name} Song 2`, artist: 'Artist Y', album: 'Album K', preview_url: '', cover: '/api/placeholder/200/200' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Search for music using Spotify API
  const searchMusic = async () => {
    if (!searchTerm.trim() || !token) return;
    
    setIsLoading(true);
    try {
      const response = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(searchTerm)}&type=track&limit=20`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to search for tracks');
      }
      
      const data = await response.json();
      
      if (data.tracks && data.tracks.items) {
        setSearchResults(data.tracks.items.map(formatTrackData).filter(track => track.preview_url));
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.error('Error searching for music:', error);
      // Fallback data
      setSearchResults([
        { id: '101', title: `Search: ${searchTerm} - Result 1`, artist: 'Artist A', album: 'Album X', preview_url: '', cover: '/api/placeholder/200/200' },
        { id: '102', title: `Search: ${searchTerm} - Result 2`, artist: 'Artist B', album: 'Album Y', preview_url: '', cover: '/api/placeholder/200/200' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Toggle like status for a song
  const toggleLike = (song) => {
    const songIndex = likedSongs.findIndex(s => s.id === song.id);
    if (songIndex === -1) {
      setLikedSongs([...likedSongs, song]);
    } else {
      setLikedSongs(likedSongs.filter(s => s.id !== song.id));
    }
  };

  // Rate a song (1-5 stars)
  const rateSong = (song, rating) => {
    setRatedSongs({
      ...ratedSongs,
      [song.id]: rating
    });
  };

  // Create a new playlist
  const createPlaylist = () => {
    if (!newPlaylistName.trim()) return;
    
    const newPlaylist = {
      id: Date.now().toString(),
      name: newPlaylistName,
      songs: []
    };
    
    setPlaylists([...playlists, newPlaylist]);
    setNewPlaylistName('');
    setShowNewPlaylistInput(false);
    setCurrentPlaylist(newPlaylist);
  };

  // Add a song to the current playlist
  const addToPlaylist = (song) => {
    if (!currentPlaylist) return;
    
    // Check if song is already in the playlist
    if (currentPlaylist.songs.some(s => s.id === song.id)) return;
    
    const updatedPlaylist = {
      ...currentPlaylist,
      songs: [...currentPlaylist.songs, song]
    };
    
    setPlaylists(playlists.map(p => 
      p.id === currentPlaylist.id ? updatedPlaylist : p
    ));
    
    setCurrentPlaylist(updatedPlaylist);
  };

  // Remove a song from the current playlist
  const removeFromPlaylist = (songId) => {
    if (!currentPlaylist) return;
    
    const updatedPlaylist = {
      ...currentPlaylist,
      songs: currentPlaylist.songs.filter(s => s.id !== songId)
    };
    
    setPlaylists(playlists.map(p => 
      p.id === currentPlaylist.id ? updatedPlaylist : p
    ));
    
    setCurrentPlaylist(updatedPlaylist);
  };

  // Delete a playlist
  const deletePlaylist = (playlistId) => {
    setPlaylists(playlists.filter(p => p.id !== playlistId));
    if (currentPlaylist && currentPlaylist.id === playlistId) {
      setCurrentPlaylist(null);
    }
  };

  // Play/pause toggle
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  // Play a specific song
  const playSong = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  // Handle previous song
  const playPrevious = () => {
    if (!currentPlaylist || !currentSong) return;
    
    const currentIndex = currentPlaylist.songs.findIndex(s => s.id === currentSong.id);
    if (currentIndex > 0) {
      playSong(currentPlaylist.songs[currentIndex - 1]);
    }
  };

  // Handle next song
  const playNext = () => {
    if (!currentPlaylist || !currentSong) return;
    
    const currentIndex = currentPlaylist.songs.findIndex(s => s.id === currentSong.id);
    if (currentIndex < currentPlaylist.songs.length - 1) {
      playSong(currentPlaylist.songs[currentIndex + 1]);
    }
  };

  // Toggle mute
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  // Handle volume change
  const handleVolumeChange = (e) => {
    setVolume(parseFloat(e.target.value));
    if (isMuted) setIsMuted(false);
  };

  // Render star ratings
  const renderStarRating = (song) => {
    const currentRating = ratedSongs[song.id] || 0;
    
    return (
      <div className="star-rating">
        {[1, 2, 3, 4, 5].map(star => (
          <button 
            key={star} 
            onClick={() => rateSong(song, star)}
            className="rating-btn"
          >
            {star <= currentRating ? <StarFillIcon /> : <StarIcon />}
          </button>
        ))}
      </div>
    );
  };

  // Render song card component (used in multiple sections)
  const renderSongCard = (song) => (
    <div key={song.id} className="song-card">
      <div className="song-cover">
        <img src={song.cover || '/api/placeholder/200/200'} alt={song.title} />
        <button className="play-overlay" onClick={() => playSong(song)}>
          <PlayIcon />
        </button>
      </div>
      <div className="song-info">
        <h3>{song.title}</h3>
        <p>{song.artist}</p>
        <div className="song-actions">
          <button 
            className="like-btn" 
            onClick={() => toggleLike(song)}
          >
            {likedSongs.some(s => s.id === song.id) ? <HeartFillIcon /> : <HeartIcon />}
          </button>
          {renderStarRating(song)}
          {currentPlaylist && currentPlaylist.id !== 'liked' && (
            <button 
              className="add-to-playlist-btn" 
              onClick={() => addToPlaylist(song)}
            >
              <PlusIcon />
            </button>
          )}
        </div>
      </div>
    </div>
  );

  // Render song list component
  const renderSongList = (title, songs) => (
    <div className="song-section">
      <h2>{title}</h2>
      <div className="song-list">
        {songs.length > 0 ? songs.map(song => renderSongCard(song)) : <p>No songs available</p>}
      </div>
    </div>
  );

  // If we don't have a token, show the login screen
  if (!token) {
    return (
      <div className="music-app">
        <div className="login-container">
          <h1>Music Player</h1>
          <p>Please login with your Spotify account to continue</p>
          <button onClick={login} className="login-button">Login with Spotify</button>
        </div>
      </div>
    );
  }

  return (
    <div className="music-app">
     <div className="app-header">
        <h1>Music Player</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for songs, artists, or albums"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            onKeyPress={e => e.key === 'Enter' && searchMusic()}
          />
          <button onClick={searchMusic} className="search-btn">
            <SearchIcon />
          </button>
        </div>
      </div>

      {/* Sidebar Navigation */}
      <div className="app-content">
        <div className="sidebar">
          <div className="sidebar-section">
            <h3>Library</h3>
            <ul>
              <li 
                className={currentPlaylist && currentPlaylist.id === 'liked' ? 'active' : ''}
                onClick={() => setCurrentPlaylist({ id: 'liked', name: 'Liked Songs', songs: likedSongs })}
              >
                Liked Songs
              </li>
              <li
                onClick={() => {
                  setCurrentPlaylist(null);
                  setCurrentGenre(null);
                  setSearchResults([]);
                }}
              >
                Discover
              </li>
            </ul>
          </div>

          <div className="sidebar-section">
            <div className="sidebar-header">
              <h3>Your Playlists</h3>
              <button onClick={() => setShowNewPlaylistInput(!showNewPlaylistInput)} className="small-icon-btn">
                <PlusIcon />
              </button>
            </div>
            {showNewPlaylistInput && (
              <div className="new-playlist-form">
                <input
                  type="text"
                  placeholder="Playlist name"
                  value={newPlaylistName}
                  onChange={e => setNewPlaylistName(e.target.value)}
                  onKeyPress={e => e.key === 'Enter' && createPlaylist()}
                />
                <button onClick={createPlaylist}>Create</button>
              </div>
            )}
            <ul>
              {playlists.map(playlist => (
                <li 
                  key={playlist.id}
                  className={currentPlaylist && currentPlaylist.id === playlist.id ? 'active' : ''}
                  onClick={() => setCurrentPlaylist(playlist)}
                >
                  {playlist.name}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      deletePlaylist(playlist.id);
                    }}
                    className="small-icon-btn"
                  >
                    <TrashIcon />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="sidebar-section">
            <h3>Genres</h3>
            <ul className="genre-list">
              {genres.map(genre => (
                <li 
                  key={genre.id}
                  className={currentGenre && currentGenre.id === genre.id ? 'active' : ''}
                  onClick={() => {
                    setCurrentGenre(genre);
                    setCurrentPlaylist(null);
                    setSearchResults([]);
                  }}
                >
                  {genre.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="main-content">
          {/* Search Results */}
          {searchResults.length > 0 && (
            <div className="search-results">
              <h2>Search Results for "{searchTerm}"</h2>
              {isLoading ? (
                <div className="loading">Loading...</div>
              ) : (
                <div className="song-list">
                  {searchResults.map(song => renderSongCard(song))}
                </div>
              )}
            </div>
          )}

          {/* Current Playlist View */}
          {currentPlaylist && (
            <div className="current-playlist">
              <h2>{currentPlaylist.name}</h2>
              {currentPlaylist.songs.length > 0 ? (
                <div className="song-list">
                  {currentPlaylist.songs.map(song => (
                    <div key={song.id} className="song-card">
                      <div className="song-cover">
                        <img src={song.cover || '/api/placeholder/200/200'} alt={song.title} />
                        <button className="play-overlay" onClick={() => playSong(song)}>
                          <PlayIcon />
                        </button>
                      </div>
                      <div className="song-info">
                        <h3>{song.title}</h3>
                        <p>{song.artist}</p>
                        <div className="song-actions">
                          <button 
                            className="like-btn" 
                            onClick={() => toggleLike(song)}
                          >
                            {likedSongs.some(s => s.id === song.id) ? <HeartFillIcon /> : <HeartIcon />}
                          </button>
                          {renderStarRating(song)}
                          {currentPlaylist.id !== 'liked' && (
                            <button 
                              className="remove-from-playlist-btn"
                              onClick={() => removeFromPlaylist(song.id)}
                            >
                              <TrashIcon />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No songs in this playlist yet</p>
              )}
            </div>
          )}

          {/* Genre View */}
          {currentGenre && (
            <div className="genre-view">
              <h2>{currentGenre.name} Music</h2>
              {isLoading ? (
                <div className="loading">Loading...</div>
              ) : (
                <div className="song-list">
                  {genreSongs.map(song => renderSongCard(song))}
                </div>
              )}
            </div>
          )}

          {/* Discovery View - Default when no playlist or genre is selected */}
          {!currentPlaylist && !currentGenre && searchResults.length === 0 && (
            <div className="discovery-view">
              {renderSongList('Featured Songs', featuredSongs)}
              {renderSongList('Popular Songs', popularSongs)}
              {renderSongList('New Releases', newReleases)}
            </div>
          )}
        </div>
      </div>

      {/* Fixed Bottom Player - Shows when a song is playing */}
      {showFloatingPlayer && (
        <div className="floating-player">
          <div className="player-song-info">
            {currentSong && (
              <>
                <img src={currentSong.cover || '/api/placeholder/200/200'} alt={currentSong.title} className="player-cover" />
                <div className="player-text">
                  <h4>{currentSong.title}</h4>
                  <p>{currentSong.artist}</p>
                </div>
              </>
            )}
          </div>
          
          <div className="player-controls">
            <button onClick={playPrevious} className="control-btn">
              <SkipBackIcon />
            </button>
            <button onClick={togglePlay} className="play-btn">
              {isPlaying ? <PauseIcon /> : <PlayIcon />}
            </button>
            <button onClick={playNext} className="control-btn">
              <SkipForwardIcon />
            </button>
          </div>
          
          <div className="volume-controls">
            <button onClick={toggleMute} className="volume-btn">
              {isMuted ? <VolumeXIcon /> : <Volume2Icon />}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="volume-slider"
            />
          </div>
          
          <audio ref={audioRef} onEnded={playNext} />
        </div>
      )}
      <style>{`
      /* General styles */
.music-app {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #111;
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #f9f9f9;
}

/* Login styles */
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
}

.login-button {
  background-color: #1DB954;
  color: white;
  border: none;
  border-radius: 30px;
  padding: 15px 30px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 20px;
  transition: all 0.2s ease;
}

.login-button:hover {
  background-color: #1ED760;
  transform: scale(1.05);
}

/* Header styles */
.app-header {
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.app-header h1 {
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  color: #1DB954;
}

.search-bar {
  display: flex;
  align-items: center;
  flex: 1;
  max-width: 500px;
  margin-left: 30px;
  position: relative;
}

.search-bar input {
  width: 100%;
  padding: 10px 40px 10px 15px;
  border: 1px solid #ddd;
  border-radius: 20px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s ease;
}

.search-bar input:focus {
  border-color: #1DB954;
}

.search-btn {
  background: none;
  border: none;
  position: absolute;
  right: 10px;
  cursor: pointer;
  color: #777;
}

.search-btn:hover {
  color: #1DB954;
}

/* Main content layout */
.app-content {
  display: flex;
  flex: 1;
}

/* Sidebar styles */
.sidebar {
  width: 250px;
  background-color: #fff;
  border-right: 1px solid #eee;
  padding: 20px;
}

.sidebar-section {
  margin-bottom: 30px;
}

.sidebar-section h3 {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 600;
  color: #333;
}

.sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar li {
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
}

.sidebar li:hover {
  background-color: #f2f2f2;
}

.sidebar li.active {
  background-color: rgba(29, 185, 84, 0.1);
  color: #1DB954;
  font-weight: 500;
}

.small-icon-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: #777;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.small-icon-btn:hover {
  color: #1DB954;
}

.new-playlist-form {
  display: flex;
  margin-bottom: 10px;
}

.new-playlist-form input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 8px;
  font-size: 14px;
}

.new-playlist-form button {
  background-color: #1DB954;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
}

.genre-list {
  max-height: 300px;
  overflow-y: auto;
}

/* Main content styles */
.main-content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}

/* Song card styles */
.song-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.song-card {
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  transition: transform 0.2s ease;
}

.song-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.song-cover {
  position: relative;
  padding-top: 100%;
}

.song-cover img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.play-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s ease;
  border: none;
  cursor: pointer;
  color: white;
}

.song-card:hover .play-overlay {
  opacity: 1;
}

.song-info {
  padding: 15px;
}

.song-info h3 {
  margin: 0 0 8px;
  font-size: 16px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.song-info p {
  margin: 0;
  font-size: 14px;
  color: #777;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.song-actions {
  display: flex;
  align-items: center;
  margin-top: 12px;
}

.like-btn, .add-to-playlist-btn, .remove-from-playlist-btn, .rating-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-right: 10px;
  color: #777;
}

.like-btn:hover, .add-to-playlist-btn:hover, .remove-from-playlist-btn:hover, .rating-btn:hover {
  color: #1DB954;
}

.star-rating {
  display: flex;
  align-items: center;
}

.star-rating button {
  padding: 0;
  margin-right: 2px;
}

/* Section styles */
.song-section {
  margin-bottom: 40px;
}

.song-section h2 {
  margin-top: 0;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #333;
}

/* Loading state */
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  font-size: 16px;
  color: #777;
}

/* Floating player styles */
.floating-player {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  border-top: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
  z-index: 100;
}

.player-song-info {
  display: flex;
  align-items: center;
  width: 30%;
}

.player-cover {
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 15px;
  border-radius: 4px;
}

.player-text h4 {
  margin: 0 0 5px;
  font-size: 14px;
  font-weight: 500;
}

.player-text p {
  margin: 0;
  font-size: 12px;
  color: #777;
}

.player-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
}

.control-btn, .play-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
}

.play-btn {
  background-color: #1DB954;
  color: white;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  margin: 0 15px;
}

.play-btn:hover {
  background-color: #1ED760;
  transform: scale(1.05);
}

.control-btn:hover {
  color: #1DB954;
}

.volume-controls {
  display: flex;
  align-items: center;
  width: 30%;
  justify-content: flex-end;
}

.volume-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
}

.volume-btn:hover {
  color: #1DB954;
}

.volume-slider {
  width: 100px;
  margin-left: 10px;
  accent-color: #1DB954;
}

/* Media queries for responsive design */
@media screen and (max-width: 768px) {
  .app-content {
    flex-direction: column;
  }
  
  .sidebar {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #eee;
  }
  
  .player-song-info {
    width: 40%;
  }
  
  .player-controls {
    width: 30%;
  }
  
  .volume-controls {
    width: 20%;
  }
  
  .volume-slider {
    width: 60px;
  }
}

@media screen and (max-width: 576px) {
  .app-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .search-bar {
    margin-left: 0;
    margin-top: 15px;
    max-width: 100%;
  }
  
  .song-list {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
  
  .floating-player {
    flex-wrap: wrap;
    padding: 10px;
  }
  
  .player-song-info {
    width: 100%;
    margin-bottom: 10px;
  }
  
  .player-controls {
    width: 60%;
    order: 2;
  }
  
  .volume-controls {
    width: 40%;
    order: 3;
  }
}
      `}</style>
    </div>
  );
};

export default Music;