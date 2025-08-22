import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import '../styles/HairOilProducts.css';

const HairOilProducts = ({ products, onAddToCart, selectedCategory, onCategoryChange }) => {
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState('grid');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'hair-growth', name: 'Hair Growth' },
    { id: 'hair-strength', name: 'Hair Strength' },
    { id: 'hair-shine', name: 'Hair Shine' },
    { id: 'conditioning', name: 'Conditioning' }
  ];

  const sortOptions = [
    { value: 'name', label: 'Name A-Z' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'reviews', label: 'Most Reviewed' }
  ];

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'reviews':
        return b.reviews - a.reviews;
      default:
        return 0;
    }
  });

  return (
    <div className="hair-oil-products">
      <div className="products-hero">
        <h1>Ayurvedic Hair Oils</h1>
        <p>Discover our collection of traditional Ayurvedic hair oils for healthy, beautiful hair</p>
      </div>

      <div className="products-controls">
        <div className="filters">
          <div className="category-filter">
            <label htmlFor="category-select">Category:</label>
            <select
              id="category-select"
              value={selectedCategory}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="category-select"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div className="sort-filter">
            <label htmlFor="sort-select">Sort by:</label>
            <select
              id="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="view-controls">
          <button
            className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
            onClick={() => setViewMode('grid')}
            aria-label="Grid view"
          >
            ⊞
          </button>
          <button
            className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
            onClick={() => setViewMode('list')}
            aria-label="List view"
          >
            ☰
          </button>
        </div>
      </div>

      <div className="products-info">
        <p>Showing {sortedProducts.length} of {products.length} products</p>
      </div>

      {sortedProducts.length === 0 ? (
        <div className="no-products">
          <div className="no-products-content">
            <h3>No products found</h3>
            <p>Try adjusting your search or filter criteria</p>
            <button 
              className="clear-filters-btn"
              onClick={() => {
                onCategoryChange('all');
                setSortBy('name');
              }}
            >
              Clear Filters
            </button>
          </div>
        </div>
      ) : (
        <div className={`products-grid ${viewMode === 'list' ? 'list-view' : ''}`}>
          {sortedProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              viewMode={viewMode}
            />
          ))}
        </div>
      )}

      <div className="products-features">
        <div className="feature">
          <div className="feature-icon">🌿</div>
          <h3>100% Natural</h3>
          <p>All our hair oils are made with pure Ayurvedic ingredients</p>
        </div>
        <div className="feature">
          <div className="feature-icon">🚚</div>
          <h3>Free Shipping</h3>
          <p>Free shipping on orders over $50</p>
        </div>
        <div className="feature">
          <div className="feature-icon">🔄</div>
          <h3>Easy Returns</h3>
          <p>30-day money-back guarantee</p>
        </div>
        <div className="feature">
          <div className="feature-icon">💬</div>
          <h3>Expert Support</h3>
          <p>Get advice from Ayurvedic experts</p>
        </div>
      </div>
    </div>
  );
};

export default HairOilProducts;

