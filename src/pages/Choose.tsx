import React from "react";
import {IonContent,IonHeader,IonPage,IonTitle,IonToolbar,} from "@ionic/react";
import ChooseMid from "../components/Choose/ChooseMid";
import ChooseUp from "../components/Choose/ChooseUp";

const Choose: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <ChooseUp />
        <ChooseMid />
      </IonContent>
    </IonPage>
  );
};

export default Choose;
