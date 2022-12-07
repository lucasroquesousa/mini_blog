import styled from "styled-components";

/*.color1 { #44749d };
.color2 { #c6d4e1 };
.color3 { #ffffff };
.color4 { #ebe7e0 };
.color5 { #bdb8ad };
*/

export const ContainerHeader = styled.header`
  width: 100%;
  background-color: #c6d4e1;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  border-bottom: 0.5px solid rgba(20, 12, 139, 0.34637605042016806);
  border-radius: 10px;
  padding: 20px 0px 20px 0px;

  img {
    width: 150px;
    margin-bottom: 10px;
    cursor: pointer;
    margin-bottom: 20px;
  }
  a {
  }
`;
