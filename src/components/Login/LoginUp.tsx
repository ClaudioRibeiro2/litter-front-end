import './LoginUp.css';

interface ContainerProps { }

const LoginUp: React.FC<ContainerProps> = () => {
  return (
    <div className="UpDiv">
      <div className="content">
      <p className="headerLogin">Login</p>
      <p className="headerDesc" >Adicione seu email e senha.</p>
      </div>
    </div>
  );
};

export default LoginUp;
