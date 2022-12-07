import React from "react";
// container css
import { ContainerCadastro } from "./stylesCadastro.module";

// react
import { useState, useEffect } from "react";

const Cadastro = () => {
  // display com o nome do usuário
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    // usuario
    const user = {
      displayName,
      email,
      password,
    };
    if (email !== confirmEmail) {
      setError("O Email precisa ser igual");
    }

    if (password !== confirmPassword) {
      setError("As senhas precisam ser iguais ");
      return;
    }

    console.log(user);
  };

  return (
    <ContainerCadastro>
      <h1>Cadastre-se para postar </h1>
      <p>Crie seu usuário e compartilhe suas histórias</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome: </span>
          <input
            type="text"
            name="displayName"
            required
            placeholder="Digite seu nome:"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </label>
        <label>
          <span>Email: </span>
          <input
            type="email"
            name="email"
            required
            placeholder="Digite seu email:"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Confirmar Email: </span>
          <input
            type="email"
            name="confirmEmail"
            required
            placeholder="Confirme seu email:"
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Senha: </span>
          <input
            type="password"
            name="password"
            required
            placeholder="Digite sua senha:"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          <span>Confirmar Senha: </span>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="Confirme sua senha:"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <button className="btn-cadastrar">Cadastrar</button>
        {error && <p className="error">{error}</p>}
      </form>
    </ContainerCadastro>
  );
};

export default Cadastro;
