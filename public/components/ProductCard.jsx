import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductCard.css';

const ProductCard = ({ product, onAddToCart, viewMode }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    setIsAddingToCart(true);
    onAddToCart(product);
    
    // Reset loading state after animation
    setTimeout(() => {
      setIsAddingToCart(false);
    }, 1000);
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star filled">★</span>);
    }
    
    if (hasHalfStar) {
      stars.push(<span key="half" className="star half">★</span>);
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star">☆</span>);
    }

    return stars;
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div 
      className={`product-card ${viewMode === 'list' ? 'list-view' : ''} ${!product.inStock ? 'out-of-stock' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.name}
          className="product-image"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300x300?text=Hair+Oil';
          }}
        />
        
        {!product.inStock && (
          <div className="out-of-stock-badge">Out of Stock</div>
        )}
        
        {discountPercentage > 0 && (
          <div className="discount-badge">-{discountPercentage}%</div>
        )}

        <div className={`product-overlay ${isHovered ? 'visible' : ''}`}>
          <Link to={`/product/${product.id}`} className="view-details-btn">
            View Details
          </Link>
        </div>
      </div>

      <div className="product-info">
        <div className="product-header">
          <h3 className="product-name">
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </h3>
          <div className="product-rating">
            <div className="stars">
              {renderStars(product.rating)}
            </div>
            <span className="rating-text">({product.reviews} reviews)</span>
          </div>
        </div>

        <p className="product-description">{product.description}</p>

        <div className="product-price">
          <span className="current-price">${product.price.toFixed(2)}</span>
          {product.originalPrice && product.originalPrice > product.price && (
            <span className="original-price">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>

        <div className="product-features">
          {product.features.slice(0, 2).map((feature, index) => (
            <span key={index} className="feature-tag">{feature}</span>
          ))}
        </div>

        <div className="product-actions">
          <button
            className={`add-to-cart-btn ${isAddingToCart ? 'adding' : ''} ${!product.inStock ? 'disabled' : ''}`}
            onClick={handleAddToCart}
            disabled={!product.inStock || isAddingToCart}
          >
            {isAddingToCart ? (
              <>
                <span className="loading-spinner"></span>
                Adding...
              </>
            ) : !product.inStock ? (
              'Out of Stock'
            ) : (
              'Add to Cart'
            )}
          </button>
          
          <Link to={`/product/${product.id}`} className="view-details-link">
            Learn More →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

