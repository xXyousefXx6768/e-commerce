import React from 'react';
import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { CartProvider } from 'react-use-cart';
import { AnimatePresence } from 'framer-motion';
import Main from './components/Main';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Categories from './components/Categories';
import { WishlistProvider } from './components/contexts/WishlistContext';
import ProductDetail from './components/ProductDetail';
import Checkout from './components/Checkout';
import AboutUs from './components/AboutUs';
import MyAccount from './components/MyAccount';
import Contact from './components/Contact';
import Cart from './components/CartPage';
import WishList from './components/WishList';
import Products from './components/proudects';
import { SignUp, LogIn } from './components/Auth';
import ProtectedRoute from './components/ProtectedRoute';
import Curve from './components/Curve';

import Transition from './components/transitoin';

function App() {
    
    const [wishlist, setWishlist] = useState(JSON.parse(localStorage.getItem('wishlist')) || []);
    const location = useLocation();
    const navigate= useNavigate()
    const[startAnimation, SetstartAnimation]=useState(false)
   

    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }, [wishlist]);

    const addToWishlist = (product) => {
        setWishlist((prevWishlist) => {
            const isAlreadyInWishlist = prevWishlist.some(item => item.id === product.id);
            return isAlreadyInWishlist ? prevWishlist : [...prevWishlist, product];
        });
    };

    const GreenLight = (path) => {
        // Start the animation
        SetstartAnimation(true);
      
       setTimeout(() => {
        navigate(path);
       }, 1100);
        
        
        setTimeout(() => {
            // Navigate to the new page
            SetstartAnimation(false); // Reset the animation state after navigation
          }, 1500); // Match this delay to the animation duration
         
      };

    return (
        <CartProvider>
          <WishlistProvider>
          <AnimatePresence mode="wait">
            <NavBar navigate={GreenLight} />
            <main style={{ minHeight: '100vh' }}>
              <Routes location={location} key={location.pathname}>
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<LogIn />} />
                <Route index element={<ProtectedRoute><Main /></ProtectedRoute>} />
                <Route path="*" element={<NotFound />} />
                <Route path="/about" element={<ProtectedRoute><AboutUs /></ProtectedRoute>} />
                <Route path="/myaccount" element={<ProtectedRoute><MyAccount /></ProtectedRoute>} />
                <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
                <Route path='/Categories/:name' element={<ProtectedRoute><Categories /></ProtectedRoute>} />
                <Route path="/product/:id" element={<ProtectedRoute><ProductDetail /></ProtectedRoute>} />
                <Route path="/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
                <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
                <Route path="/wishlist" element={<ProtectedRoute><WishList /></ProtectedRoute>} />
                <Route path="/products" element={<ProtectedRoute><Products addToWishlist={addToWishlist} /></ProtectedRoute>} />
              </Routes>
            </main>
            <Footer />
           { startAnimation&& <Curve/>}
          </AnimatePresence>
          </WishlistProvider>
        </CartProvider>
      );
    }
    export default App;