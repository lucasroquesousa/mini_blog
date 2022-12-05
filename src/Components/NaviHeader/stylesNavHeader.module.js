import styled from "styled-components";

export const ContainerNaviHeader = styled.nav`
  width: 200px;

  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
  }
  li {
    color: blue;
    text-decoration: none;
    font-weight: bold;
    font-family: "Roboto";
    transition: 0.5s;
    :hover {
      text-decoration: underline;
      color: blueviolet;
    }
    a {
      color: blue;
      text-decoration: none;
      font-weight: bold;
      font-family: "Roboto";
      transition: 0.5s;
      :hover {
        text-decoration: underline;
        color: blueviolet;
      }
    }
  }
`;
