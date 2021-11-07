import "./SignMid.css";

interface ContainerProps {}

const SignMid: React.FC<ContainerProps> = () => {
  return (
    <div className="SignMid">
      <div className="div1-sign-mid">
        <div className="div2-sign-mid">
          <p className="p1-sign-mid">Nome de usuário</p>
          <input className="inpt1-sign-mid" type="text" />
        </div>
        <div className="div2-sign-mid">
          <p className="p1-sign-mid">Email</p>
          <input className="inpt1-sign-mid" type="text" />
        </div>
        <div className="div2-sign-mid">
          <p className="p1-sign-mid">Senha</p>
          <input className="inpt1-sign-mid" type="password" />
        </div>
      </div>
    </div>
  );
};
export default SignMid;
