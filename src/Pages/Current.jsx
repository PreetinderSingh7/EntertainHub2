import { useState, useEffect } from 'react';

// Main component
export default function NewsWebsite() {
  const NEWS_API_KEY = 'pub_67817118aef323d6a960ea45166cfcc65a0fb';
  const NEWS_API_ENDPOINT = 'https://newsdata.io/api/1/news';
  
  const [articles, setArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('top');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(0);
  const [nextPage, setNextPage] = useState(null);
  
  const categories = [
    { id: 'top', name: 'Top Stories' },
    { id: 'world', name: 'World' },
    { id: 'politics', name: 'Politics' },
    { id: 'business', name: 'Business' },
    { id: 'technology', name: 'Technology' },
    { id: 'science', name: 'Science' },
    { id: 'health', name: 'Health' },
    { id: 'sports', name: 'Sports' },
    { id: 'entertainment', name: 'Entertainment' }
  ];

  useEffect(() => {
    fetchNews();
  }, [selectedCategory]);

  const fetchNews = async (pageToken = null) => {
    setIsLoading(true);
    setError(null);
    
    try {
      let url = `${NEWS_API_ENDPOINT}?apikey=${NEWS_API_KEY}`;
      
      if (selectedCategory === 'top') {
        url += '&language=en';
      } else {
        url += `&language=en&category=${selectedCategory}`;
      }
      
      if (searchQuery) {
        url += `&q=${encodeURIComponent(searchQuery)}`;
      }
      
      if (pageToken) {
        url += `&page=${pageToken}`;
      }
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error('Failed to fetch news');
      }
      
      const data = await response.json();
      
      if (data.status === 'success') {
        if (pageToken) {
          setArticles(prevArticles => [...prevArticles, ...data.results]);
        } else {
          setArticles(data.results);
          window.scrollTo(0, 0);
        }
        setNextPage(data.nextPage);
      } else {
        throw new Error(data.message || 'Failed to fetch news');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setPage(0);
    setNextPage(null);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchNews();
  };

  const loadMore = () => {
    if (nextPage) {
      fetchNews(nextPage);
      setPage(prevPage => prevPage + 1);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="news-app">
      <header>
        <div className="header-content">
          <h1>Global Current Affairs</h1>
          <p>Your trusted source for latest news and updates</p>
        </div>
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search news..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </header>
      
      <nav className="categories">
        <div className="category-container">
          {categories.map(category => (
            <button
              key={category.id}
              className={selectedCategory === category.id ? 'active' : ''}
              onClick={() => handleCategoryChange(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </nav>
      
      <main>
        <h2>{categories.find(cat => cat.id === selectedCategory)?.name || 'News'}</h2>
        
        {isLoading && page === 0 ? (
          <div className="loading">Loading news...</div>
        ) : error ? (
          <div className="error">Error: {error}</div>
        ) : articles.length === 0 ? (
          <div className="no-articles">No articles found</div>
        ) : (
          <>
            <div className="articles">
              {articles.map((article, index) => (
                <article key={index} className="article-card">
                  {article.image_url ? (
                    <div className="article-image">
                      <img 
                        src={article.image_url} 
                        alt={article.title} 
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/api/placeholder/400/300";
                        }}
                      />
                    </div>
                  ) : (
                    <div className="article-image placeholder">
                      <img src="/api/placeholder/400/300" alt="News placeholder" />
                    </div>
                  )}
                  <div className="article-content">
                    <h3>{article.title}</h3>
                    <div className="article-meta">
                      <span className="article-source">{article.source_id}</span>
                      <span className="article-date">{article.pubDate ? formatDate(article.pubDate) : 'Unknown date'}</span>
                    </div>
                    <p className="article-description">
                      {article.description || article.content?.substring(0, 150) || 'No description available'}
                    </p>
                    {article.link && (
                      <a href={article.link} target="_blank" rel="noopener noreferrer" className="read-more">
                        Read Full Article
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
            
            {isLoading && page > 0 && (
              <div className="loading">Loading more articles...</div>
            )}
            
            {nextPage && !isLoading && (
              <div className="load-more">
                <button onClick={loadMore}>Load More</button>
              </div>
            )}
          </>
        )}
      </main>
      
      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h3>Global Current Affairs</h3>
            <p>Delivering timely and accurate news from around the world.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              {categories.slice(0, 5).map(category => (
                <li key={category.id}>
                  <a href="#" onClick={(e) => {
                    e.preventDefault();
                    handleCategoryChange(category.id);
                  }}>
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-section">
            <h3>Connect With Us</h3>
            <div className="social-links">
              <a href="#" className="social-link">Facebook</a>
              <a href="#" className="social-link">Twitter</a>
              <a href="#" className="social-link">Instagram</a>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Global Current Affairs. All rights reserved.</p>
        </div>
      </footer>

      <style jsx>{`
        /* Reset and Base Styles */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        .news-app {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
          background-color: #f6f8fa;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        
        a {
          text-decoration: none;
          color: #2563eb;
        }
        
        button {
          cursor: pointer;
        }
        
        /* Header Styles */
        header {
          background-color: #1e40af;
          color: white;
          padding: 1.5rem;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        
        .header-content {
          text-align: center;
          margin-bottom: 1.5rem;
        }
        
        header h1 {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
          font-weight: 700;
        }
        
        header p {
          font-size: 1.1rem;
          opacity: 0.9;
        }
        
        .search-form {
          max-width: 600px;
          margin: 0 auto;
          display: flex;
        }
        
        .search-form input {
          flex: 1;
          padding: 0.75rem;
          border: none;
          border-radius: 4px 0 0 4px;
          font-size: 1rem;
        }
        
        .search-form button {
          background-color: #1e3a8a;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 0 4px 4px 0;
          font-weight: 600;
          transition: background-color 0.2s;
        }
        
        .search-form button:hover {
          background-color: #172554;
        }
        
        /* Category Navigation */
        .categories {
          background-color: white;
          padding: 0.75rem;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
          overflow-x: auto;
          position: sticky;
          top: 0;
          z-index: 100;
        }
        
        .category-container {
          display: flex;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .categories button {
          background: none;
          border: none;
          padding: 0.75rem 1.25rem;
          font-size: 1rem;
          color: #4b5563;
          white-space: nowrap;
          border-radius: 4px;
          transition: all 0.2s;
        }
        
        .categories button:hover {
          background-color: #f3f4f6;
          color: #2563eb;
        }
        
        .categories button.active {
          background-color: #dbeafe;
          color: #1e40af;
          font-weight: 600;
        }
        
        /* Main Content */
        main {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem 1rem;
          width: 100%;
          flex: 1;
        }
        
        main h2 {
          font-size: 1.75rem;
          margin-bottom: 1.5rem;
          padding-bottom: 0.75rem;
          border-bottom: 2px solid #e5e7eb;
          color: #1e40af;
        }
        
        .loading, .error, .no-articles {
          text-align: center;
          padding: 2rem;
          font-size: 1.25rem;
          color: #6b7280;
        }
        
        .error {
          color: #dc2626;
        }
        
        /* Articles Grid */
        .articles {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }
        
        .article-card {
          background-color: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          transition: transform 0.2s, box-shadow 0.2s;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        
        .article-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
        }
        
        .article-image {
          height: 200px;
          overflow: hidden;
        }
        
        .article-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s;
        }
        
        .article-card:hover .article-image img {
          transform: scale(1.05);
        }
        
        .article-image.placeholder {
          background-color: #e5e7eb;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .article-content {
          padding: 1.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        
        .article-card h3 {
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
          line-height: 1.4;
        }
        
        .article-meta {
          display: flex;
          justify-content: space-between;
          margin-bottom: 1rem;
          font-size: 0.875rem;
          color: #6b7280;
        }
        
        .article-source {
          font-weight: 600;
          text-transform: uppercase;
        }
        
        .article-description {
          margin-bottom: 1.5rem;
          color: #4b5563;
          flex: 1;
        }
        
        .read-more {
          display: inline-block;
          color: #2563eb;
          font-weight: 600;
          padding: 0.5rem 0;
          border-bottom: 2px solid transparent;
          transition: border-color 0.2s;
          align-self: flex-start;
        }
        
        .read-more:hover {
          border-color: #2563eb;
        }
        
        /* Load More Button */
        .load-more {
          text-align: center;
          margin-top: 2rem;
        }
        
        .load-more button {
          background-color: #2563eb;
          color: white;
          border: none;
          padding: 0.75rem 2rem;
          border-radius: 4px;
          font-size: 1rem;
          font-weight: 600;
          transition: background-color 0.2s;
        }
        
        .load-more button:hover {
          background-color: #1e40af;
        }
        
        /* Footer */
        footer {
          background-color: #1e3a8a;
          color: white;
          padding: 3rem 1.5rem 1.5rem;
          margin-top: 2rem;
        }
        
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        
        .footer-section h3 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .footer-section p {
          opacity: 0.8;
          margin-bottom: 1rem;
        }
        
        .footer-section ul {
          list-style: none;
        }
        
        .footer-section li {
          margin-bottom: 0.5rem;
        }
        
        .footer-section a {
          color: rgba(255, 255, 255, 0.8);
          transition: color 0.2s;
        }
        
        .footer-section a:hover {
          color: white;
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        
        .social-link {
          display: inline-block;
          padding: 0.5rem 1rem;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          transition: background-color 0.2s;
        }
        
        .social-link:hover {
          background-color: rgba(255, 255, 255, 0.2);
        }
        
        .copyright {
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
          font-size: 0.875rem;
          opacity: 0.7;
        }
        
        /* Responsive Styles */
        @media (max-width: 768px) {
          .articles {
            grid-template-columns: 1fr;
          }
          
          header h1 {
            font-size: 2rem;
          }
          
          .footer-content {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}