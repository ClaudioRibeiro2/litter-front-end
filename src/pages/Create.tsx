import React from "react";
import {IonContent,IonHeader,IonPage,IonTitle,IonToolbar,} from "@ionic/react";
import CreateUp from '../components/Create/CreateUp';
import CreateMid from '../components/Create/CreateMid';
import CreateLow from '../components/Create/CreateLow';

const Create: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
          <CreateUp/>
          <CreateMid/>
          <CreateLow/>
      </IonContent>
    </IonPage>
  );
};

export default Create;
