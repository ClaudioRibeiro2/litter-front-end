import "./LoginLow.css";
import "./LoginMid.css";
import "./LoginUp.css";

interface ContainerProps {}

const LoginMid: React.FC<ContainerProps> = () => {
  return (
    <div className="LoginMid">
      {/* TITULO E SUBTITULO */}
      <div className="div1-login-mid">
        <p className="p1-login-mid">Login</p>
        <p className="p2-login-mid">Adicione seu email e senha.</p>
      </div>
      {/* ----------------------------------------------------------------- */}
      {/* INPUTS */}
      <div className="div2-login-mid padding1">
        <p className="p3-login-mid">Nome de usuário</p>
        <input className="inpt1-login-mid" type="text" />
      </div>
      <div className="div2-login-mid padding2">
        <p className="p3-login-mid">Senha</p>
        <input className="inpt1-login-mid" type="password" />
      </div>
      {/* ----------------------------------------------------------------- */}
      {/* BOTÕES */}
      <div className="div3-login-mid">
        <a href="/sign">
          <button className="btn1-login-mid" type="button">
            Entrar
          </button>
        </a>
        <p className="p4-login-mid">
          Não possui uma conta?{" "}
          <a href="/sign" className="a1-login-mid">
            Cadastre-se
          </a>
        </p>
        {/* ----------------------------------------------------------------- */}
      </div>
    </div>
  );
};

export default LoginMid;
