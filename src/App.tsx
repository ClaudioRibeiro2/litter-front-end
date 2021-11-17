import React, { useState, useEffect } from "react";

import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Login from "./pages/Login";
import Sign from "./pages/Sign";
import Splash from "./pages/Splash";
import Choose from "./pages/Choose";
import Invitation from "./pages/Invitation";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { isAuth } from "./hooks/useLogin";
import Home from "./pages/Home";

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>();

  useEffect(() => {
    isAuth()
      .then((isAuth) => {
        setIsAuthenticated(isAuth);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [isAuth()]);

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route
            exact
            path="/"
            render={() => {
              console.log("/");
              return isAuthenticated ? (
                <Redirect to="/home" />
              ) : (
                <Redirect to="/login" />
              );
            }}
          />
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/sign">
            <Sign />
          </Route>
          <Route exact path="/splash">
            <Splash />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
