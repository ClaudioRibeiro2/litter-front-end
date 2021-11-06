import "./LoginUp.css";

interface ContainerProps {}

const LoginUp: React.FC<ContainerProps> = () => {
  return (
    <div className="LoginUp">
      <div className="login-up-div1">
        <p className="login-up-p1">Login</p>
        <p className="login-up-p2">Adicione seu email e senha.</p>
      </div>
    </div>
  );
};

export default LoginUp;
