import React from "react";
import "./Btn01.css";
import { useLoginStore } from "../loginFormStore";
import { login } from "../hooks/useLogin";
import { Link, useHistory } from "react-router-dom";

interface ContainerProps {}

const Btn01: React.FC<ContainerProps> = () => {
  const history = useHistory();
  return (
    <div className="container">
      <button
        className="btn01"
        type="button"
        onClick={() => {
          login(useLoginStore.getState());
          history.push("/");
        }}
      >
        Entrar
      </button>
      <div className="divP">
        <p className="p01">
          Não possui uma conta?{" "}
          <a href="/sign" className="link">
            Cadastre-se
          </a>
        </p>
      </div>
    </div>
  );
};

export default Btn01;
