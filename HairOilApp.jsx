import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HairOilProducts from './components/HairOilProducts';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import './styles/App.css';

// Sample hair oil data
const hairOilData = [
  {
    id: 1,
    name: "Neelibringadi Hair Oil",
    description: "Traditional Ayurvedic hair oil for hair growth and scalp health",
    price: 15.99,
    originalPrice: 19.99,
    image: "images/neelibringadi_oil.webp",
    category: "hair-growth",
    rating: 4.5,
    reviews: 128,
    inStock: true,
    features: [
      "Promotes hair growth",
      "Strengthens hair roots",
      "Reduces hair fall",
      "Natural ingredients"
    ],
    ingredients: [
      "Neeli (Indigofera tinctoria)",
      "Bringadi (Eclipta alba)",
      "Coconut oil",
      "Sesame oil"
    ],
    usage: "Apply 2-3 times a week on scalp and hair. Leave for 2-3 hours or overnight for best results."
  },
  {
    id: 2,
    name: "Bhringraj Hair Oil",
    description: "Ayurvedic hair oil for premature graying and hair strength",
    price: 18.50,
    originalPrice: 22.00,
    image: "images/hair_oil_1.jpeg",
    category: "hair-strength",
    rating: 4.3,
    reviews: 95,
    inStock: true,
    features: [
      "Prevents premature graying",
      "Strengthens hair follicles",
      "Improves hair texture",
      "Anti-dandruff properties"
    ],
    ingredients: [
      "Bhringraj (Eclipta prostrata)",
      "Amla (Emblica officinalis)",
      "Coconut oil",
      "Almond oil"
    ],
    usage: "Massage gently on scalp and hair. Use 3-4 times a week for optimal results."
  },
  {
    id: 3,
    name: "Amla Hair Oil",
    description: "Vitamin C rich hair oil for shine and natural color retention",
    price: 12.75,
    originalPrice: 15.00,
    image: "images/hair_oil_1.jpeg",
    category: "hair-shine",
    rating: 4.7,
    reviews: 156,
    inStock: false,
    features: [
      "Rich in Vitamin C",
      "Natural hair color retention",
      "Adds shine and luster",
      "Prevents split ends"
    ],
    ingredients: [
      "Amla (Emblica officinalis)",
      "Coconut oil",
      "Sesame oil",
      "Vitamin E"
    ],
    usage: "Apply on hair and scalp. Leave for 1-2 hours before washing. Use 2-3 times a week."
  },
  {
    id: 4,
    name: "Coconut Hair Oil",
    description: "Pure coconut oil for deep conditioning and hair nourishment",
    price: 9.99,
    originalPrice: 12.50,
    image: "images/hair_oil_1.jpeg",
    category: "conditioning",
    rating: 4.2,
    reviews: 89,
    inStock: true,
    features: [
      "Deep conditioning",
      "Hair nourishment",
      "Scalp moisturizing",
      "Natural shine"
    ],
    ingredients: [
      "Pure coconut oil",
      "Natural extracts",
      "Vitamin E",
      "Essential oils"
    ],
    usage: "Apply generously on hair and scalp. Leave overnight for deep conditioning."
  }
];

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Add to cart functionality
  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Remove from cart
  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  // Update quantity
  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  // Calculate cart total
  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  // Filter products based on search and category
  const filteredProducts = hairOilData.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Router>
      <div className="App">
        <Header 
          cartCount={cart.length}
          onCartClick={() => setIsCartOpen(true)}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
        
        <main className="main-content">
          <Routes>
            <Route 
              path="/" 
              element={
                <HairOilProducts 
                  products={filteredProducts}
                  onAddToCart={addToCart}
                  selectedCategory={selectedCategory}
                  onCategoryChange={setSelectedCategory}
                />
              } 
            />
            <Route 
              path="/product/:id" 
              element={
                <ProductDetail 
                  products={hairOilData}
                  onAddToCart={addToCart}
                />
              } 
            />
          </Routes>
        </main>

        <Cart 
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cart={cart}
          onRemove={removeFromCart}
          onUpdateQuantity={updateQuantity}
          total={cartTotal}
        />

        <Footer />
      </div>
    </Router>
  );
}

export default App;

