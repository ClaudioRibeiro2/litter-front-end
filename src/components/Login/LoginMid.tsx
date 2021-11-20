import React, { useState, useEffect } from "react";
import "./LoginMid.css";

import { useLoginStore } from "../../stores/loginFormStore";

import "./LoginLow.css";
import "./LoginMid.css";
import "./LoginUp.css";
import { login } from "../../hooks/useLogin";
import { Link, useHistory } from "react-router-dom";

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
      {/* HEADER */}
      <div className="div1-login-mid">
        <p className="p1-login-mid">Login</p>
        <p className="p2-login-mid">Adicione seu email e senha.</p>
      </div>
      {/* INPUT'S */}
      <div className="div2-login-mid paddingtop-login-mid">
        <p className="p3-login-mid">Nome de usuário</p>
        <input className="inpt1-login-mid" type="text" />
      </div>
      <div className="div2-login-mid">
        <p className="p3-login-mid">Senha</p>
        <input className="inpt1-login-mid" type="password" />
      </div>
      {/* BOTÂO */}
      <div className="div3-login-mid">
        <Link to="/sign" className="link1-login-mid">
          <button className="btn1-login-mid" type="button">
            Entrar
          </button>
        </Link>
        <div className="div4-login-mid">
          <p className="p4-login-mid">
            Não possui uma conta?{" "}
            <Link to="/sign">
              <p className="link2-login-mid">Cadastre-se</p>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginMid;
