import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      // In a real app, this would send the email to a server
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section contact-info">
          <h3>Get in touch</h3>
          <p>support@amrutam.global</p>
          <p>Amrutam Pharmaceuticals Pvt Ltd.,<br/>chitragupt ganj, Nai Sadak, Lashkar,<br/>Gwalior - 474001</p>
          <p>+91 9713171999</p>
          <div className="social-icons">
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="YouTube">📺</a>
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="LinkedIn">💼</a>
            <a href="#" aria-label="Pinterest">📌</a>
          </div>
        </div>
        
        <div className="footer-section information">
          <h3>Information</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/terms">Terms and Conditions</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/privacy-mobile">Privacy Policy for Mobile Apps</Link></li>
            <li><Link to="/shipping">Shipping, return and cancellation Policy</Link></li>
            <li><Link to="/international">International Delivery</Link></li>
            <li><Link to="/business">For Businesses, Hotels, and Resorts</Link></li>
          </ul>
        </div>
        
        <div className="footer-section newsletter">
          <h3>Subscribe to our Newsletter and join<br/>Amrutam Family today!</h3>
          <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
            <input
              type="email"
              placeholder="Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" disabled={isSubscribed}>
              {isSubscribed ? 'Subscribed!' : 'Subscribe'}
            </button>
          </form>
          {isSubscribed && (
            <p className="subscription-success">Thank you for subscribing!</p>
          )}
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Amrutam Ayurvedic Products. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

