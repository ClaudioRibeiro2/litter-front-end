import { IonInput } from '@ionic/react';
import './Btn01.css';

interface ContainerProps { }

const Btn01: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <a href="/logar"><button className="btn01" type="button">Entrar</button></a>
      <div className="divP">
      <p className="p01">Não possui uma conta?<a href="/splash" className="link">Cadastre-se</a></p>
      </div>
    </div>
  );
};

export default Btn01;
