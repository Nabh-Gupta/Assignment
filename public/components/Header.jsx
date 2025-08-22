import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = ({ cartCount, onCartClick, searchTerm, onSearchChange }) => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <h1>Ayurvedic Hair Care</h1>
          </Link>
        </div>
        
        <nav className="nav">
          <ul className="nav-list">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/" className="nav-link active">Hair Oils</Link></li>
            <li><Link to="/skin-care" className="nav-link">Skin Care</Link></li>
            <li><Link to="/forum" className="nav-link">Forum</Link></li>
            <li><Link to="/about" className="nav-link">About Us</Link></li>
            <li><Link to="/contact" className="nav-link">Contact</Link></li>
          </ul>
        </nav>

        <div className="header-actions">
          <div className="search-container">
            <input
              type="search"
              placeholder="Search hair oils..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="search-input"
            />
            <button className="search-btn">🔍</button>
          </div>
          
          <button 
            className="cart-btn"
            onClick={onCartClick}
            aria-label="Shopping cart"
          >
            🛒
            {cartCount > 0 && (
              <span className="cart-count">{cartCount}</span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

