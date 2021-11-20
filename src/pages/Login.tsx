import React, { useEffect, useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
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
