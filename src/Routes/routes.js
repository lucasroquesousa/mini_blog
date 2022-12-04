import { Routes, Route, Navigate } from "react-router-dom";

import React from "react";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";

const RoutesApp = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<About />} />
      </Routes>
    </>
  );
};

export default RoutesApp;
