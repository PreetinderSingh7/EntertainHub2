// import React, { useState, useEffect, useRef } from 'react';
// import './Music.css';

// // Define icons as React components instead of importing from lucide-react
// const SearchIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <circle cx="11" cy="11" r="8"></circle>
//     <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
//   </svg>
// );

// const HeartIcon = ({ filled }) => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
//   </svg>
// );

// const StarIcon = ({ filled }) => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
//   </svg>
// );

// const PlusIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <line x1="12" y1="5" x2="12" y2="19"></line>
//     <line x1="5" y1="12" x2="19" y2="12"></line>
//   </svg>
// );

// const TrashIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <polyline points="3 6 5 6 21 6"></polyline>
//     <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
//   </svg>
// );

// const PlayIcon = ({ size = 20 }) => (
//   <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <polygon points="5 3 19 12 5 21 5 3"></polygon>
//   </svg>
// );

// const PauseIcon = ({ size = 20 }) => (
//   <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

// const VolumeIcon = ({ muted }) => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     {muted ? (
//       <>
//         <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
//         <line x1="23" y1="9" x2="17" y2="15"></line>
//         <line x1="17" y1="9" x2="23" y2="15"></line>
//       </>
//     ) : (
//       <>
//         <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
//         <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
//         <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
//       </>
//     )}
//   </svg>
// );

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

//   // Jamendo API credentials
//   const CLIENT_ID = '4cc12761';

//   const audioRef = useRef(null);

//   // Load data from localStorage on component mount
//   useEffect(() => {
//     const storedPlaylists = localStorage.getItem('playlists');
//     const storedLikedSongs = localStorage.getItem('likedSongs');
//     const storedRatedSongs = localStorage.getItem('ratedSongs');

//     if (storedPlaylists) setPlaylists(JSON.parse(storedPlaylists));
//     if (storedLikedSongs) setLikedSongs(JSON.parse(storedLikedSongs));
//     if (storedRatedSongs) setRatedSongs(JSON.parse(storedRatedSongs));
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

//   // Search for music using Jamendo API
//   const searchMusic = async () => {
//     if (!searchTerm.trim()) return;
    
//     setIsLoading(true);
//     try {
//       // Jamendo API call
//       const response = await fetch(
//         `https://api.jamendo.com/v3.0/tracks/?client_id=${CLIENT_ID}&format=json&limit=20&search=${encodeURIComponent(searchTerm)}`
//       );
      
//       if (!response.ok) {
//         throw new Error(`API responded with status: ${response.status}`);
//       }
      
//       const data = await response.json();
      
//       // Transform Jamendo API response to our app's format
//       const formattedResults = data.results.map(track => ({
//         id: track.id,
//         title: track.name,
//         artist: track.artist_name,
//         album: track.album_name,
//         audio: track.audio, // Jamendo streaming URL
//         cover: track.image || '/api/placeholder/200/200',
//         duration: track.duration
//       }));
      
//       setSearchResults(formattedResults);
//     } catch (error) {
//       console.error('Error searching for music:', error);
      
//       // If API fails, show an error or fallback to demo data
//       alert('Error connecting to Jamendo API. Please try again later.');
      
//       // Fallback demo data if needed
//       setSearchResults([
//         { id: '1', title: 'API Error - Demo Song 1', artist: 'Demo Artist', album: 'Demo Album', audio: '', cover: '/api/placeholder/200/200' },
//         { id: '2', title: 'API Error - Demo Song 2', artist: 'Demo Artist', album: 'Demo Album', audio: '', cover: '/api/placeholder/200/200' }
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

//   // Format duration from seconds to MM:SS
//   const formatDuration = (seconds) => {
//     if (!seconds) return '0:00';
//     const mins = Math.floor(seconds / 60);
//     const secs = Math.floor(seconds % 60);
//     return `${mins}:${secs.toString().padStart(2, '0')}`;
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
//             <StarIcon filled={star <= currentRating} />
//           </button>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div className="music-app">
//       <div className="app-header">
//         <h1>Jamendo Music Player</h1>
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
//         </div>

