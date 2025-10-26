import React, { useState, useRef,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLocation ,Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from 'react-use-cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import StarRating from './Starrating';
import { useWishlist } from './contexts/WishlistContext';
import './styles/Detail.css';

const ProductDetail = ({ products, }) => {
    const location = useLocation();
    const product = location.state?.product;
    

    const { wishlist, addToWishlist } = useWishlist();
    const isProductInWishlist=wishlist.some(item => item.id === product.id);
   const productEle=useRef(null)
   const { addItem, updateItemQuantity,inCart } = useCart();
   const [qty,SetQty]=useState(0)
   const [selectedSize, setSelectedSize] = useState('M');
   const Sizes= ['XS','S','M','L','XL']
  
   useEffect(() => {
    
    if (productEle.current) {
      productEle.current.scrollIntoView({behavior: "smooth"})
    }
    
   }, []);

  if (!product) {
    return <p>Product not found</p>;
  }

   

  return (
    <motion.section 
    ref={productEle} 
    initial={{opacity:0,y:50}}
    animate={{opacity:1,y:0}}
    transition={{ duration: 2 }}
    className="product-detail"
    >
      <div className="product-detail-container d-flex flex-row ">
        <motion.div
        style={{width:'54%', }}
        className="product-image img-fluid d-flex justify-content-center align-items-center ">
          <img src={product.image} className='main-img object-fit-contain'  style={{width:'60%', height:'60%'}}  alt={product.title} />
        </motion.div>

        <div className="product-info">
          <motion.h1>{product.title}</motion.h1>
          <StarRating rating={product.rating.rate} />
          < motion.p className="price">${product.price}</motion.p>
          <p className='description'>{product.description}</p>
           
          <div className="bayment-options">

            <div className="sizes d-flex align-items-center ">
              <h4 className='size'>Size:</h4>
               {Sizes.map((size)=>(
                <div className='m-2 border d-flex justify-content-center size align-items-center rounded ' style={{height:'38px',width:'38px',marginBottom:'0 ', cursor:'pointer'}}> 
                  <p className=' size'> {size} </p>
                </div>
               )

               )}
            </div>

           

            <div className="buttons" style={{marginTop:'50px'}}>
             {
               inCart(product.id)&&(
                <div className='qty-box d-flex ' style={{width:'240px',height:'56px'}}>
                <div className='plus border border-dark d-flex justify-content-center align-items-center' style={{width:'30%',height:'100%'}}>
              <FontAwesomeIcon icon={faMinus} />
               </div>

               <div className='d-flex border border-dark justify-content-center align-items-center' style={{width:'90px'}} >
                <p className='size'>
                {product.quantity}
                </p>
                
               </div>

               <div className='plus border border-dark d-flex justify-content-center align-items-center' style={{width:'30%',
                height:'100%',
                 backgroundColor:'#DB4444'}}>
               <FontAwesomeIcon icon={faPlus} style={{color:'white'}} />
               </div>

               </div>
               )
             }
                 {/* <div className='qty-box d-flex ' style={{width:'240px',height:'56px'}}>
                  <div className='plus border border-dark d-flex justify-content-center align-items-center' style={{width:'30%',height:'100%'}}>
                <FontAwesomeIcon icon={faMinus} />
                 </div>

                 <div className='d-flex border border-dark justify-content-center align-items-center' style={{width:'90px'}} >
                  <p className='size'>
                  {qty}
                  </p>
                  
                 </div>

                 <div className='plus border border-dark d-flex justify-content-center align-items-center' style={{width:'30%',
                  height:'100%',
                   backgroundColor:'#DB4444'}}>
                 <FontAwesomeIcon icon={faPlus} style={{color:'white'}} />
                 </div>

                 </div> */}
                          
                 <Link to={'/checkout'}>
              <button className="btn " style={{backgroundColor:'#DB4444',
                color:'white',
                width:'210px'
                ,height:'56px'
              }} >
               Buy now 
              </button>
              </Link>


              <button className="add-to-wishlist" onClick={() => addToWishlist(product)}>
                <FontAwesomeIcon    style={{ color: isProductInWishlist ? 'red' : 'grey', 
                  cursor:'pointer'}} icon={faHeart} />
              </button>
             
            </div>
          </div>

          <div className="delivery-info">
            <div>
            <p><strong>Free Delivery:</strong> Enter your postal code for Delivery Availability</p>
            </div>
            <p><strong>Return Delivery:</strong> Free 30 Day Delivery Returns. Details</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProductDetail;
