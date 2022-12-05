import { ContainerFooter } from "./stylesFooter.module";
import logoFooter from "../../Assets/img/logo.png";
import React from "react";

const Footer = () => {
  return (
    <ContainerFooter>
      <h3>Escreva sobre o que você tem interesse!</h3>
      <p>
        <img src={logoFooter} className="logo-footer" />
        &copy; 2022
      </p>
    </ContainerFooter>
  );
};

export default Footer;
