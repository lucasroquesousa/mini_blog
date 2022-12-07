import styled from "styled-components";

export const ContainerCadastro = styled.main`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;

  h1 {
    font-weight: 600;
    font-size: 25px;
  }

  form {
    border: none;
    display: flex;
    flex-direction: column;
    padding: 16px;
    gap: 16px;
    align-items: center;
    justify-content: center;
    width: 350px;
    border-radius: 8px;
    box-shadow: 1px 2px 2px 3px rgba(128, 128, 128, 0.5018382352941176);
    label {
      width: 100%;
      font-family: "Roboto";
      display: flex;
      flex-direction: column;
      gap: 5px;

      input {
        height: 25px;
        border-radius: 8px;
        border: none;
        background-color: #dfdfdf;
        padding: 5px;
      }
    }
    .btn-cadastrar {
      cursor: pointer;
      width: 100px;
      height: 35px;
      border-radius: 8px;
      box-shadow: 1px 2px 0px 1px rgba(198, 212, 225, 0.6166841736694677);
      border: none;
      background-color: #44749d;
      color: #dfdfdf;
      font-weight: 600;
      transition: 0.5s;
      :hover {
        background-color: blueviolet;
      }
    }
    .error {
      padding: 10px;
      background-color: orange;
      border-radius: 8px;
      box-shadow: 1px 2px 0px 1px rgba(198, 212, 225, 0.6166841736694677);
    }
  }
`;
