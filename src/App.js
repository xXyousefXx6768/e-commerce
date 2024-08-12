import React from 'react';
import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from 'react-use-cart';
import { AnimatePresence } from 'framer-motion';
import Main from './components/Main';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
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
import transitoin from './components/transitoin';

function App() {
    const [wishlist, setWishlist] = useState(JSON.parse(localStorage.getItem('wishlist')) || []);
    const location = useLocation();

    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }, [wishlist]);

    const addToWishlist = (product) => {
        setWishlist((prevWishlist) => {
            const isAlreadyInWishlist = prevWishlist.some(item => item.id === product.id);
            return isAlreadyInWishlist ? prevWishlist : [...prevWishlist, product];
        });
    };

    return (
        <CartProvider>
            <NavBar />
            <main style={{ minHeight: '100vh' }}>
                <AnimatePresence mode="wait">
                   
                        <Routes location={location} key={location.pathname}>
                            <Route path="/signup" element={<SignUp />} />
                            <Route path="/login" element={<LogIn />} />
                            <Route index element={<ProtectedRoute><Main /></ProtectedRoute>} />
                            <Route path="*" element={<NotFound />} />
                            <Route path="/about" element={<ProtectedRoute><AboutUs /></ProtectedRoute>} />
                            <Route path="/myaccount" element={<ProtectedRoute><MyAccount /></ProtectedRoute>} />
                            <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
                            <Route path="/product/:id" element={<ProtectedRoute><ProductDetail /></ProtectedRoute>} />
                            <Route path="/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
                            <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
                            <Route path="/wishlist" element={<ProtectedRoute><WishList /></ProtectedRoute>} />
                            <Route path="/products" element={<ProtectedRoute><Products addToWishlist={addToWishlist} /></ProtectedRoute>} />
                        </Routes>
                   
                </AnimatePresence>
            </main>
            <Footer />
        </CartProvider>
    );
}

export default App;
