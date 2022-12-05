import styled from "styled-components";

export const ContainerFooter = styled.footer`
  position: absolute;
  width: 100%;
  height: 10%;
  bottom: 0;
  line-height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-top: 0.5px solid rgba(20, 12, 139, 0.34637605042016806);
  border-radius: 10px;
  .logo-footer {
    width: 70px;
  }
  h3 {
    font-family: "Roboto";
    font-weight: 700;
    color: blue;
  }
  p {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
