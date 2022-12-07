import React from "react";
import { ContainerNaviHeader } from "./stylesNavHeader.module";
import { NavLink } from "react-router-dom";
const NaviHeader = () => {
  return (
    <ContainerNaviHeader>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">Sobre</NavLink>
        </li>
        <li>
          <NavLink to="/cadastro">Cadastre-se</NavLink>
        </li>
        <li>
          <NavLink to="/login">Logar</NavLink>
        </li>
      </ul>
    </ContainerNaviHeader>
  );
};

export default NaviHeader;
