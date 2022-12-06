import React from "react";
// container css
import { ContainerCadastro } from "./stylesCadastro.module";

// react
import { useState, useEffect } from "react";

const Cadastro = () => {
  return (
    <ContainerCadastro>
      <h1>Cadastre-se para postar </h1>
      <form>
        <label>
          <span>Nome: </span>
          <input
            type="text"
            name="displayName"
            required
            placeholder="Digite seu nome:"
          />
        </label>
        <label>
          <span>Email: </span>
          <input
            type="email"
            name="email"
            required
            placeholder="Digite seu email:"
          />
        </label>
        <label>
          <span>Confirmar Email: </span>
          <input
            type="email"
            name="confirmEmail"
            required
            placeholder="Confirme seu email:"
          />
        </label>
        <label>
          <span>Senha: </span>
          <input
            type="password"
            name="password"
            required
            placeholder="Digite sua senha:"
          />
        </label>
        <label>
          <span>Confirmar Senha: </span>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="Confirme sua senha:"
          />
        </label>
        <button className="btn-cadastrar">Cadastrar</button>
      </form>
    </ContainerCadastro>
  );
};

export default Cadastro;
