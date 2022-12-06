import { Routes, Route } from "react-router-dom";

import React from "react";
import Home from "../Pages/Home/Home";

//Páginas
import About from "../Pages/About/About";
import Header from "../Components/header/Header";
import Cadastro from "../Pages/Cadastro/Cadastro";
import Login from "../Pages/Login/Login";

//Componentes
import Footer from "../Components/footer/Footer";

const RoutesApp = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
};

export default RoutesApp;
