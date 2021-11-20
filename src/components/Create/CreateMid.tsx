import React from "react";
import { Link } from "react-router-dom";
import "./CreateMid.css";
import arrowback from "../../assets/arrowback.svg";
import check from "../../assets/checkmark.svg";
import photoicon from "../../assets/img1-create-mid.png";
import searchbar from "../../assets/img2-create-mid.png";
import { IonImg } from "@ionic/react";

interface ContainerProps {}

const CreateMid: React.FC<ContainerProps> = () => {
  return (
    <div className="CreateMid">
      <div className="div1-create-mid">
        {/* ICONES BOTÔES */}
        <Link to="choose" className="link1">
          <img src={arrowback} alt="error" className="img1-create-mid" />
        </Link>
        {/*         <Link to="/" className="link2">
          <img src={check} alt="error" className="img2-create-mid" />
        </Link> */}
      </div>
      {/* FOTO DO GRUPO */}
      <div className="div2-create-mid">
        <Link to="/">
          {" "}
          {/* ADICIONAR O CAMINHO CERTO */}
          <img src={photoicon} alt="error" className="img3-create-mid" />
        </Link>
      </div>
      {/* INPUT's */}
      <div className="div3-create-mid paddingtop-create-mid">
        <p className="p1-create-mid">Nome do Grupo</p>
        <input
          className="inpt1-create-mid"
          placeholder="Insira um Nome"
          type="text"
        />
      </div>
      <div className="div3-create-mid padding-bottom">
        <p className="p1-create-mid">Convite</p>
        <input
          className="inpt1-create-mid"
          placeholder="Insira um codigo de convite para o seu grupo"
          type="text"
        />
      </div>
      <div className="div4-create-mid">
        <Link to="/sign" className="link1-create-mid">
          <button className="btn1-create-mid" type="button">
            Criar
          </button>
        </Link>
      </div>
      {/*   SEARCH MENU 
      <div className="div4-create-mid">
        <div className="div5-create-mid">
          <input
            className="inpt1-create-mid"
            placeholder="Procurar"
            type="text"
          />
          <img src={searchbar} alt="error" className="img4-create-mid" />
        </div>
        <div className="div6-create-mid">
            <ul className="ul-create-mid">
              <li><Link to=""></Link></li>
              <li><Link to=""></Link></li>
            </ul>
        </div>
      </div> */}
    </div>
  );
};

export default CreateMid;
