import React, { useState, useEffect } from "react";
import "./LoginMid.css";

import { useLoginStore } from "../../stores/loginFormStore";

import "./LoginLow.css";
import "./LoginMid.css";
import "./LoginUp.css";
import { isAuthenticated, login } from "../../hooks/useLogin";
import { Link, useHistory } from "react-router-dom";
import { IonAlert } from "@ionic/react";

interface ContainerProps {}

const LoginMid: React.FC<ContainerProps> = () => {
  const history = useHistory();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useLoginStore.subscribe((state) => {
    setUsername(state.username);
    setPassword(state.password);
  });

  useEffect(() => {
    const verify = async () => {
      await isAuthenticated(history);
    };
    verify()
  }, [history]);

  return (
    <div className="LoginMid">
      {/* HEADER */}
      <div className="div1-login-mid">
        <p className="p1-login-mid">Login</p>
        <p className="p2-login-mid">Adicione seu email e senha.</p>
      </div>
      {/* ----------------------------------------------------------------- */}
      <IonAlert
        isOpen={useLoginStore.getState().error}
        onDidDismiss={() => {
          useLoginStore.setState({error: false, errorMsg: ""})
        }}
        header={""}
        message={useLoginStore.getState().errorMsg}
        buttons={["Voltar"]}
      />
      {/* INPUTS */}
      <div className="div2-login-mid padding1">
        <p className="p3-login-mid">Nome de usuário</p>
        <input
          value={username}
          className="inpt1-login-mid"
          type="text"
          onChange={(e) => {
            useLoginStore.setState({ username: e.target.value });
          }}
        />
      </div>
      <div className="div2-login-mid">
        <p className="p3-login-mid">Senha</p>
        <input
          value={password}
          className="inpt1-login-mid"
          type="password"
          onChange={(e) => {
            useLoginStore.setState({ password: e.target.value });
          }}
        />
      </div>
      {/* BOTÂO */}
      <div className="div3-login-mid">
        <button
          className="btn1-login-mid"
          type="button"
          onClick={() => {
            login({ username, password, error: false, errorMsg: "" });
          }}
        >
          Entrar
        </button>
        <p className="p4-login-mid">
          Não possui uma conta?
          <Link to="/sign" className="a1-login-mid">
            Cadastre-se
          </Link>
        </p>
        {/* ----------------------------------------------------------------- */}
      </div>
    </div>
  );
};

export default LoginMid;
