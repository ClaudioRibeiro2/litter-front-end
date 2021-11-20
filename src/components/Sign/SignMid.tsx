import { IonAlert, IonInput, IonLabel } from "@ionic/react";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Role } from "../../custom";
import { signIn } from "../../hooks/useSignin";
import { useSignInStore } from "../../stores/signInForn";
import "./SignMid.css";


interface ContainerProps {}

const SignMid: React.FC<ContainerProps> = () => {
  const history = useHistory();

  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useSignInStore.subscribe(({ username, email, password, err, errMsg }) => {
    setUsername(username);
    setEmail(email);
    setPassword(password);
  });

  return (
    <div className="SignMid">
      {/* HEADER */}
      <div className="div1-sign-mid">
        <p className="p1-sign-mid">Cadastre-se</p>
        <p className="p2-sign-mid">Insira suas credenciais para continuar.</p>
      </div>
      {/* ----------------------------------------------------------------- */}
      <IonAlert
        isOpen={useSignInStore.getState().err}
        onDidDismiss={() => {
          useSignInStore.setState({ err: false, errMsg: "" });
        }}
        header={""}
        message={useSignInStore.getState().errMsg}
        buttons={["Voltar"]}
      />
      {/* INPUTS */}
      <div className="div2-sign-mid">
        <div className="div3-sign-mid">
          <IonLabel position="floating" className="p3-sign-mid">
            Nome de usuário
          </IonLabel>
          <IonInput
            value={username}
            className="inpt1-sign-mid"
            type="text"
            onIonChange={(e: any) => {
              let username = e.target.value || "";
              useSignInStore.setState({ username });
            }}
          ></IonInput>
        </div>
        <div className="div3-sign-mid">
          <IonLabel position="floating" className="p3-sign-mid">
            Email
          </IonLabel>
          <IonInput
            value={email}
            className="inpt1-sign-mid"
            type="text"
            onIonChange={(e: any) => {
              let email = e.target.value || "";
              useSignInStore.setState({ email });
            }}
          ></IonInput>
        </div>
        <div className="div3-sign-mid">
          <IonLabel position="floating" className="p3-sign-mid">
            Senha
          </IonLabel>
          <IonInput
            value={password}
            className="inpt1-sign-mid"
            type="password"
            onIonChange={(e: any) => {
              let password = e.target.value || "";
              useSignInStore.setState({ password });
            }}
          ></IonInput>
        </div>
      </div>
      {/* BOTÂO */}
      <div className="div4-sign-mid">
        <button
          className="btn1-sign-mid"
          type="button"
          onClick={() => {
            const roles: Role[] = [];
            signIn({ username, email, password, roles, history });
          }}
        >
          Entrar
        </button>
        <p className="p4-sign-mid">
          Já possui uma conta?
          <Link to="/login" className="a1-sign-mid">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};
export default SignMid;
