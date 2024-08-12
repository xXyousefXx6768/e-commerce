import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLocation ,Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import StarRating from './Starrating';
import './styles/Detail.css';

const ProductDetail = ({ products, addToWishlist }) => {
    const location = useLocation();
   
    const product = location.state?.product;
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState('M');
  

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <section className="product-detail">
      <div className="product-detail-container d-flex flex-wrap">
        <div style={{width:'40%'}} className="product-image img-fluid d-flex justify-content-center ">
          <img src={product.image}  alt={product.title} />
        </div>

        <div className="product-info">
          <h1>{product.title}</h1>
          <StarRating rating={product.rating.rate} />
          <p className="price">${product.price}</p>
          <p>{product.description}</p>

          <div className="options">

            <div className="sizes">
              <h4>Size:</h4>
              <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </div>

            <div className="quantity-selector">
              <h4>Quantity:</h4>
              <input type="number" min="1" max="10" defaultValue="1" />
            </div>

            <div className="buttons">
             
              <button className="add-to-wishlist" onClick={() => addToWishlist(product)}>
                Add to Wishlist <FontAwesomeIcon icon={faHeart} />
              </button>
              <button className="btn " style={{backgroundColor:'black',
                color:'white'
              }} onClick={() => addItem(product)}>
                Add to Cart 
              </button>
              <Link to={'/checkout'}>
              <button className="btn " style={{backgroundColor:'black',
                color:'white'
              }} >
               Buy now 
              </button>
              </Link>
            </div>
          </div>

          <div className="delivery-info">
            <p><strong>Free Delivery:</strong> Enter your postal code for Delivery Availability</p>
            <p><strong>Return Delivery:</strong> Free 30 Day Delivery Returns. Details</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
