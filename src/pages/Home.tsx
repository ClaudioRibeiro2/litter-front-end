import { IonPage } from "@ionic/react";
import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { isAuthenticated } from "../hooks/useLogin";

const Home = () => {
  const history = useHistory();

  useEffect(() => {
    isAuthenticated(history);
  }, []);

  return (
    <IonPage>
      <h1>Home</h1>
    </IonPage>
  );
};

export default Home;