//         <div className="content-area">
//           {isLoading ? (
//             <div className="loading">Loading...</div>
//           ) : (
//             <>
//               {searchResults.length > 0 && (
//                 <div className="search-results">
//                   <h2>Search Results</h2>
//                   <div className="song-list">
//                     {searchResults.map(song => (
//                       <div key={song.id} className="song-card">
//                         <div className="song-cover">
//                           <img src={song.cover} alt={song.title} />
//                           <button className="play-overlay" onClick={() => playSong(song)}>
//                             <PlayIcon size={40} />
//                           </button>
//                         </div>
//                         <div className="song-info">
//                           <h3>{song.title}</h3>
//                           <p>{song.artist}</p>
//                           {song.duration && <span className="duration">{formatDuration(song.duration)}</span>}
//                           <div className="song-actions">
//                             <button 
//                               className="like-btn" 
//                               onClick={() => toggleLike(song)}
//                             >
//                               <HeartIcon filled={likedSongs.some(s => s.id === song.id)} />
//                             </button>
//                             {renderStarRating(song)}
//                             {currentPlaylist && currentPlaylist.id !== 'liked' && (
//                               <button 
//                                 className="add-to-playlist-btn" 
//                                 onClick={() => addToPlaylist(song)}
//                               >
//                                 <PlusIcon />
//                               </button>
//                             )}
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}

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
//                               {currentSong && currentSong.id === song.id && isPlaying ? 
//                                 <PauseIcon size={20} /> : 
//                                 <PlayIcon size={20} />
//                               }
//                             </button>
//                           </div>
//                           <div className="playlist-song-info">
//                             <h4>{song.title}</h4>
//                             <p>{song.artist}</p>
//                             {song.duration && <span className="duration">{formatDuration(song.duration)}</span>}
//                           </div>
//                           <div className="playlist-song-actions">
//                             <button 
//                               className="like-btn" 
//                               onClick={() => toggleLike(song)}
//                             >
//                               <HeartIcon filled={likedSongs.some(s => s.id === song.id)} />
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
//             </>
//           )}
//         </div>
//       </div>

//       <div className={`player-bar ${currentSong ? 'active' : ''}`}>
//         {currentSong && (
//           <>
//             <div className="now-playing">
//               <img src={currentSong.cover} alt={currentSong.title} />
//               <div className="song-details">
//                 <h4>{currentSong.title}</h4>
//                 <p>{currentSong.artist}</p>
//               </div>
//             </div>
            
//             <div className="player-controls">
//               <button onClick={playPrevious} className="control-btn">
//                 <SkipBackIcon />
//               </button>
//               <button onClick={togglePlay} className="control-btn play-pause">
//                 {isPlaying ? <PauseIcon size={32} /> : <PlayIcon size={32} />}
//               </button>
//               <button onClick={playNext} className="control-btn">
//                 <SkipForwardIcon />
//               </button>
//             </div>
            
//             <div className="volume-controls">
//               <button onClick={toggleMute} className="control-btn">
//                 <VolumeIcon muted={isMuted} />
//               </button>
//               <input
//                 type="range"
//                 min="0"
//                 max="1"
//                 step="0.01"
//                 value={volume}
//                 onChange={handleVolumeChange}
//                 className="volume-slider"
//               />
//             </div>
            
//             <audio ref={audioRef} onEnded={playNext} />
//           </>
//         )}
//       </div>
//       <style>
//         {`
//           /* Base styles */
// .music-app {
//   font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
//   display: flex;
//   flex-direction: column;
//   height: 100vh;
//   color: #f5f5f7;
//   background: linear-gradient(135deg, #121212 0%, #1e1e1e 100%);
//   overflow: hidden;
// }

// .app-header {
//   padding: 20px;
//   background-color: rgba(0, 0, 0, 0.3);
//   box-shadow: 0 1px 10px rgba(0, 0, 0, 0.3);
//   z-index: 10;
// }

// .app-header h1 {
//   margin: 0 0 15px;
//   color: #1db954;
//   font-size: 28px;
// }

// /* Search bar */
// .search-bar {
//   display: flex;
//   align-items: center;
//   background-color: #282828;
//   border-radius: 24px;
//   padding: 6px 12px;
//   border: 1px solid #333;
//   transition: all 0.3s ease;
// }

// .search-bar:focus-within {
//   box-shadow: 0 0 0 2px rgba(29, 185, 84, 0.6);
//   border-color: #1db954;
// }

// .search-bar input {
//   flex: 1;
//   padding: 8px 12px;
//   background: transparent;
//   border: none;
//   color: #fff;
//   font-size: 16px;
//   outline: none;
// }

// .search-bar input::placeholder {
//   color: #aaa;
// }

// .search-btn {
//   background-color: transparent;
//   border: none;
//   color: #1db954;
//   cursor: pointer;
//   padding: 5px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }

// /* Main content layout */
// .main-content {
//   display: flex;
//   flex: 1;
//   overflow: hidden;
// }

// .sidebar {
//   width: 250px;
//   background-color: #121212;
//   padding: 20px;
//   border-right: 1px solid #333;
//   overflow-y: auto;
// }

