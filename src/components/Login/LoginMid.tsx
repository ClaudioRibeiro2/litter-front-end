import React, { useState, useEffect } from "react";
import "./LoginMid.css";

import { useLoginStore } from "../../loginFormStore";

interface ContainerProps {}

const LoginMid: React.FC<ContainerProps> = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  useLoginStore.subscribe((state) => {
    setUsername(state.username);
    setPassword(state.password);
    setIsError(state.error);
    setErrorMsg(state.errorMsg);
  });

  return (
    <div className="MidDiv">
      <div className="inptDiv01">
        {isError && errorMsg}
        <p className="p01">Email</p>
        <input
          type="text"
          className="inpt01"
          value={username}
          onChange={(e) => {
            useLoginStore.setState({ username: e.target.value });
          }}
        />
      </div>
      <div className="inptDiv02">
        <p className="p02">Senha</p>
        <input
          type="password"
          className="inpt02"
          value={password}
          onChange={(e) => {
            useLoginStore.setState({ password: e.target.value });
          }}
        />
      </div>
    </div>
  );
};

export default LoginMid;
