import './LowDiv.css';
import Btn01 from './Btn01';

interface ContainerProps { }

const LowDiv: React.FC<ContainerProps> = () => {
  return (
    <div className="LowDiv">
      <Btn01 />
    </div>
  );
};

export default LowDiv;
