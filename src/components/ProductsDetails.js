import styled from "styled-components";
import { popularProducts } from "../data";
import React, { Component }  from 'react';
import Announcement from "./Announcement";
import Navbar from "./Navbar";
import ProductDetails from "./ProductDetails";


const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const ProductsDetails = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <ProductDetails item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default ProductsDetails;
