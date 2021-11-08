import "./SignLow.css";

interface ContainerProps {}

const SignLow: React.FC<ContainerProps> = () => {
  return (
    <div className="SignLow">
      <div className="div1-sign-low">
        <a href="/login">
          <button className="btn1-sign-low" type="button">
            Entrar
          </button>
        </a>
        <div className="div2-sign-low">
          <p className="p1-sign-low">
            Já possui uma conta?{" "}
            <a href="/login" className="a1-sign-low">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default SignLow;
