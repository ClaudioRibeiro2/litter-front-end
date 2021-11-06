import "./SignUp.css";

interface ContainerProps {}

const SignUp: React.FC<ContainerProps> = () => {
  return (
    <div className="SignUp">
      <div className="sign-up-div1">
        <p className="sign-up-p1">Cadastre-se</p>
        <p className="sign-up-p2">Insira suas credenciais para continuar.</p>
      </div>
    </div>
  );
};
export default SignUp;
