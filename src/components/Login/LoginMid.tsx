import React, { useState, useEffect } from "react";
import "./LoginMid.css";

import { useLoginStore } from "../../loginFormStore";

interface ContainerProps {}

const LoginMid: React.FC<ContainerProps> = () => {
  return (
    <div className="MidDiv">
      <div className="inptDiv01">
        <p className="p01">Email</p>
        <input
          type="text"
          className="inpt01"
          value={useLoginStore.getState((state) => state.username)}
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
          value={useLoginStore.getState((state) => state.password)}
          onChange={(e) => {
            useLoginStore.setState({ password: e.target.value });
          }}
        />
      </div>
    </div>
  );
};

export default LoginMid;