// .content-area {
//   flex: 1;
//   padding: 20px;
//   overflow-y: auto;
// }

// /* Playlists section */
// .playlists-section {
//   margin-bottom: 30px;
// }

// .section-header {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 15px;
// }

// .section-header h2 {
//   margin: 0;
//   font-size: 18px;
//   color: #fff;
// }

// .add-btn {
//   background-color: transparent;
//   border: none;
//   color: #1db954;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 5px;
// }

// .new-playlist-form {
//   display: flex;
//   margin-bottom: 15px;
// }

// .new-playlist-form input {
//   flex: 1;
//   padding: 8px 12px;
//   background-color: #333;
//   border: none;
//   border-radius: 4px 0 0 4px;
//   color: #fff;
//   font-size: 14px;
// }

// .new-playlist-form button {
//   background-color: #1db954;
//   border: none;
//   border-radius: 0 4px 4px 0;
//   color: #fff;
//   cursor: pointer;
//   padding: 0 12px;
//   font-weight: bold;
// }

// .playlist-list {
//   list-style: none;
//   padding: 0;
//   margin: 0;
// }

// .playlist-list li {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 8px 12px;
//   margin-bottom: 5px;
//   border-radius: 4px;
//   color: #ddd;
//   cursor: pointer;
//   transition: background-color 0.2s ease;
// }

// .playlist-list li:hover {
//   background-color: #333;
// }

// .playlist-list li.active {
//   background-color: #333;
//   color: #1db954;
//   font-weight: bold;
// }

// .delete-btn {
//   background-color: transparent;
//   border: none;
//   color: #888;
//   cursor: pointer;
//   opacity: 0;
//   transition: opacity 0.2s ease;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }

// .playlist-list li:hover .delete-btn {
//   opacity: 1;
// }

// .liked-songs {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 10px 12px;
//   background-color: #1e1e1e;
//   border-radius: 4px;
//   cursor: pointer;
//   margin-top: 15px;
//   transition: background-color 0.2s ease;
// }

// .liked-songs:hover {
//   background-color: #333;
// }

// .liked-songs h3 {
//   margin: 0;
//   font-size: 16px;
//   color: #fff;
// }

// .liked-songs span {
//   color: #888;
//   font-size: 14px;
// }

// /* Search results */
// .search-results h2, .current-playlist h2 {
//   margin-top: 0;
//   margin-bottom: 20px;
//   color: #fff;
//   font-size: 22px;
// }

// .song-list {
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
//   gap: 20px;
// }

// .song-card {
//   background-color: #181818;
//   border-radius: 8px;
//   overflow: hidden;
//   transition: background-color 0.3s ease;
// }

// .song-card:hover {
//   background-color: #282828;
// }

// .song-cover {
//   position: relative;
//   width: 100%;
//   padding-top: 100%;
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
//   transform: translate(-50%, -50%) scale(0.8);
//   background-color: #1db954;
//   border: none;
//   border-radius: 50%;
//   width: 50px;
//   height: 50px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: #fff;
//   cursor: pointer;
//   opacity: 0;
//   transition: all 0.3s ease;
// }

// .song-cover:hover .play-overlay {
//   opacity: 1;
//   transform: translate(-50%, -50%) scale(1);
// }

// .song-info {
//   padding: 12px;
// }

// .song-info h3 {
//   margin: 0 0 5px;
//   font-size: 16px;
//   color: #fff;
//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;
// }

// .song-info p {
//   margin: 0 0 10px;
//   font-size: 14px;
//   color: #b3b3b3;
//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;
// }

// .song-actions {
//   display: flex;
//   align-items: center;
//   gap: 10px;
// }

// .like-btn, .add-to-playlist-btn, .rating-btn {
//   background-color: transparent;
//   border: none;
//   padding: 5px;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   transition: transform 0.2s ease;
// }

// .like-btn {
//   color: #ff4f4f;
// }

// .add-to-playlist-btn {
//   color: #1db954;
// }

// .like-btn:hover, .add-to-playlist-btn:hover, .rating-btn:hover {
//   transform: scale(1.2);
// }

// .star-rating {
//   display: flex;
//   gap: 2px;
// }

// .rating-btn {
//   color: #ffb700;
// }

// /* Playlist view */
// .playlist-songs {
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
// }

// .playlist-song {
//   display: grid;
//   grid-template-columns: 40px 1fr auto;
//   align-items: center;
//   padding: 10px;
//   border-radius: 4px;
//   background-color: #181818;
//   transition: background-color 0.2s ease;
// }

