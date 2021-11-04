import React, { useEffect } from "react";
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
import { useStore } from "../store";
import { perform_login } from "../actionsType";

const Login: React.FC = () => {
  const store = useStore();
  useEffect(() => {
    console.log("state", store.token);
    store.dispatch({ type: perform_login });
    console.log("state", store.token);
  }, []);

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
