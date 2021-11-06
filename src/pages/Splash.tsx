import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Splash.css';
import Circle from '../components/Circle';

const Splash: React.FC = () => {
  return (
    <IonPage>
      <div className = "Splash">
      <Circle />
      </div>
    </IonPage>
  );
};

export default Splash;
