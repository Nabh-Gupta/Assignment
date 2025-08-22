const productsData = {
    "product1": {
        "id": "product1",
        "title": "Herbal Hair Oil (Growth)",
        "price": "$15.99",
        "image": "images/hair_oil_1.jpeg",
        "ingredients": [
            "Neelibringadi oil",
            "Amla",
            "Bhringraj",
            "Brahmi"
        ],
        "howToUse": "Gently massage a small amount into scalp and hair twice a week. Leave on for at least an hour before washing.",
        "description": "A traditional Ayurvedic hair oil formulated to promote hair growth and strengthen roots.",
        "reviews": [
            { "name": "Priya S.", "feedback": "Excellent oil, saw results in weeks!" },
            { "name": "Rahul K.", "feedback": "Helped reduce hair fall significantly." }
        ]
    },
    "product2": {
        "id": "product2",
        "title": "Ayurvedic Skin Cream (Radiance)",
        "price": "$22.50",
        "image": "images/skin_cream_1.jpeg",
        "ingredients": [
            "Saffron",
            "Turmeric",
            "Sandalwood",
            "Aloe Vera"
        ],
        "howToUse": "Apply a thin layer to clean face and neck in the morning and evening. Massage gently until absorbed.",
        "description": "A nourishing Ayurvedic skin cream designed to enhance skin radiance and promote a healthy glow.",
        "reviews": [
            { "name": "Anjali R.", "feedback": "Leaves my skin feeling soft and bright." },
            { "name": "Vikram D.", "feedback": "Love the natural scent and feel." }
        ]
    },
    "product3": {
        "id": "product3",
        "title": "Herbal Hair Oil (Shine)",
        "price": "$18.00",
        "image": "images/hair_oil_1.jpeg",
        "ingredients": [
            "Hibiscus",
            "Rosemary",
            "Coconut Oil"
        ],
        "howToUse": "Warm a small amount and apply to hair from roots to tips. Leave for 30 minutes before shampooing for best results.",
        "description": "Improves hair texture and adds natural shine.",
        "reviews": [
            { "name": "Sneha A.", "feedback": "My hair has never been shinier!" }
        ]
    },
    "product4": {
        "id": "product4",
        "title": "Ayurvedic Skin Cream (Moisture)",
        "price": "$25.00",
        "image": "images/skin_cream_1.jpeg",
        "ingredients": [
            "Shea Butter",
            "Almond Oil",
            "Neem",
            "Glycerin"
        ],
        "howToUse": "Apply generously to dry areas of the body as needed. Ideal for daily use after bathing.",
        "description": "Deeply moisturizes and soothes dry skin, leaving it supple.",
        "reviews": [
            { "name": "Kiran B.", "feedback": "Perfect for my dry skin, feels hydrated all day." }
        ]
    }
};

const ingredientsData = {
    "Neelibringadi oil": {
        "name": "Neelibringadi oil",
        "description": "A potent Ayurvedic herbal oil traditionally used for hair care, known for its cooling properties and ability to promote hair growth and prevent premature graying.",
        "benefits": [
            "Promotes hair growth",
            "Prevents premature graying",
            "Reduces hair fall",
            "Strengthens hair roots",
            "Conditions scalp"
        ],
        "scientificName": "Derived from a blend of herbs including Indigofera tinctoria (Neeli), Eclipta prostrata (Bhringraj), Cardiospermum halicacabum (Indravalli), and Emblica officinalis (Amla), usually processed in coconut or sesame oil.",
        "image": "images/neelibringadi_oil.jpeg" // Placeholder, user will need to provide this image
    }
    // Add more ingredients as needed
};

// Cart functionality
let cart = JSON.parse(localStorage.getItem('shoppingCart')) || {};

function updateCartDisplay() {
    const cartButton = document.getElementById('cart-btn');
    if (!cartButton) return;
    let totalItems = 0;
    for (const productId in cart) {
        totalItems += cart[productId].quantity;
    }
    cartButton.textContent = `🛒 (${totalItems})`;
}