// .playlist-song:hover, .playlist-song.playing {
//   background-color: #282828;
// }

// .playlist-song.playing {
//   border-left: 3px solid #1db954;
// }

// .song-play button {
//   background-color: transparent;
//   border: none;
//   color: #fff;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }

// .playlist-song-info {
//   margin-right: 20px;
// }

// .playlist-song-info h4 {
//   margin: 0 0 3px;
//   font-size: 16px;
//   color: #fff;
// }

// .playlist-song-info p {
//   margin: 0;
//   font-size: 14px;
//   color: #b3b3b3;
// }

// .playlist-song-actions {
//   display: flex;
//   align-items: center;
//   gap: 10px;
// }

// .remove-btn {
//   background-color: transparent;
//   border: none;
//   color: #ff4f4f;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 5px;
//   opacity: 0;
//   transition: opacity 0.2s ease;
// }

// .playlist-song:hover .remove-btn {
//   opacity: 1;
// }

// /* Player bar */
// .player-bar {
//   height: 0;
//   background-color: #181818;
//   border-top: 1px solid #333;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 0 20px;
//   transition: height 0.3s ease;
//   overflow: hidden;
// }

// .player-bar.active {
//   height: 80px;
// }

// .now-playing {
//   display: flex;
//   align-items: center;
//   width: 30%;
// }

// .now-playing img {
//   width: 50px;
//   height: 50px;
//   margin-right: 12px;
//   border-radius: 4px;
// }

// .song-details h4 {
//   margin: 0 0 3px;
//   font-size: 14px;
//   color: #fff;
// }

// .song-details p {
//   margin: 0;
//   font-size: 12px;
//   color: #b3b3b3;
// }

// .player-controls {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 15px;
// }

// .control-btn {
//   background-color: transparent;
//   border: none;
//   color: #b3b3b3;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   transition: all 0.2s ease;
// }

// .control-btn:hover {
//   color: #fff;
// }

// .play-pause {
//   background-color: #fff;
//   border-radius: 50%;
//   color: #000;
//   width: 40px;
//   height: 40px;
// }

// .play-pause:hover {
//   transform: scale(1.05);
//   color: #000;
// }

// .volume-controls {
//   display: flex;
//   align-items: center;
//   gap: 10px;
//   width: 30%;
//   justify-content: flex-end;
// }

// .volume-slider {
//   width: 100px;
//   -webkit-appearance: none;
//   height: 4px;
//   border-radius: 2px;
//   background: #5a5a5a;
//   outline: none;
// }

// .volume-slider::-webkit-slider-thumb {
//   -webkit-appearance: none;
//   appearance: none;
//   width: 12px;
//   height: 12px;
//   border-radius: 50%;
//   background: #fff;
//   cursor: pointer;
// }

// .volume-slider::-moz-range-thumb {
//   width: 12px;
//   height: 12px;
//   border-radius: 50%;
//   background: #fff;
//   cursor: pointer;
//   border: none;
// }

// /* Loading state */
// .loading {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 100%;
//   color: #b3b3b3;
//   font-size: 18px;
// }

// /* Responsive adjustments */
// @media (max-width: 768px) {
//   .main-content {
//     flex-direction: column;
//   }
  
//   .sidebar {
//     width: 100%;
//     border-right: none;
//     border-bottom: 1px solid #333;
//     max-height: 30vh;
//   }
  
//   .player-bar {
//     flex-direction: column;
//     padding: 10px;
//   }
  
//   .player-bar.active {
//     height: 160px;
//   }
  
//   .now-playing, .player-controls, .volume-controls {
//     width: 100%;
//     margin-bottom: 10px;
//   }
  
//   .song-list {
//     grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
//   }
// }

// /* Animations */
// @keyframes pulse {
//   0% { transform: scale(1); }
//   50% { transform: scale(1.05); }
//   100% { transform: scale(1); }
// }

// .playing .song-play button {
//   color: #1db954;
//   animation: pulse 2s infinite;
// }

// /* Custom scrollbar */
// ::-webkit-scrollbar {
//   width: 8px;
// }

// ::-webkit-scrollbar-track {
//   background: #121212;
// }

// ::-webkit-scrollbar-thumb {
//   background: #333;
//   border-radius: 4px;
// }

// ::-webkit-scrollbar-thumb:hover {
//   background: #555;
// }

// /* Empty state */
// .playlist-songs p {
//   color: #888;
//   text-align: center;
//   padding: 20px;
// }

// /* Tooltips */
// [data-tooltip] {
//   position: relative;
// }

