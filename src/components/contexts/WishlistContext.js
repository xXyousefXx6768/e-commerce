import { createContext, useContext, useState, useEffect } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState(
      JSON.parse(localStorage.getItem("wishlist")) || []
    );
   
    const addToWishlist = (product) => {
        setWishlist((prevWishlist) => {
          const isAlreadyInWishlist = prevWishlist.some(item => item.id === product.id);
    
          if (isAlreadyInWishlist) {
            // Remove item from wishlist
            return prevWishlist.filter(item => item.id !== product.id);
          } else {
            // Add item to wishlist
            return [...prevWishlist, product];
          }
        });
      };
    useEffect(() => {
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }, [wishlist]);
  
    return (
      <WishlistContext.Provider value={{ wishlist, addToWishlist }}>
        {children}
      </WishlistContext.Provider>
    );
  };



  export const useWishlist = () => useContext(WishlistContext);

