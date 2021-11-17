import React from "react";
import { IonPage, IonContent, IonImg } from "@ionic/react";
import "./ChooseMid.css";
import img01 from "../../assets/img01.png";
import { Link } from "react-router-dom";

const ChooseMid: React.FC = () => {
  return (
    <div className="ChooseMid">
      {/* HEADER */}
      <div className="div1-choose-mid">
        <p className="p1-choose-mid">Agora é hora de escolher!</p>
      </div>
      {/* IMAGEM */}
      <div className="div2-choose-mid">
        <IonImg className="img1-choose-mid" src={img01} />
      </div>
      {/* BOTÔES */}
        <div className="div3-choose-mid">
          <Link to="/sign" className="link1-choose-mid">
            <button className="btn1-choose-mid" type="button">
              Criar
            </button>
          </Link>
          <Link to="/sign" className="link1-choose-mid">
            <button className="btn1-choose-mid" type="button">
              Entrar
            </button>
          </Link>
        </div>
    </div>
  );
};

export default ChooseMid;