// Call updateCartDisplay on initial load
updateCartDisplay();

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const searchBar = document.getElementById('search-bar');
    const productCards = document.querySelectorAll('.product-card');
    const viewDetailsButtons = document.querySelectorAll('.buy-now-btn');
    const currentPath = window.location.pathname.split('/').pop();

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        } else if (currentPath === '' && link.getAttribute('href') === 'index.html') {
            // Handle the case where the root is loaded, and index.html should be active
            link.classList.add('active');
        }
    });

    // Search functionality
    searchBar.addEventListener('keyup', (event) => {
        const searchTerm = event.target.value.toLowerCase();

        productCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productId = event.currentTarget.dataset.productId;
            if (productId) {
                window.location.href = `product_detail.html?id=${productId}`;
            }
        });
    });

    // Logic for product_detail.html
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (window.location.pathname.includes('product_detail.html') && productId) {
        const product = productsData[productId];

        if (product) {
            const mainImageEl = document.getElementById('product-main-image');
            mainImageEl.src = product.image;
            mainImageEl.alt = product.title;
            document.getElementById('product-title').textContent = product.title;
            document.getElementById('product-price').textContent = `Price: ${product.price}`;
            document.getElementById('product-description').textContent = product.description;

            const ingredientsList = document.getElementById('product-ingredients');
            product.ingredients.forEach(ingredient => {
                const listItem = document.createElement('li');
                if (ingredient === 'Neelibringadi oil') {
                    listItem.innerHTML = `<a href="ingredient_detail.html?name=${encodeURIComponent(ingredient)}">${ingredient}</a>`;
                } else {
                    listItem.textContent = ingredient;
                }
                ingredientsList.appendChild(listItem);
            });

            const howToUseParagraph = document.getElementById('product-how-to-use');
            howToUseParagraph.textContent = product.howToUse;

            // Quantity selector logic for product_detail.html
            const detailQuantityInput = document.getElementById('detail-quantity-input');
            const detailMinusBtn = document.getElementById('detail-minus-btn');
            const detailPlusBtn = document.getElementById('detail-plus-btn');
            const addToCartBtn = document.getElementById('add-to-cart-detail-btn');

            // Set initial quantity from cart if product already there
            if (cart[productId]) {
                detailQuantityInput.value = cart[productId].quantity;
            }

            detailPlusBtn.addEventListener('click', () => {
                detailQuantityInput.value = parseInt(detailQuantityInput.value) + 1;
            });

            detailMinusBtn.addEventListener('click', () => {
                const current = parseInt(detailQuantityInput.value) || 0;
                if (current > 0) {
                    detailQuantityInput.value = current - 1;
                }
            });

            // Ensure quantity is not negative or NaN on direct input change
            detailQuantityInput.addEventListener('input', () => {
                let newQuantity = parseInt(detailQuantityInput.value);
                if (isNaN(newQuantity) || newQuantity < 0) { // Allow 0 to support removal via Add to Cart
                    detailQuantityInput.value = 0;
                }
            });

            addToCartBtn.addEventListener('click', () => {
                const quantity = parseInt(detailQuantityInput.value);
                if (quantity <= 0) {
                    // If quantity is 0 or less, remove item from cart
                    delete cart[productId];
                    alert(`Product removed from cart.`);
                } else {
                    // Otherwise, set the quantity in the cart
                    cart[productId] = { ...product, quantity: quantity };
                    alert(`${quantity} of ${product.title} added to cart!`);
                }
                localStorage.setItem('shoppingCart', JSON.stringify(cart));
                updateCartDisplay();
            });

            const reviewsContainer = document.getElementById('product-reviews');
            if (product.reviews && product.reviews.length > 0) {
                product.reviews.forEach(review => {
                    const reviewDiv = document.createElement('div');
                    reviewDiv.classList.add('review-item');
                    reviewDiv.innerHTML = `<strong>${review.name}:</strong> ${review.feedback}`;
                    reviewsContainer.appendChild(reviewDiv);
                });
            } else {
                reviewsContainer.innerHTML = '<p>No reviews yet. Be the first to leave a feedback!</p>';
            }

            const feedbackForm = document.getElementById('feedback-form');
            feedbackForm.addEventListener('submit', (event) => {
                event.preventDefault();
                const reviewerName = document.getElementById('reviewer-name').value;
                const reviewText = document.getElementById('review-text').value;

                if (reviewerName && reviewText) {
                    const newReviewDiv = document.createElement('div');
                    newReviewDiv.classList.add('review-item');
                    newReviewDiv.innerHTML = `<strong>${reviewerName}:</strong> ${reviewText}`;
                    reviewsContainer.appendChild(newReviewDiv);

                    // Clear the form
                    feedbackForm.reset();
                    alert('Thank you for your feedback!');
                }
            });

        } else {
            document.getElementById('product-detail').innerHTML = '<p>Product not found.</p>';
        }
    }

    // Forum page: tab toggle logic
    const tabButtons = document.querySelectorAll('.forum-tabs .tab-button');
    const forumSections = document.querySelectorAll('.forum-section');
    if (tabButtons.length > 0) {
        tabButtons.forEach((button) => {
            button.addEventListener('click', () => {
                const targetId = button.dataset.tab;
                tabButtons.forEach(b => b.classList.remove('active'));
                button.classList.add('active');
                forumSections.forEach(section => {
                    section.style.display = section.id === targetId ? 'block' : 'none';
                });
            });
        });
    }
    // Logic for ingredient_detail.html
    const ingredientUrlParams = new URLSearchParams(window.location.search);
    const ingredientName = ingredientUrlParams.get('name');

    if (window.location.pathname.includes('ingredient_detail.html') && ingredientName) {
        const decodedIngredientName = decodeURIComponent(ingredientName);
        const ingredient = ingredientsData[decodedIngredientName];

        if (ingredient) {
            document.getElementById('ingredient-name').textContent = ingredient.name;
            document.getElementById('ingredient-description').textContent = ingredient.description;

            const benefitsList = document.getElementById('ingredient-benefits');
            ingredient.benefits.forEach(benefit => {
                const listItem = document.createElement('li');
                listItem.textContent = benefit;
                benefitsList.appendChild(listItem);
            });

            document.getElementById('ingredient-scientific-name').textContent = ingredient.scientificName;

            // Set ingredient image source and alt
            const ingredientImage = document.getElementById('ingredient-image');
            if (ingredientImage) {
                ingredientImage.src = ingredient.image;
                ingredientImage.alt = ingredient.name;
            }
        } else {
            document.getElementById('ingredient-detail').innerHTML = '<p>Ingredient not found.</p>';
        }
    }
});

// Back button functionality
const backButton = document.getElementById('back-button');
if (backButton) {
    backButton.addEventListener('click', () => {
        window.history.back();
    });
}
