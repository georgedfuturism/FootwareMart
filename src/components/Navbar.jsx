import { Badge, Button } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React, { useEffect } from "react";
import styled from "styled-components";
import CartController from "./Cart/Cart.controller";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { downloadPDF } from "../actions/pdf.actions";
import { useState } from "react";
import { mobile } from "../responsive";
import '../sagas/pdf.saga'




const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;



 const Navbar = () => {

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(downloadPDF());
  // }, []);

  // const mapDispatchToProps = dispatch => ({
  //   downloadPDF: () => dispatch(downloadPDF()),
  // })

// const [pdfData] = useState("");
// const dispatch = useDispatch();
// const handleClick = (e) => {
//     e.preventDefault();
//     downloadPDF(dispatch, { pdfData });
//   };

// onClick = () => {
//     // do something to compute or go fetch
//     // the url we need from the server
//     const url = downloadPDF();
  
//     // window.location forces the browser to prompt the user if they want to download it
//     window.location = fileURL
//   }

const dispatch = useDispatch();
const dowanloadpdf = () => {
  console.log('in navbar on click dowanload');
  dispatch(downloadPDF());

}
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Shopping Cart</Logo>
        </Center>
        <Right>
          <MenuItem>
          <Link to={`/register`}>
          REGISTER
          </Link></MenuItem>
          <MenuItem>
          <Button onClick={dowanloadpdf} >
          Download PDF
          </Button>
          </MenuItem>
          <MenuItem>
          <Link to={`/login`}>
          SIGN IN
          </Link>
          </MenuItem>

          {/* <Button onClick={ this.onClick }>Download PDF</Button> */}
          {/* <Link to={"/cart"}> */}
          <MenuItem>
            <Badge color="primary">
              <CartController />
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
          {/* </Link> */}
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
