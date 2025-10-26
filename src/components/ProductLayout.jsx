import React from 'react'
import { useEffect,useState } from 'react';
import './styles/proudects.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CartProvider, useCart } from "react-use-cart";
import { faEye, faShoppingCart, faHeart, faCheck ,faDesktop, faGem, faShirt, faPersonDress } from '@fortawesome/free-solid-svg-icons';
import { motion, useInView } from 'framer-motion';
import { useWishlist } from './contexts/WishlistContext';
import StarRating from './Starrating';

function ProductLayout({product, index,sales}) {
  const { wishlist, addToWishlist } = useWishlist();
  const isProductInWishlist = wishlist.some(item => item.id === product.id);
    const { addItem,inCart, getItem,removeItem } = useCart();
    const isInCart = inCart(product.id);
    // const [wishlist, setWishlist] = useState(JSON.parse(localStorage.getItem('wishlist')) || []);

    // const addToWishlist = (product) => {
    //     setWishlist((prevWishlist) => {
    //       const isAlreadyInWishlist = prevWishlist.some(item => item.id === product.id);
    //       return isAlreadyInWishlist ? prevWishlist : [...prevWishlist, product];
    //     });
    //   };

    //   const isProductInWishlist = wishlist.some(item => item.id === product.id);

    // useEffect(() => {
    //     localStorage.setItem('wishlist', JSON.stringify(wishlist));
    //   }, [wishlist]);



  return (
   
          <motion.div
            key={product.id}
            className="product-card"
            whileHover={{ scale: 1.09 }}
           
      initial="hidden"
      whileInView="visible"
      viewport={{once:true }}
      transition={{ duration: 0.2, delay: index * 0.2,type: "tween" }} // Delay based on index
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
          >
            <div   className="product-img-container d-flex justify-content-center">
              <div className='d-flex justify-content-center '  style={{ width: '90%', height: '90%' }}  >
              <img src={product.image} alt={product.title} style={{ width: '50%'  }} />
              </div>
              <div className="icons d-flex flex-column">
                <Link to={`/product/${product.id}`} state={{ product , isProductInWishlist }}>
                  <FontAwesomeIcon icon={faEye} style={{color:'grey'}} />
                </Link>
                <FontAwesomeIcon icon={faHeart}   style={{ color: isProductInWishlist ? 'red' : 'grey', 
                  cursor:'pointer'
                 }} // Conditional color based on wishlist state
            onClick={() => addToWishlist(product)} />
              </div>
              {
                sales&&(
                    <div className="discount-label">30% OFF</div>
                )
              }
              {/* <div className="discount-label">30% OFF</div> */}
              { isInCart?(
                  <motion.div
                className="added-to-cart d-flex justify-content-center"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                onClick={() => removeItem(product.id)}
              >
                Added to Cart
                <FontAwesomeIcon className="ms-3 mt-1" icon={faCheck} />
              </motion.div>
                ) : (
                  
                
                  
                    <motion.div
                className="add-to-cart d-flex justify-content-center"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                onClick={() => addItem(product)}
              >
                Add to Cart
                <FontAwesomeIcon className="ms-3 mt-1" icon={faShoppingCart} />
              </motion.div>
                  )}
              {/* <motion.div
                className="add-to-cart d-flex justify-content-center"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                onClick={() => addItem(product)}
              >
                Add to Cart
                <FontAwesomeIcon className="ms-3 mt-1" icon={faShoppingCart} />
              </motion.div> */}
            </div>
            <div className="product-details">
              <h3 className="product-title">
                {product.title.length > 20 ? `${product.title.slice(0, 20)}...` : product.title}
              </h3>
              {
  sales ? (
    <p className="product-price text-danger">
      ${product.price}{" "}
      <span style={{ textDecoration: "line-through", color: "black" }}>
        {(product.price + 150).toFixed(2)}
      </span>
    </p>
  ) : (
    <span style={{ color: "black" }}>
      {(product.price + 150).toFixed(2)}
    </span>
  )
}
              {/* <p className="product-price text-danger">
                ${product.price} <span style={{ textDecoration: 'line-through', color: 'black' }}>{(product.price + 150).toFixed(2)}</span>
              </p> */}
              <StarRating rating={product.rating.rate} />
            </div>
          </motion.div>



  )
}

export default ProductLayout