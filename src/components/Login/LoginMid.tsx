import "./LoginMid.css";

interface ContainerProps {}

const LoginMid: React.FC<ContainerProps> = () => {
  return (
    <div className="LoginMid">
      <div className="div1-login-up">
        <p className="p1-login-up">Login</p>
        <p className="p2-login-up">Adicione seu email e senha.</p>
      </div>
      <div className="div1-login-mid">
        <p className="p1-login-mid">Nome de usuário</p>
        <input className="inpt1-login-mid" type="text" />
      </div>
      <div className="div1-login-mid">
        <p className="p1-login-mid">Senha</p>
        <input className="inpt1-login-mid" type="password" />
      </div>
      <div className="div1-login-low">
        <a href="/sign">
          <button className="btn1-login-low" type="button">
            Entrar
          </button>
        </a>
        <div className="div2-login-low">
          <p className="p1-login-low">
            Não possui uma conta?{" "}
            <a href="/sign" className="a1-login-low">
              Cadastre-se
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginMid;