// [data-tooltip]:hover::after {
//   content: attr(data-tooltip);
//   position: absolute;
//   bottom: 100%;
//   left: 50%;
//   transform: translateX(-50%);
//   background-color: #000;
//   color: #fff;
//   padding: 5px 10px;
//   border-radius: 4px;
//   white-space: nowrap;
//   font-size: 12px;
//   pointer-events: none;
//   margin-bottom: 5px;
//   z-index: 10;
// }

// /* Focus styles for better accessibility */
// button:focus, input:focus {
//   outline: 2px solid #1db954;
//   outline-offset: 2px;
// }

// button:focus:not(:focus-visible), input:focus:not(:focus-visible) {
//   outline: none;
// }

// /* Active state highlights */
// .like-btn.active {
//   color: #ff4f4f;
// }

// .rating-btn.active {
//   color: #ffb700;
// }
//             `}
//             </style>
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

// Jamendo API configuration
const JAMENDO_API_CONFIG = {
  clientId: '4cc12761',
  baseUrl: 'https://api.jamendo.com/v3.0'
};

const Music = () => {
  // State management
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
  
  // Music sections
  const [featuredSongs, setFeaturedSongs] = useState([]);
  const [popularSongs, setPopularSongs] = useState([]);
  const [newReleases, setNewReleases] = useState([]);
  const [genres, setGenres] = useState([]);
  const [currentGenre, setCurrentGenre] = useState(null);
  const [genreSongs, setGenreSongs] = useState([]);

  const audioRef = useRef(null);

  // Load data from localStorage on component mount
  useEffect(() => {
    const storedPlaylists = localStorage.getItem('playlists');
    const storedLikedSongs = localStorage.getItem('likedSongs');
    const storedRatedSongs = localStorage.getItem('ratedSongs');

    if (storedPlaylists) setPlaylists(JSON.parse(storedPlaylists));
    if (storedLikedSongs) setLikedSongs(JSON.parse(storedLikedSongs));
    if (storedRatedSongs) setRatedSongs(JSON.parse(storedRatedSongs));
    
    // Load initial music sections
    loadFeaturedSongs();
    loadPopularSongs();
    loadNewReleases();
    loadGenres();
  }, []);

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
      audioRef.current.src = currentSong.audio || '';
      if (isPlaying) {
        audioRef.current.play().catch(err => console.error('Playback error:', err));
      } else {
        audioRef.current.pause();
      }
    }
  }, [currentSong, isPlaying]);

  // Handle volume changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  // Load genre songs when a genre is selected
  useEffect(() => {
    if (currentGenre) {
      loadGenreSongs(currentGenre);
    }
  }, [currentGenre]);

  // Format Jamendo API track data
  const formatTrackData = (track) => {
    return {
      id: track.id,
      title: track.name,
      artist: track.artist_name,
      album: track.album_name || '',
      audio: track.audio,
      cover: track.image || '/api/placeholder/200/200',
      duration: track.duration,
      releaseDate: track.releasedate
    };
  };

  // Load featured songs from Jamendo
  const loadFeaturedSongs = async () => {
    try {
      const response = await fetch(`${JAMENDO_API_CONFIG.baseUrl}/tracks/?client_id=${JAMENDO_API_CONFIG.clientId}&format=json&featured=1&limit=10`);
      const data = await response.json();
      
      if (data.results) {
        setFeaturedSongs(data.results.map(formatTrackData));
      }
    } catch (error) {
      console.error('Error loading featured songs:', error);
      // Fallback data
      setFeaturedSongs([
        { id: '1', title: 'Featured Song 1', artist: 'Artist A', album: 'Album X', audio: '', cover: '/api/placeholder/200/200' },
        { id: '2', title: 'Featured Song 2', artist: 'Artist B', album: 'Album Y', audio: '', cover: '/api/placeholder/200/200' },
      ]);
    }
  };

  // Load popular songs from Jamendo
  const loadPopularSongs = async () => {
    try {
      const response = await fetch(`${JAMENDO_API_CONFIG.baseUrl}/tracks/?client_id=${JAMENDO_API_CONFIG.clientId}&format=json&boost=popularity&limit=10`);
      const data = await response.json();
      
      if (data.results) {
        setPopularSongs(data.results.map(formatTrackData));
      }
    } catch (error) {
      console.error('Error loading popular songs:', error);
      // Fallback data
      setPopularSongs([
        { id: '3', title: 'Popular Song 1', artist: 'Artist C', album: 'Album Z', audio: '', cover: '/api/placeholder/200/200' },
        { id: '4', title: 'Popular Song 2', artist: 'Artist D', album: 'Album W', audio: '', cover: '/api/placeholder/200/200' },
      ]);
    }
  };

  // Load new releases from Jamendo
  const loadNewReleases = async () => {
    try {
      const response = await fetch(`${JAMENDO_API_CONFIG.baseUrl}/tracks/?client_id=${JAMENDO_API_CONFIG.clientId}&format=json&datebetween=2023-01-01_2025-12-31&boost=releasedate&limit=10`);
      const data = await response.json();
      
      if (data.results) {
        setNewReleases(data.results.map(formatTrackData));
      }
    } catch (error) {
      console.error('Error loading new releases:', error);
      // Fallback data
      setNewReleases([
        { id: '5', title: 'New Release 1', artist: 'Artist E', album: 'Album V', audio: '', cover: '/api/placeholder/200/200' },
        { id: '6', title: 'New Release 2', artist: 'Artist F', album: 'Album U', audio: '', cover: '/api/placeholder/200/200' },
      ]);
    }
  };

  // Load genres from Jamendo
  const loadGenres = async () => {
    try {
      const response = await fetch(`${JAMENDO_API_CONFIG.baseUrl}/tags/?client_id=${JAMENDO_API_CONFIG.clientId}&format=json&type=genre`);
      const data = await response.json();
      
      if (data.results) {
        setGenres(data.results);
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

  // Load songs by genre from Jamendo
  const loadGenreSongs = async (genre) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${JAMENDO_API_CONFIG.baseUrl}/tracks/?client_id=${JAMENDO_API_CONFIG.clientId}&format=json&tags=${genre.name}&limit=10`);
      const data = await response.json();
      
      if (data.results) {
        setGenreSongs(data.results.map(formatTrackData));
      }
    } catch (error) {
      console.error(`Error loading ${genre.name} songs:`, error);
      // Fallback data
      setGenreSongs([
        { id: `${genre.id}-1`, title: `${genre.name} Song 1`, artist: 'Artist X', album: 'Album J', audio: '', cover: '/api/placeholder/200/200' },
        { id: `${genre.id}-2`, title: `${genre.name} Song 2`, artist: 'Artist Y', album: 'Album K', audio: '', cover: '/api/placeholder/200/200' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Search for music using Jamendo API
  const searchMusic = async () => {
    if (!searchTerm.trim()) return;
    
    setIsLoading(true);
    try {
      const response = await fetch(`${JAMENDO_API_CONFIG.baseUrl}/tracks/?client_id=${JAMENDO_API_CONFIG.clientId}&format=json&namesearch=${encodeURIComponent(searchTerm)}&limit=20`);
      const data = await response.json();
      
      if (data.results) {
        setSearchResults(data.results.map(formatTrackData));
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.error('Error searching for music:', error);
      // Fallback data
      setSearchResults([
        { id: '101', title: `Search: ${searchTerm} - Result 1`, artist: 'Artist A', album: 'Album X', audio: '', cover: '/api/placeholder/200/200' },
        { id: '102', title: `Search: ${searchTerm} - Result 2`, artist: 'Artist B', album: 'Album Y', audio: '', cover: '/api/placeholder/200/200' },
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
        {songs.map(song => renderSongCard(song))}
      </div>
    </div>
  );

  return (
    <div className="music-app">
      <div className="app-header">
        <h1>Music Player</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for songs, artists, or albums..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && searchMusic()}
          />
          <button onClick={searchMusic} className="search-btn">
            <SearchIcon />
          </button>
        </div>
      </div>

      <div className="main-content">
        <div className="sidebar">
          <div className="playlists-section">
            <div className="section-header">
              <h2>Playlists</h2>
              <button className="add-btn" onClick={() => setShowNewPlaylistInput(!showNewPlaylistInput)}>
                <PlusIcon />
              </button>
            </div>
            
            {showNewPlaylistInput && (
              <div className="new-playlist-form">
                <input
                  type="text"
                  placeholder="Playlist name"
                  value={newPlaylistName}
                  onChange={(e) => setNewPlaylistName(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && createPlaylist()}
                />
                <button onClick={createPlaylist}>Create</button>
              </div>
            )}
            
            <ul className="playlist-list">
              {playlists.map(playlist => (
                <li 
                  key={playlist.id} 
                  className={currentPlaylist && currentPlaylist.id === playlist.id ? 'active' : ''}
                >
                  <span onClick={() => setCurrentPlaylist(playlist)}>{playlist.name}</span>
                  <button onClick={() => deletePlaylist(playlist.id)} className="delete-btn">
                    <TrashIcon />
                  </button>
                </li>
              ))}
            </ul>

            <div className="liked-songs">
              <h3 onClick={() => setCurrentPlaylist({id: 'liked', name: 'Liked Songs', songs: likedSongs})}>
                Liked Songs
              </h3>
              <span>{likedSongs.length} songs</span>
            </div>
          </div>

          <div className="genres-section">
            <h2>Genres</h2>
            <ul className="genre-list">
              {genres.map(genre => (
                <li 
                  key={genre.id}
                  className={currentGenre && currentGenre.id === genre.id ? 'active' : ''}
                  onClick={() => setCurrentGenre(genre)}
                >
                  {genre.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="content-area">
          {isLoading ? (
            <div className="loading">Loading...</div>
          ) : (
            <>
              {/* Show search results if available */}
              {searchResults.length > 0 && (
                <div className="search-results">
                  <h2>Search Results</h2>
                  <div className="song-list">
                    {searchResults.map(song => renderSongCard(song))}
                  </div>
                </div>
              )}

              {/* Show current genre songs if a genre is selected */}
              {currentGenre && genreSongs.length > 0 && (
                renderSongList(`${currentGenre.name} Music`, genreSongs)
              )}

              {/* Show current playlist if selected */}
              {currentPlaylist && (
                <div className="current-playlist">
                  <h2>{currentPlaylist.name}</h2>
                  {currentPlaylist.songs.length === 0 ? (
                    <p>This playlist is empty.</p>
                  ) : (
                    <div className="playlist-songs">
                      {currentPlaylist.songs.map(song => (
                        <div 
                          key={song.id} 
                          className={`playlist-song ${currentSong && currentSong.id === song.id ? 'playing' : ''}`}
                        >
                          <div className="song-play">
                            <button onClick={() => playSong(song)}>
                              {currentSong && currentSong.id === song.id && isPlaying ? <PauseIcon /> : <PlayIcon />}
                            </button>
                          </div>
                          <div className="playlist-song-info">
                            <h4>{song.title}</h4>
                            <p>{song.artist}</p>
                          </div>
                          <div className="playlist-song-actions">
                            <button 
                              className="like-btn" 
                              onClick={() => toggleLike(song)}
                            >
                              {likedSongs.some(s => s.id === song.id) ? <HeartFillIcon /> : <HeartIcon />}
                            </button>
                            {renderStarRating(song)}
                            {currentPlaylist.id !== 'liked' && (
                              <button 
                                className="remove-btn" 
                                onClick={() => removeFromPlaylist(song.id)}
                              >
                                <TrashIcon />
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Home page sections (shown when no search or playlist is active) */}
              {!searchResults.length && !currentPlaylist && !currentGenre && (
                <div className="home-sections">
                  {/* Featured Songs */}
                  {featuredSongs.length > 0 && renderSongList('Featured Music', featuredSongs)}
                  
                  {/* Popular Songs */}
                  {popularSongs.length > 0 && renderSongList('Popular Music', popularSongs)}
                  
                  {/* New Releases */}
                  {newReleases.length > 0 && renderSongList('New Releases', newReleases)}
                </div>
              )}
            </>
          )}
        </div>
      </div>
      <div className="player-bar">
        <audio ref={audioRef} onEnded={playNext} />
        
        {currentSong && (
          <div className="now-playing">
            <img src={currentSong.cover || '/api/placeholder/50/50'} alt={currentSong.title} />
            <div className="now-playing-info">
              <h4>{currentSong.title}</h4>
              <p>{currentSong.artist}</p>
            </div>
          </div>
        )}
        
        <div className="player-controls">
          <button className="control-btn" onClick={playPrevious}>
            <SkipBackIcon />
          </button>
          <button className="play-btn" onClick={togglePlay}>
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </button>
          <button className="control-btn" onClick={playNext}>
            <SkipForwardIcon />
          </button>
        </div>
        
        <div className="volume-control">
          <button className="mute-btn" onClick={toggleMute}>
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
      </div>
      <style>{`
      
      /* Add CSS styling */
.music-app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  background-color: #f5f5f5;
}

.app-header {
  padding: 20px;
  background-color: #fff;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.app-header h1 {
  margin: 0;
  font-size: 24px;
  color: #333;
}

.search-bar {
  display: flex;
  width: 50%;
}

.search-bar input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
  font-size: 14px;
}

.search-btn {
  padding: 8px 12px;
  background-color: #1db954;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
}

.main-content {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.sidebar {
  width: 250px;
  background-color: #fff;
  border-right: 1px solid #e0e0e0;
  padding: 20px;
  overflow-y: auto;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.add-btn {
  background: none;
  border: none;
  color: #1db954;
  cursor: pointer;
}

.new-playlist-form {
  margin: 10px 0;
  display: flex;
}

.new-playlist-form input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
}

.new-playlist-form button {
  padding: 8px 12px;
  background-color: #1db954;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
}

.playlist-list {
  list-style: none;
  padding: 0;
  margin-top: 10px;
}

.playlist-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  cursor: pointer;
  border-radius: 4px;
}

.playlist-list li.active {
  background-color: #f0f0f0;
  font-weight: bold;
}

.playlist-list li span {
  flex: 1;
}

.delete-btn {
  background: none;
  border: none;
  color: #888;
  cursor: pointer;
}

.delete-btn:hover {
  color: #e74c3c;
}

.liked-songs {
  margin-top: 20px;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 4px;
  cursor: pointer;
}

.liked-songs h3 {
  margin: 0;
  font-size: 16px;
}

.liked-songs span {
  font-size: 12px;
  color: #888;
}

.genres-section {
  margin-top: 30px;
}

.genre-list {
  list-style: none;
  padding: 0;
}

.genre-list li {
  padding: 8px 0;
  cursor: pointer;
  border-radius: 4px;
}

.genre-list li.active {
  font-weight: bold;
  color: #1db954;
}

.content-area {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}

.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 18px;
  color: #888;
}

