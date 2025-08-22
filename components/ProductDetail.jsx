import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/ProductDetail.css';

const ProductDetail = ({ products, onAddToCart }) => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const product = products.find(p => p.id === parseInt(id));

  useEffect(() => {
    if (product) {
      document.title = `${product.name} - Ayurvedic Hair Care`;
    }
  }, [product]);

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product Not Found</h2>
        <p>The product you're looking for doesn't exist.</p>
        <Link to="/" className="back-to-products">Back to Products</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    setIsAddingToCart(true);
    const productWithQuantity = { ...product, quantity };
    onAddToCart(productWithQuantity);
    
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
    <div className="product-detail">
      <div className="breadcrumb">
        <Link to="/">Home</Link> / 
        <Link to="/">Hair Oils</Link> / 
        <span>{product.name}</span>
      </div>

      <div className="product-detail-container">
        <div className="product-images">
          <div className="main-image">
            <img 
              src={product.image} 
              alt={product.name}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/500x500?text=Hair+Oil';
              }}
            />
            {discountPercentage > 0 && (
              <div className="discount-badge">-{discountPercentage}%</div>
            )}
          </div>
        </div>

        <div className="product-info-detail">
          <div className="product-header-detail">
            <h1>{product.name}</h1>
            <div className="product-rating-detail">
              <div className="stars">
                {renderStars(product.rating)}
              </div>
              <span className="rating-text">({product.reviews} reviews)</span>
            </div>
          </div>

          <div className="product-price-detail">
            <span className="current-price">${product.price.toFixed(2)}</span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="original-price">${product.originalPrice.toFixed(2)}</span>
            )}
            {discountPercentage > 0 && (
              <span className="discount-text">Save ${(product.originalPrice - product.price).toFixed(2)}</span>
            )}
          </div>

          <p className="product-description-detail">{product.description}</p>

          <div className="product-features-detail">
            <h3>Key Benefits:</h3>
            <ul>
              {product.features.map((feature, index) => (
                <li key={index}>✓ {feature}</li>
              ))}
            </ul>
          </div>

          <div className="product-actions-detail">
            <div className="quantity-selector">
              <label htmlFor="quantity">Quantity:</label>
              <div className="quantity-controls">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <input
                  type="number"
                  id="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  min="1"
                />
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
            </div>

            <div className="action-buttons">
              <button
                className={`add-to-cart-btn-detail ${isAddingToCart ? 'adding' : ''} ${!product.inStock ? 'disabled' : ''}`}
                onClick={handleAddToCart}
                disabled={!product.inStock || isAddingToCart}
              >
                {isAddingToCart ? (
                  <>
                    <span className="loading-spinner"></span>
                    Adding to Cart...
                  </>
                ) : !product.inStock ? (
                  'Out of Stock'
                ) : (
                  'Add to Cart'
                )}
              </button>
              
              <button className="buy-now-btn">Buy Now</button>
            </div>

            {!product.inStock && (
              <div className="stock-notification">
                <p>This product is currently out of stock. We'll notify you when it's available.</p>
                <button className="notify-btn">Notify When Available</button>
              </div>
            )}
          </div>

          <div className="product-meta">
            <div className="meta-item">
              <span className="meta-label">Category:</span>
              <span className="meta-value">{product.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">SKU:</span>
              <span className="meta-value">HAIR-{product.id.toString().padStart(3, '0')}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="product-tabs">
        <div className="tab-buttons">
          <button 
            className={`tab-btn ${activeTab === 'description' ? 'active' : ''}`}
            onClick={() => setActiveTab('description')}
          >
            Description
          </button>
          <button 
            className={`tab-btn ${activeTab === 'ingredients' ? 'active' : ''}`}
            onClick={() => setActiveTab('ingredients')}
          >
            Ingredients
          </button>
          <button 
            className={`tab-btn ${activeTab === 'usage' ? 'active' : ''}`}
            onClick={() => setActiveTab('usage')}
          >
            How to Use
          </button>
          <button 
            className={`tab-btn ${activeTab === 'reviews' ? 'active' : ''}`}
            onClick={() => setActiveTab('reviews')}
          >
            Reviews ({product.reviews})
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'description' && (
            <div className="description-content">
              <h3>Product Description</h3>
              <p>{product.description}</p>
              <div className="benefits-list">
                <h4>Benefits:</h4>
                <ul>
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'ingredients' && (
            <div className="ingredients-content">
              <h3>Natural Ingredients</h3>
              <div className="ingredients-grid">
                {product.ingredients.map((ingredient, index) => (
                  <div key={index} className="ingredient-item">
                    <span className="ingredient-name">{ingredient}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'usage' && (
            <div className="usage-content">
              <h3>How to Use</h3>
              <div className="usage-steps">
                <p>{product.usage}</p>
                <div className="usage-tips">
                  <h4>Tips for Best Results:</h4>
                  <ul>
                    <li>Apply on clean, dry hair</li>
                    <li>Massage gently into scalp</li>
                    <li>Leave for recommended time</li>
                    <li>Wash with mild shampoo</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="reviews-content">
              <h3>Customer Reviews</h3>
              <div className="reviews-summary">
                <div className="overall-rating">
                  <div className="rating-number">{product.rating}</div>
                  <div className="stars">{renderStars(product.rating)}</div>
                  <div className="total-reviews">{product.reviews} reviews</div>
                </div>
              </div>
              <div className="reviews-placeholder">
                <p>Customer reviews will be displayed here.</p>
                <button className="write-review-btn">Write a Review</button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="related-products">
        <h3>You Might Also Like</h3>
        <div className="related-products-grid">
          {products
            .filter(p => p.id !== product.id && p.category === product.category)
            .slice(0, 3)
            .map(relatedProduct => (
              <div key={relatedProduct.id} className="related-product-card">
                <img src={relatedProduct.image} alt={relatedProduct.name} />
                <h4>{relatedProduct.name}</h4>
                <p>${relatedProduct.price.toFixed(2)}</p>
                <Link to={`/product/${relatedProduct.id}`} className="view-related-btn">
                  View Product
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

