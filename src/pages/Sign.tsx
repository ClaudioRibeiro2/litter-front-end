import React from "react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import SignLow from "../components/Sign/SignLow";
import SignMid from "../components/Sign/SignMid";
import SignUp from "../components/Sign/SignUp";


const Sign: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <SignUp />
        <SignMid />
        <SignLow />
      </IonContent>
    </IonPage>
  );
};

export default Sign;
