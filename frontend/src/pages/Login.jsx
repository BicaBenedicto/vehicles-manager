import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../sass/Login.scss";
import Context from "../services";

export default function Login() {
  const { changeIsLogged, isLogged } = useContext(Context);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onLoginButton = (e) => {
    e.preventDefault();
    changeIsLogged(true);
  };

  useEffect(() => {
    if (isLogged) navigate("/vehicles");
  }, [isLogged]);

  return (
    <form className="login" onSubmit={onLoginButton}>
      <label htmlFor="user-login-input">
        Usuário:
        <input
          type="text"
          value={username}
          id="user-login-input"
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label htmlFor="user-password-input">
        Senha:
        <input
          type="password"
          value={password}
          id="user-password-input"
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Entrar</button>
    </form>
  );
}
