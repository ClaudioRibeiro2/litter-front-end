import React from "react";
import { IonPage, IonContent, IonImg } from "@ionic/react";
import './ChooseMid.css';
import img01 from '../../assets/img01.png'

const ChooseMid: React.FC = () => {
    return (
        <div className="ChooseMid">
            <div className="div1-choosemid">
                <IonImg className="img1-choosemid" src={img01}/>
            </div>
        </div>
    );
}

export default ChooseMid;