import React from "react";
import { Link } from "react-router-dom";

// imagens
import logo from "../../Assets/img/logo.png";
import NaviHeader from "../NaviHeader/NaviHeader";

// styled
import { ContainerHeader } from "./stylesHeader.module";

const Header = () => {
  return (
    <ContainerHeader>
      <Link to="/">
        <img className="img-Logo" src={logo} />
      </Link>
      <NaviHeader />
    </ContainerHeader>
  );
};

export default Header;
