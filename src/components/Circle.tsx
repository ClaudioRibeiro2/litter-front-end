import React from "react";
import { IonButton, IonLabel, IonItem, IonInput, IonItemDivider } from '@ionic/react';
import './Circle.css';
import icon from '../../public/assets/icon/icon.png';

interface ContainerProps { }

const Circle: React.FC<ContainerProps> = () => {
  return (
    <div className="divCircle">
        <img src="../../public/assets/icon/icon.png" alt="iocn" />
    </div>
  );
};

export default Circle;
