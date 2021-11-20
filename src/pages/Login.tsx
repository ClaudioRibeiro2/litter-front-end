import React from "react";
import {
  IonContent,
  IonPage,
} from "@ionic/react";
import MidDiv from "../components/Login/LoginMid";
import UpDiv from "../components/Login/LoginUp";
import LowDiv from "../components/Login/LoginLow";

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <UpDiv />
        <MidDiv />
        <LowDiv />
      </IonContent>
    </IonPage>
  );
};

export default Login;
