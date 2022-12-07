import styled from "styled-components";

export const ContainerNaviHeader = styled.nav`
  width: 340px;

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

    :hover {
      color: blueviolet;
    }
    a {
      padding: 5px;
      border-radius: 5px 0px 5px 0px;
      color: #44749d;
      text-decoration: none;
      font-weight: bold;
      font-family: "Roboto";
      transition: 0.3s;
      :hover {
        background-color: black;
        color: white;
        border: 1px solid black;
      }
    }
  }
`;
