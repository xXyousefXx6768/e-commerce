import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrashAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import StarRating from './Starrating';



const WishList = () => {
    const [wishlist, setWishlist] = useState(JSON.parse(localStorage.getItem('wishlist')) || []);
  
    useEffect(() => {
      // Save wishlist to localStorage whenever it changes
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }, [wishlist]);
  
    const addToWishlist = (product) => {
      setWishlist((prevWishlist) => {
        const isAlreadyInWishlist = prevWishlist.some(item => item.id === product.id);
        return isAlreadyInWishlist ? prevWishlist : [...prevWishlist, product];
      });
    };
  
    const removeFromWishlist = (productId) => {
      setWishlist((prevWishlist) => prevWishlist.filter(item => item.id !== productId));
    };
  
    return (
      <section className="wishlist-section d-flex flex-column mt-5">
        <h4 className="d-flex main-title text-danger">Wishlist</h4>
  
        {wishlist.length === 0 ? (
          <div className="empty-wishlist d-flex justify-content-center">
            <h1>Your wishlist is empty.</h1>
          </div>
        ) : (
          <div className="wishlist-container d-flex flex-wrap">
            {wishlist.map((product) => (
               <motion.div
               key={product.id}
               className="product-card"
               whileHover={{ scale: 1.05 }}
             >
               <div className="product-img-container d-flex justify-content-center">
                 <img src={product.image} alt={product.title} style={{ width: '40%', height: '40%' }} />
                 <div className="icons d-flex flex-column">
            
                 </div>
                 
                 <motion.div
                   className="add-to-cart d-flex justify-content-center"
                   initial={{ opacity: 0 }}
                   whileHover={{ opacity: 1 }}
                  
                 >
                   Add to Cart
                   <FontAwesomeIcon className="ms-3 mt-1" icon={faShoppingCart} />
                   <FontAwesomeIcon className="ms-3 mt-1" icon={faTrashAlt} />
                 </motion.div>
               </div>
               <div className="product-details">
                 <h3 className="product-title">
                   {product.title.length > 20 ? `${product.title.slice(0, 20)}...` : product.title}
                 </h3>
                 <p className="product-price text-danger">
                   ${product.price} <span style={{ textDecoration: 'line-through', color: 'black' }}>{(product.price + 150).toFixed(2)}</span>
                 </p>
                 <StarRating rating={product.rating.rate} />
               </div>
             </motion.div>
            ))}
          </div>
        )}
      </section>
    );
  };
  
  export default WishList;