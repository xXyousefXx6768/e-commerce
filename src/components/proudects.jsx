import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { CartProvider, useCart } from "react-use-cart";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faShoppingCart, faHeart, faDesktop, faGem, faShirt, faPersonDress } from '@fortawesome/free-solid-svg-icons';
import { motion, useInView } from 'framer-motion'; // Import useInView from framer-motion
import StarRating from './Starrating';
import ProductLayout from './ProductLayout';
import Odometer from './Odometer';
import './styles/proudects.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const iconMapping = {
  'electronics': faDesktop,
  'jewelery': faGem,
  "men's clothing": faShirt,
  "women's clothing": faPersonDress,
};

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [wishlist, setWishlist] = useState(JSON.parse(localStorage.getItem('wishlist')) || []);
  const targetDate = '2025-02-22T23:59:59';
  const { addItem } = useCart();
 let sales 
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => setProducts(res.data));

    getCategories();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => calculateTimeLeft(targetDate), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const getCategories = () => {
    axios.get('https://fakestoreapi.com/products/categories')
      .then(res => setCategories(res.data))
      .catch(error => console.error('Error fetching categories:', error));
  };

  const addToWishlist = (product) => {
    setWishlist((prevWishlist) => {
      const isAlreadyInWishlist = prevWishlist.some(item => item.id === product.id);
      return isAlreadyInWishlist ? prevWishlist : [...prevWishlist, product];
    });
  };

  const calculateTimeLeft = (targetDate) => {
    const now = new Date();
    const difference = new Date(targetDate) - now;

    if (difference <= 0) {
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    } else {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);
      setTimeLeft({ days, hours, minutes, seconds });
    }
  };

  return (
    <motion.section
      className="d-flex flex-column mt-5"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 2 }}
    >
      <h4 className="d-flex main-title text-danger">Today's</h4>
      <div className="container-info d-flex ms-5 flex-wrap align-items-end">
        <div className="d-flex container-name">
          <h3 className="d-flex">Flash Sales</h3>
        </div>
        <div className="container-timer d-flex align-items-center ms-4 flex-wrap">
          {/* <p><span>{timeLeft.days}</span> days</p><span>:</span> */}
          {/* <p><span>{timeLeft.hours}</span> hours</p><span>:</span> */}
          {/* <p><span>{timeLeft.minutes}</span> minutes</p><span>:</span> */}
          {/* <p><span>{timeLeft.seconds}</span> seconds</p> */}
           <p> <span> <Odometer value={`${timeLeft.days}`}/> </span> days </p> <span>:</span>
           <p> <span> <Odometer value={`${timeLeft.hours}`}/> </span> hours </p> <span>:</span>
           <p> <span> <Odometer value={`${timeLeft.minutes}`}/> </span> minutes </p> <span>:</span>
           <p> <span> <Odometer value={`${timeLeft.seconds}`}/> </span> seconds </p> 

        </div>
      </div>

      < motion.div
     
       
      className="products-container">
        {products.slice(0, 4).map((product,index)=> (
          <ProductLayout product={product} index={index} sales={sales=true} />
          // the products
      //     <motion.div
      //       key={product.id}
      //       className="product-card"
      //       whileHover={{ scale: 1.09 }}
           
      // initial="hidden"
      // whileInView="visible"
      // viewport={{once:true }}
      // transition={{ duration: 0.2, delay: index * 0.2,type: "tween" }} // Delay based on index
      // variants={{
      //   visible: { opacity: 1, y: 0 },
      //   hidden: { opacity: 0, y: 190 },
      // }}
      //     >
      //       <div   className="product-img-container d-flex justify-content-center">
      //         <div className='d-flex justify-content-center '  style={{ width: '90%', height: '90%' }}  >
      //         <img src={product.image} alt={product.title} style={{ width: '50%'  }} />
      //         </div>
      //         <div className="icons d-flex flex-column">
      //           <Link to={`/product/${product.id}`} state={{ product }}>
      //             <FontAwesomeIcon icon={faEye} />
      //           </Link>
      //           <FontAwesomeIcon icon={faHeart} onClick={() => addToWishlist(product)} />
      //         </div>
      //         <div className="discount-label">30% OFF</div>
      //         <motion.div
      //           className="add-to-cart d-flex justify-content-center"
      //           initial={{ opacity: 0 }}
      //           whileHover={{ opacity: 1 }}
      //           onClick={() => addItem(product)}
      //         >
      //           Add to Cart
      //           <FontAwesomeIcon className="ms-3 mt-1" icon={faShoppingCart} />
      //         </motion.div>
      //       </div>
      //       <div className="product-details">
      //         <h3 className="product-title">
      //           {product.title.length > 20 ? `${product.title.slice(0, 20)}...` : product.title}
      //         </h3>
      //         <p className="product-price text-danger">
      //           ${product.price} <span style={{ textDecoration: 'line-through', color: 'black' }}>{(product.price + 150).toFixed(2)}</span>
      //         </p>
      //         <StarRating rating={product.rating.rate} />
      //       </div>
      //     </motion.div>
        ))}
      </motion.div>
      {/* the products */}
      <div className="categories mt-4">
        <h4 className="d-flex main-title text-danger">Categories</h4>
        <div className="d-flex container-name ms-5">
          <h3 className="d-flex">Browse By Category</h3>
        </div>
        <div className="d-flex flex-wrap justify-content-center">
          
            {categories.map((category, index) => (
               <Link to={`/Categories/${category}`} style={{color:'brown'}} state={{ category }}>
              <motion.div
                key={index}
                className="category-layout d-flex flex-column align-items-center m-5 p-3"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
              >
                <FontAwesomeIcon icon={iconMapping[category] || faShoppingCart} size="2x" />
                <div className='mt-2 d-flex justify-content-center ' style={{width:'140px'}} >
                <p className="mt-2 c-title" >{category}</p>
                </div>
              </motion.div>
              </Link>
            ))}
          
        </div>
        {/* the products */}
        <div className="products-container">
          {products.slice(0, 12).map((product,index) => (

     <ProductLayout product={product} index={index} sales={sales=false} /> 
            // <motion.div
            //   key={product.id}
            //   className="product-card"
            //   whileHover={{ scale: 1.05 }}
            // >
            //   <div className="product-img-container d-flex justify-content-center"   >
            //   <div className='d-flex justify-content-center '  style={{ width: '90%', height: '90%' }}  >
            //     <img src={product.image} alt={product.title}  style={{ width: '50%'  }} />
            //     </div>
            //     <div className="icons d-flex flex-column">
            //       <Link to={`/product/${product.id}`} state={{ product }}>
            //         <FontAwesomeIcon icon={faEye} />
            //       </Link>
            //       <FontAwesomeIcon icon={faHeart} onClick={() => addToWishlist(product)} />
            //     </div>
            //     <div className="discount-label">30% OFF</div>
            //     <motion.div
            //       className="add-to-cart d-flex justify-content-center"
            //       initial={{ opacity: 0 }}
            //       whileHover={{ opacity: 1 }}
            //       onClick={() => addItem(product)}
            //     >
            //       Add to Cart
            //       <FontAwesomeIcon className="ms-3 mt-1" icon={faShoppingCart} />
            //     </motion.div>
            //   </div>
            //   <div className="product-details">
            //     <h3 className="product-title">
            //       {product.title.length > 20 ? `${product.title.slice(0, 20)}...` : product.title}
            //     </h3>
            //     <p className="product-price text-danger">
            //       ${product.price} <span style={{ textDecoration: 'line-through', color: 'black' }}>{(product.price + 150).toFixed(2)}</span>
            //     </p>
            //     <StarRating rating={product.rating.rate} />
            //   </div>
            // </motion.div>
          ))}
          {/* the products */}
        </div>
      </div>
    </motion.section>
  );
};

export default Products;
