import React, { useEffect } from "react";
import { Box , Button} from "@material-ui/core";
import ProductsGrid from "../../components/ProductsGrid/ProductsGrid.controller";
import { fetchProducts } from "../../actions/products.actions";
import { useDispatch } from "react-redux";
import { downloadPDF } from "../../actions/pdf.actions";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  
  return (
    <Box>
      <ProductsGrid />
    </Box>
  );
};

export default Home;