.song-section {
  margin-bottom: 30px;
}

.song-section h2 {
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}

.song-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.song-card {
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.song-card:hover {
  transform: translateY(-5px);
}

.song-cover {
  position: relative;
  width: 100%;
  padding-top: 100%; /* 1:1 Aspect Ratio */
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.2s;
}

.song-cover:hover .play-overlay {
  opacity: 1;
}

.song-info {
  padding: 15px;
}

.song-info h3 {
  margin: 0 0 5px;
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.song-info p {
  margin: 0;
  font-size: 14px;
  color: #888;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.song-actions {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.like-btn, .rating-btn, .add-to-playlist-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
}

.like-btn {
  color: #e74c3c;
}

.rating-btn {
  color: #f39c12;
}

.add-to-playlist-btn {
  color: #3498db;
  margin-left: auto;
}

.star-rating {
  display: flex;
}

.current-playlist {
  margin-bottom: 30px;
}

.playlist-songs {
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.playlist-song {
  display: flex;
  align-items: center;
  padding: 10px 15px;
  border-bottom: 1px solid #eee;
}

.playlist-song.playing {
  background-color: #f0f0f0;
}

.playlist-song:last-child {
  border-bottom: none;
}

.song-play button {
  background: none;
  border: none;
  cursor: pointer;
  color: #888;
}

.playlist-song.playing .song-play button {
  color: #1db954;
}

.playlist-song-info {
  flex: 1;
  margin-left: 15px;
}

.playlist-song-info h4 {
  margin: 0;
  font-size: 16px;
}

.playlist-song-info p {
  margin: 5px 0 0;
  font-size: 14px;
  color: #888;
}

.playlist-song-actions {
  display: flex;
  align-items: center;
}

.remove-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: #888;
  margin-left: 10px;
}

.remove-btn:hover {
  color: #e74c3c;
}

.player-bar {
  display: flex;
  align-items: center;
  background-color: #333;
  color: white;
  padding: 15px 20px;
}

.now-playing {
  display: flex;
  align-items: center;
  width: 250px;
}

.now-playing img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 4px;
}

.now-playing-info {
  margin-left: 10px;
  overflow: hidden;
}

.now-playing-info h4 {
  margin: 0;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.now-playing-info p {
  margin: 5px 0 0;
  font-size: 12px;
  color: #aaa;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.player-controls {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.control-btn, .play-btn {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  margin: 0 10px;
}

.play-btn {
  background-color: #1db954;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.volume-control {
  display: flex;
  align-items: center;
  width: 150px;
}

.mute-btn {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  margin-right: 10px;
}

.volume-slider {
  width: 100%;
  cursor: pointer;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .main-content {
    flex-direction: column;
  }
  
  .sidebar {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #e0e0e0;
  }
  
  .player-bar {
    flex-direction: column;
    padding: 10px;
  }
  
  .now-playing {
    width: 100%;
    margin-bottom: 10px;
  }
  
  .player-controls {
    margin: 10px 0;
  }
  
  .volume-control {
    width: 100%;
  }
}

/* Animation for the loading state */
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading::after {
  content: "";
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-left-color: #1db954;
  border-radius: 50%;
  margin-left: 10px;
  animation: spin 1s linear infinite;
}
      
      `}</style>
    </div>
  );
};

export default Music;

