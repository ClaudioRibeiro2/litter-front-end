import React from "react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import InviUp from '../components/Invitation/InviUp';
import InviMid from '../components/Invitation/InviMid';
import InviLow from '../components/Invitation/InviLow';


const Invitation: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
          <InviUp />
          <InviMid />
          <InviLow />
      </IonContent>
    </IonPage>
  );
};

export default Invitation;