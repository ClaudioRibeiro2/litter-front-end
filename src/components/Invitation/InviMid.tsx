import React from "react";
import { IonImg } from "@ionic/react";
import "./InviMid.css";
import { Link } from "react-router-dom";

interface ContainerProps {}

const InviMid: React.FC<ContainerProps> = () => {
  return (
    <div className="InviMid">
      {/* INPUT */}
      <div className="div1-invi-mid">
        <p className="p1-invi-mid">Insira o código do convite</p>
          <input type="text" className="inpt1-invi-mid" />
      </div>
      {/* BOTÂO */}
      <div className="div3-invi-mid">
        <Link to="" className="link1-invi-mid">
          <button className="btn1-invi-mid" type="button">
            Entrar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default InviMid;
