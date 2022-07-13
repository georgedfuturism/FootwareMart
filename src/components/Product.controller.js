import React from "react";
import Product from "./Product";
import { useDispatch } from "react-redux";
import { addToCart } from "./Cart/Cart.actions"; 

export default function ProductController({ product }) {
  const dispatch = useDispatch();
{console.log("in product controller");}
  const onAddToCart = () => {
    dispatch(addToCart(product));
    console.log("in product controller");
  };

  return <Product product={product} onAddToCart={onAddToCart} />;
}