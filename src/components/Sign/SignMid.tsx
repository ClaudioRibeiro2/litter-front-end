import "./SignMid.css";

interface ContainerProps {}

const SignMid: React.FC<ContainerProps> = () => {
  return (
    <div className="SignMid">
      <div className="sign-mid-div1">
        <p className="sign-mid-p1">Nome de usuário</p>
        <input className="sign-mid-inpt1" type="text" />
      </div>
      <div className="sign-mid-div2">
        <p className="sign-mid-p1">Email</p>
        <input className="sign-mid-inpt2" type="text" />
      </div>
      <div className="sign-mid-div3">
        <p className="sign-mid-p3">Senha</p>
        <input className="sign-mid-inpt3" type="password" />
      </div>
    </div>
  );
};
export default SignMid;
