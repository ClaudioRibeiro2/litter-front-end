import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Splash.css';
import Circle from '../components/Circle';

const Splash: React.FC = () => {
  return (
    <IonPage>
      <div className = "splashDiv">
      <Circle />
      </div>
    </IonPage>
  );
};

export default Splash;
