import {IonContent,IonHeader,IonPage,IonTitle,IonToolbar,} from "@ionic/react";
import ChooseLow from "../components/Choose/ChooseLow";
import ChooseMid from "../components/Choose/ChooseMid";
import ChooseUp from "../components/Choose/ChooseUp";

const Choose: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <ChooseUp />
        <ChooseMid />
        <ChooseLow />
      </IonContent>
    </IonPage>
  );
};

export default Choose;
