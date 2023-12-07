import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from "./components/back/data/data"
import Header from "./components/front/Header/Header"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Routes from "./components/front/Routes/Routes"
import Signup from './components/front/signup/Signup'
import Product from './components/front/product/Product'
import Cart from "./components/front/cart/Cart"


function App() {
   const {productItems}=data
   const[cartItems,setCartItems]=useState([])
   
   const handleAddProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
  
    if (productExist) {
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems((prevCartItems) => [
        ...prevCartItems,
        { ...product, quantity: 1 },
      ]);
    }
  };
  
  const handleRemoveProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
  
    if (productExist.quantity === 1) {
      setCartItems((prevCartItems) =>
        prevCartItems.filter((item) => item.id !== product.id)
      );
    } else {
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  };
  
  // ...
   const router = createBrowserRouter([
    {
      path: "/",
      element: 
      <>
      <Header cartItems={cartItems}/>
      <Product productItems={productItems} cartItems={cartItems} handleAddProduct={handleAddProduct}  />
      </>
     
    },
    {
      path: "/signup",
      element: 
      <>

      <Header/>
      <Signup/>
      </>
     
    },
    {
      path: "/cart",
      element: 
      <>
      <Header/>
      <Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct}/>
      </>
    },
   
  ]);

  return (
    <>
    
     <RouterProvider router={router} />
    </>
  )
}

export default App
