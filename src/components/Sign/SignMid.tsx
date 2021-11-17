import React from "react";
import { Link } from "react-router-dom";
import "./SignMid.css";


interface ContainerProps {}

const SignMid: React.FC<ContainerProps> = () => {
  return (
    <div className="SignMid">
      {/* HEADER */}
      <div className="div1-sign-mid">
        <p className="p1-sign-mid">Cadastre-se</p>
        <p className="p2-sign-mid">Insira suas credenciais para continuar.</p>
      </div>
      {/* INPUT's */}
      <div className="div2-sign-mid padding-top1">
        <p className="p3-sign-mid">Nome de usuário</p>
        <input className="inpt1-sign-mid" type="text" />
      </div>
      <div className="div2-sign-mid">
        <p className="p3-sign-mid">Email</p>
        <input className="inpt1-sign-mid" type="text" />
      </div>
      <div className="div2-sign-mid">
        <p className="p3-sign-mid">Senha</p>
        <input className="inpt1-sign-mid" type="password" />
      </div>
      {/* BOTÂO */}
      <div className="div3-sign-mid">
        <Link to="/sign" className="link1-sign-mid">
          <button className="btn1-sign-mid" type="button">
            Entrar
          </button>
        </Link>
        <div className="div4-sign-mid">
          <p className="p4-sign-mid">
            Não possui uma conta?{" "}
            <Link to="/sign">
              <p className="link2-sign-mid">Cadastre-se</p>
            </Link>
          </p>
        </div>
      </div>
      {/* ----------------------------------------------------------------- */}
      {/* BOTÂO */}
      <div className="div4-sign-mid">
        <a href="/login">
          <button className="btn1-sign-mid" type="button">
            Entrar
          </button>
        </a>
        <p className="p4-sign-mid">
          Já possui uma conta?{" "}
          <a href="/login" className="a1-sign-mid">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};
export default SignMid;
