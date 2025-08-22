
import React from 'react';

function App() {
  return (
    <>
      <header>
        <h1>Welcome to Our Herbal Ayurvedic Store</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/hair-oils">Hair Oils</a></li>
            <li><a href="/skin-care">Skin Care</a></li>
            <li><a href="/forum">Forum</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </nav>
        <div className="header-actions">
          <input type="search" id="search-bar" placeholder="Search products..." />
          <button id="cart-btn">🛒</button>
        </div>
      </header>

      <main>
        <section id="featured-products">
          <h2>Featured Products</h2>
          <div className="product-list">
            <div className="product-card" data-product-id="product1">
              <img src={process.env.PUBLIC_URL + '/images/hair_oil_1.jpeg'} alt="Herbal Hair Oil 1" />
              <h3>Herbal Hair Oil (Growth)</h3>
              <p>Price: $15.99</p>
              <button className="buy-now-btn" data-product-id="product1">View Details</button>
            </div>
            <div className="product-card" data-product-id="product2">
              <img src={process.env.PUBLIC_URL + '/images/skin_cream_1.jpeg'} alt="Ayurvedic Skin Cream 1" />
              <h3>Ayurvedic Skin Cream (Radiance)</h3>
              <p>Price: $22.50</p>
              <button className="buy-now-btn" data-product-id="product2">View Details</button>
            </div>
          </div>
        </section>
      </main>

      <section id="additional-products">
        <h2>More Products</h2>
        <div className="product-list">
          <div className="product-card" data-product-id="product3">
            <img src={process.env.PUBLIC_URL + '/images/hair_oil_1.jpeg'} alt="Herbal Hair Oil 2" />
            <h3>Herbal Hair Oil (Shine)</h3>
            <p>Price: $18.00</p>
            <button className="buy-now-btn" data-product-id="product3">View Details</button>
          </div>
          <div className="product-card" data-product-id="product4">
            <img src={process.env.PUBLIC_URL + '/images/skin_cream_1.jpeg'} alt="Ayurvedic Skin Cream 2" />
            <h3>Ayurvedic Skin Cream (Moisture)</h3>
            <p>Price: $25.00</p>
            <button className="buy-now-btn" data-product-id="product4">View Details</button>
          </div>
        </div>
      </section>

      <section id="app-download-section">
        <div className="app-content-left">
          <h2>Download Amrutam Ayurveda<br />App Now</h2>
          <p>
            The Amrutam Ayurveda App is your one-stop app<br />
            for all things Ayurveda! Apart from mimicking the<br />
            website, the app has added benefits
          </p>
          <div className="feature-boxes">
            <div className="feature-box">
              <img src={process.env.PUBLIC_URL + '/images/app-section/icon-prescription.png'} alt="Access To Prescriptions icon" />
              <span>Access To Prescriptions</span>
            </div>
            <div className="feature-box">
              <img src={process.env.PUBLIC_URL + '/images/app-section/icon-health.png'} alt="Track Health Efficiently icon" />
              <span>Track Health Efficiently</span>
            </div>
            <div className="feature-box">
              <img src={process.env.PUBLIC_URL + '/images/app-section/icon-chat.png'} alt="Direct Chat With Doctors icon" />
              <span>Direct Chat With<br />Doctors</span>
            </div>
            <div className="feature-box">
              <img src={process.env.PUBLIC_URL + '/images/app-section/icon-reminder.png'} alt="In-App Reminders icon" />
              <span>In-App Reminders<br />For Consultations</span>
            </div>
          </div>
          <div className="app-buttons">
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              <img src={process.env.PUBLIC_URL + '/images/app-section/google-play-badge.png'} alt="Get it on Google Play" />
            </a>
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
              <img src={process.env.PUBLIC_URL + '/images/app-section/app-store-badge.png'} alt="Download on the App Store" />
            </a>
          </div>
        </div>
        <div className="app-content-right">
          <div className="phone-mockup">
            <img src={process.env.PUBLIC_URL + '/images/app-section/phone-mockup.png'} alt="Phone App Mockup" />
            <div className="engagement-time">
              <span>Engagement Time</span>
              <strong>6m 33s</strong>
              <img src={process.env.PUBLIC_URL + '/images/app-section/engagement-graph.png'} alt="Engagement graph" />
            </div>
            <div className="downloads-card">
              <img src={process.env.PUBLIC_URL + '/images/app-section/user-avatars.png'} alt="User avatars" />
              <span>10K+<br />Downloads</span>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-container">
          <div className="footer-section contact-info">
            <h3>Get in touch</h3>
            <p>support@amrutam.global</p>
            <p>
              Amrutam Pharmaceuticals Pvt Ltd.,<br />
              chitragupt ganj, Nai Sadak, Lashkar,<br />
              Gwalior - 474001
            </p>
            <p>+91 9713171999</p>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={process.env.PUBLIC_URL + '/images/social/facebook.png'} alt="Facebook" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={process.env.PUBLIC_URL + '/images/social/instagram.png'} alt="Instagram" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <img src={process.env.PUBLIC_URL + '/images/social/youtube.png'} alt="YouTube" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={process.env.PUBLIC_URL + '/images/social/twitter.png'} alt="Twitter" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src={process.env.PUBLIC_URL + '/images/social/linkedin.png'} alt="LinkedIn" />
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
                <img src={process.env.PUBLIC_URL + '/images/social/pinterest.png'} alt="Pinterest" />
              </a>
            </div>
          </div>
          <div className="footer-section information">
            <h3>Information</h3>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/terms">Terms and Conditions</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/privacy-mobile">Privacy Policy for Mobile Apps</a></li>
              <li><a href="/shipping">Shipping, return and cancellation Policy</a></li>
              <li><a href="/international">International Delivery</a></li>
              <li><a href="/business">For Businesses, Hotels, and Resorts</a></li>
            </ul>
          </div>
          <div className="footer-section newsletter">
            <h3>Subscribe to our Newsletter and join<br />Amrutam Family today!</h3>
            <div className="newsletter-form">
              <input type="email" placeholder="Your Email Address" />
              <button type="button">Subscribe</button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;