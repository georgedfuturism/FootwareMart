import React from "react";
import Announcement from "./components/Announcement";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Products from "./components/Products";
import Slider from "./components/Slider";
import Home from "./Pages/Home/Home";

const Main = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Home />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Main;
