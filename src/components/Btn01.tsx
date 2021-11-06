import { IonInput } from "@ionic/react";
import "./Btn01.css";

interface ContainerProps {}

const Btn01: React.FC<ContainerProps> = () => {
  return (
    <div className="btn-div1">
      <a href="/login">
        <button className="btn1" type="button">
          Entrar
        </button>
      </a>
      <div className="btn-div2">
        <p className="btn-p1">
          Não possui uma conta? <a href="/sign" className="btn-a1">Cadastre-se</a>
        </p>
      </div>
    </div>
  );
};

export default Btn01;
