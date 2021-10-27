import "./SignLow.css";

interface ContainerProps {}

const SignLow: React.FC<ContainerProps> = () => {
  return (
    <div className="contentLow">
      <div className="divNome">
        <p className="p1">Nome de usuário</p>
        <input className="inptNome" type="text" />
      </div>
      <div className="divEmail">
        <p className="p1">Email</p>
        <input className="inptEmail" type="text" />
      </div>
      <div className="divSenha">
        <p className="p1">Senha</p>
        <input className="inptSenha" type="password" />
      </div>
    </div>
  );
};
export default SignLow;
