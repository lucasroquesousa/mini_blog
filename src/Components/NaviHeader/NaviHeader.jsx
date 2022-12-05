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
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </ContainerNaviHeader>
  );
};

export default NaviHeader;
