import { IonImg } from "@ionic/react";
import "./InviMid.css";

interface ContainerProps {}

const InviMid: React.FC<ContainerProps> = () => {
  return (
    <div className="InviMid">
      <div className="div1-invimid">
        <p className="p1-invimid">Insira o código do convite</p>
        <div className="div2-invimid">
          <input type="text" className="inpt1-invimid" />
          <IonImg className="img1-invimid" />
        </div>
      </div>
    </div>
  );
};

export default InviMid;
