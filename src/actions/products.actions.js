import { SET_PRODUCTS, FETCH_PRODUCTS } from "../types/products.types";
//import productsService from "../services/products.service";

export const fetchProducts = () => {
  //Done for REDUX_THUNK
  /* return async function (dispatch) {
    const products = await productsService.getAllProducts();
    dispatch(setProducts(products));
  }; */

  //Done for REDUX_SAGA
  return { type: FETCH_PRODUCTS };
};



export const setProducts = (products = null) => {
  if (products) {
    console.log("in products action");
    return {
      type: SET_PRODUCTS,
      payload: products,
    };
  }
};
