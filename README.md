# GadgetHaven E-Commerce Platform

GadgetHaven is a responsive e-commerce platform that allows users to explore and purchase gadgets such as smartphones, laptops, and accessories. The platform includes key features like product filtering, a shopping cart, a wishlist system, and statistical data visualization. It uses modern React features and state management techniques to deliver an engaging shopping experience.

## List of React Fundamental Concepts Used

1. **React Router**: Used for routing between different pages of the website (Home, Product Details, Dashboard, etc.).
2. **React State (`useState`)**: Manages local state within components like product lists, cart, and wishlist.
3. **Effect Hook (`useEffect`)**: Used for handling side effects, such as saving cart data to LocalStorage and updating the cart when items are added or removed.
4. **React Context API**: Used for global state management of the cart and wishlist to ensure data consistency across pages without prop drilling.

5. **Event Handling**: Handling user interactions like adding products to the cart, filtering products by category, and submitting orders.
6. **Dynamic Routing**: Each product has a unique page with its details and options to add to the cart or wishlist.

## 5 Features of GadgetHaven

1. **Product Categories Sidebar**: Filters gadgets by category (e.g., Phones, Computers, Smart Watches) to make it easier for users to find products they are looking for.
2. **Product Details Page**: Provides users with detailed information about a product, including price, description, specifications, and ratings.
3. **Shopping Cart & Wishlist**: Users can add products to the cart or wishlist. The cart's contents can be managed, and users can sort items by price.
4. **Statistics Page**: Visualizes product data (prices and ratings) with a composed chart to help users analyze product trends.
5. **Purchase Confirmation Modal**: After a user completes a purchase, they receive a congratulatory message in a modal, and the cart resets without refreshing the page.

## Data Management i have used

1. **Context API**:  
   The Context API is used to manage the global state of the cart and wishlist. This allows components across the application to access and update the cart or wishlist data without the need to pass props manually. It simplifies state management for shared data like the cart and ensures consistency across pages.

2. **LocalStorage**:  
   LocalStorage is used to persist the cart and wishlist data across page reloads. Whenever a user adds or removes items from the cart or wishlist, the updated data is stored in LocalStorage. This ensures that the cart contents are retained even after the user refreshes the page or revisits the site later.

## Links

- **GitHub Repository**: [GadgetHaven Repository](https://github.com/programming-hero-web-course-4/b10a8-gadget-heaven-Md-Huzaifa-Islam)
- **Live Website**: [GadgetHaven Live](https://deft-crisp-b285bd.netlify.app/)
