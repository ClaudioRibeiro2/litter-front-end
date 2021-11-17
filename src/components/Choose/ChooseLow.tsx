import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import "./ChooseLow.css";

const ChooseLow: React.FC = () => {
  return (
    <div className="ChooseLow">
        <div className="div1-chooselow">
        <a href="/">
          <button className="btn1-chooselow" type="button">
            Criar
          </button>
        </a>
        <a href="/">
          <button className="btn2-chooselow" type="button">
            Entrar
          </button>
        </a>
        </div>
    </div>
  );
};

export default ChooseLow;
