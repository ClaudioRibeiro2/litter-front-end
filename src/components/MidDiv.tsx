import './MidDiv.css';
import icon from '../assets/icon/visibility.svg'

interface ContainerProps { }

const MidDiv: React.FC<ContainerProps> = () => {
  return (
    <div className="MidDiv">
      <div className="inptDiv01">
        <p className="p01" >Email</p>
        <input type="text" className="inpt01" />
      </div>
      <div className="inptDiv02">
        <p className="p02" >Senha</p>
        <input type="password" className="inpt02" />
      </div>
    </div>
  );
};

export default MidDiv;