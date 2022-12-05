import { Routes, Route } from "react-router-dom";

import React from "react";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Header from "../Components/header/Header";
import NaviHeader from "../Components/NaviHeader/NaviHeader";
import Footer from "../Components/footer/Footer";

const RoutesApp = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
};

export default RoutesApp;
