import "./LoginMid.css";

interface ContainerProps {}

const LoginMid: React.FC<ContainerProps> = () => {
  return (
    <div className="LoginMid">
      <div className="login-mid-div1">
        <p className="login-mid-p1">Email</p>
        <input type="text" className="login-mid-inpt1" />
      </div>
      <div className="login-mid-div2">
        <p className="login-mid-p2">Senha</p>
        <input type="password" className="login-mid-inpt2" />
      </div>
    </div>
  );
};

export default LoginMid;
