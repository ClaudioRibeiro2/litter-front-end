import React from "react";
import './SignUp.css';

interface ContainerProps { }

const SignUp: React.FC<ContainerProps> = () => {
  return (
    <div className="contentUp">
      <div className='divUp'>
        <p className='header'>Cadastre-se</p>
        <p className='p1'>Insira suas credenciais para continuar.</p>
      </div>
    </div>
  );
};
export default SignUp;
