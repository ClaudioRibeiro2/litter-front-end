import React from "react";
import { Link } from "react-router-dom";
import "./LoginUp.css";
import "./LoginMid.css";
import "./LoginLow.css";

interface ContainerProps {}

const LoginMid: React.FC<ContainerProps> = () => {
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
