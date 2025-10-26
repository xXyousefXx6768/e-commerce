import React, { useEffect, useState,useRef } from 'react'
import { useLocation ,Link } from 'react-router-dom';
import axios from 'axios';
import ProductLayout from './ProductLayout';
import './styles/proudects.css';
function Categories() {
const catELE=useRef(null)
useEffect(() => {
    
    getCategoriesItems()

    if(catELE.current){
      catELE.current.scrollIntoView({behavior: "smooth"})
    }
    
}, []);


    const location = useLocation();
    const category = location.state?.category;
    const[categoriesItems,setCategoriesItems]=useState([])
    let sales 
    const getCategoriesItems =() =>{
        axios.get(`https://fakestoreapi.com/products/category/${category}`)
        .then(res => {
          setCategoriesItems(res.data); // Set the data to your state
          console.log(res.data); // Log the data
      })
      .catch(error => console.error("Error fetching category items:", error)); // Handle errors
};
  return (
     <section className='d-flex flex-column' ref={catELE}>
    <div className='d-flex main-title text-danger mt-5 ' > 
 <div className="d-flex  container-name">
          <h3 className="d-flex">{category}</h3>
        </div>

    </div>

    <div  className="products-container" >
    {  categoriesItems.map((product,index)=>(
       <ProductLayout product={product} index={index} sales={sales=false} /> 
    ))

       }
   </div>
    </section>
  )
}

export default Categories