import React, { useState, useEffect } from "react";
import "./LoginMid.css";

import { useLoginStore } from "../../stores/loginFormStore";

import "./LoginLow.css";
import "./LoginMid.css";
import "./LoginUp.css";
import { login } from "../../hooks/useLogin";
import { useHistory } from "react-router-dom";

interface ContainerProps {}

const LoginMid: React.FC<ContainerProps> = () => {
  const history = useHistory();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  useLoginStore.subscribe((state) => {
    setUsername(state.username);
    setPassword(state.password);
    setIsError(state.error);
    setErrorMsg(state.errorMsg);
  });

  return (
    <div className="LoginMid">
      {/* TITULO E SUBTITULO */}
      <div className="div1-login-mid">
        <p className="p1-login-mid">Login</p>
        <p className="p2-login-mid">Adicione seu email e senha.</p>
      </div>
      {/* ----------------------------------------------------------------- */}
      {/* INPUTS */}
      <div className="div2-login-mid padding1">
        <p className="p3-login-mid">Nome de usuário</p>
        <input className="inpt1-login-mid" type="text" />
      </div>
      <div className="div2-login-mid padding2">
        <p className="p3-login-mid">Senha</p>
        <input className="inpt1-login-mid" type="password" />
      </div>
      {/* ----------------------------------------------------------------- */}
      {/* BOTÕES */}
      <div className="div3-login-mid">
        <a href="/sign">
          <button className="btn1-login-mid" type="button">
            Entrar
          </button>
        </a>
        <p className="p4-login-mid">
          Não possui uma conta?{" "}
          <a href="/sign" className="a1-login-mid">
            Cadastre-se
          </a>
        </p>
        {/* ----------------------------------------------------------------- */}
      </div>
    </div>
  );
};

export default LoginMid;
