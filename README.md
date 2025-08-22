# Ayurvedic Hair Oil React Application

A modern, responsive React.js application for showcasing and selling Ayurvedic hair oil products. Built with React 18, React Router, and modern CSS.

## 🚀 Features

### Core Features
- **Product Catalog**: Browse through various Ayurvedic hair oils
- **Product Details**: Detailed product pages with specifications, ingredients, and usage instructions
- **Shopping Cart**: Add products to cart with quantity management
- **Search & Filter**: Search products and filter by categories
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices

### Advanced Features
- **Real-time Search**: Instant search results as you type
- **Category Filtering**: Filter products by hair growth, strength, shine, and conditioning
- **Sorting Options**: Sort by name, price, rating, and reviews
- **View Modes**: Switch between grid and list view
- **Product Ratings**: Star ratings with review counts
- **Stock Management**: Out-of-stock indicators and notifications
- **Discount Display**: Show original prices and discount percentages

### User Experience
- **Smooth Animations**: Hover effects and transitions
- **Loading States**: Visual feedback during cart operations
- **Accessibility**: ARIA labels and keyboard navigation
- **Error Handling**: Graceful fallbacks for missing images
- **Breadcrumb Navigation**: Easy navigation through product hierarchy

## 🛠️ Technology Stack

- **Frontend**: React 18 with Hooks
- **Routing**: React Router DOM v6
- **Styling**: CSS3 with Flexbox and Grid
- **State Management**: React useState and useEffect
- **Build Tool**: Create React App
- **Package Manager**: npm

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ayurvedic-hair-oil-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation and search
│   ├── Footer.jsx          # Footer with links and newsletter
│   ├── HairOilProducts.jsx # Main products listing page
│   ├── ProductCard.jsx     # Individual product card component
│   ├── ProductDetail.jsx   # Detailed product page
│   └── Cart.jsx           # Shopping cart sidebar
├── styles/
│   ├── App.css            # Global styles and utilities
│   ├── Header.css         # Header component styles
│   ├── ProductCard.css    # Product card styles
│   ├── HairOilProducts.css # Products page styles
│   ├── ProductDetail.css  # Product detail page styles
│   ├── Cart.css          # Cart component styles
│   └── Footer.css        # Footer component styles
├── HairOilApp.jsx        # Main App component
└── index.js             # Application entry point
```

## 🎯 Key Components

### HairOilApp.jsx
- Main application component
- Manages global state (cart, search, filters)
- Handles routing and component composition

### HairOilProducts.jsx
- Products listing page
- Implements search, filtering, and sorting
- Supports grid and list view modes

### ProductCard.jsx
- Reusable product card component
- Handles hover effects and interactions
- Displays ratings, prices, and features

### ProductDetail.jsx
- Detailed product information
- Tabbed interface for description, ingredients, usage, and reviews
- Quantity selector and add to cart functionality

### Cart.jsx
- Slide-out shopping cart
- Quantity management and item removal
- Price calculation and checkout flow

## 🎨 Styling Features

- **Modern Design**: Clean, professional appearance
- **Responsive Layout**: Mobile-first approach
- **Smooth Transitions**: CSS animations and hover effects
- **Color Scheme**: Green theme representing natural products
- **Typography**: Readable fonts with proper hierarchy

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: Full-featured experience with hover effects
- **Tablet**: Touch-friendly interface with adapted layouts
- **Mobile**: Streamlined navigation and touch interactions

## 🔧 Customization

### Adding New Products
Edit the `hairOilData` array in `HairOilApp.jsx`:

```javascript
{
  id: 5,
  name: "New Hair Oil",
  description: "Product description",
  price: 19.99,
  originalPrice: 24.99,
  image: "path/to/image.jpg",
  category: "hair-growth",
  rating: 4.5,
  reviews: 50,
  inStock: true,
  features: ["Feature 1", "Feature 2"],
  ingredients: ["Ingredient 1", "Ingredient 2"],
  usage: "Usage instructions"
}
```

### Styling Customization
- Modify CSS variables in `App.css` for color schemes
- Update component-specific styles in their respective CSS files
- Add new animations and transitions as needed

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`

## 🧪 Testing

```bash
npm test
```

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For support and questions, please contact:
- Email: support@amrutam.global
- Phone: +91 9713171999

## 🔮 Future Enhancements

- [ ] User authentication and profiles
- [ ] Wishlist functionality
- [ ] Product reviews and ratings system
- [ ] Payment gateway integration
- [ ] Order tracking
- [ ] Multi-language support
- [ ] PWA capabilities
- [ ] Advanced filtering options
- [ ] Product comparison feature
- [ ] Email notifications

---

**Built with ❤️ for Ayurvedic wellness**

# Assignment
# Assignment
# Assignment
