import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import MidDiv from '../components/MidDiv';
import UpDiv from '../components/UpDiv';
import LowDiv from '../components/LowDiv';
import './Home.css';

const Home: React.FC = () => {
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

export default Home;
