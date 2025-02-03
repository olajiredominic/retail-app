# Retail Cart App - README

## 📌 Overview

The **Retail Cart App** is an Angular-based shopping cart application designed to provide a seamless online shopping experience. Users can browse products, add them to their cart, and proceed to checkout. The app is built with modern web technologies, ensuring efficiency, scalability, and a great user experience.

## 🚀 Features

- **Product Listing**: Display a list of products with images, descriptions, and prices.
- **Cart Management**: Add, remove, and update products in the shopping cart.
- **Responsive Design**: Works on desktop and mobile devices.
- **State Management**: Uses NgRx (or Angular Services) for efficient state handling.

## 🛠️ Technologies Used

- **Angular 18**: Frontend framework
- **RxJS**: Reactive programming
- **Tailwind CSS**: Styling
- **NgRx (Optional)**: State management
- **Angular Router**: Navigation
- **Firebase / Node.js (Optional)**: Backend services

## 📦 Installation & Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/olajiredominic/retail-app.git
   cd retail-app/retail-cart
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Run the development server:**
   ```sh
   ng serve
   ```
   The app will be available at `http://localhost:4200/`.

4. **Build for production:**
   ```sh
   ng build --configuration=production
   ```

## 📂 Project Structure

```
src/
│-- app/
│   │-- components/      # UI Components
│   │-- features/        # Main Pages (Home, Cart)
│   │-- services/        # API & Business Logic
|   │-- models/          # API interfaCE
│   │-- layout/          # Layout structure for all pages
│   ├── app.routes.ts    # Main app routes
│   ├── app.component.ts # Root Component
│-- assets/              # Static Files
│-- environments/        # Environment Configurations
```


## 🤝 Test Cart

1. Hpver the product item to see add to cart button.
2. use shopping cart icon to navbar to toggle cart dropdown.
3. Use SAVE10 to apply 10% discount.

