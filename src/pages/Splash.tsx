import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Splash.css";
import img1 from "../assets/icon-splash.png";

const Splash: React.FC = () => {
  return (
    <IonPage>
      <div className="Splash">
        <div className="div1-splash">
          <IonImg className="img1-circle" src={img1} />
        </div>
      </div>
    </IonPage>
  );
};

export default Splash;
