import './error.scss';
import bg from '@/assets/img/bg.jpg';
import message from '@/assets/img/message.png';
import octopus from '@/assets/img/octopus.png';
import spaceship from '@/assets/img/spaceship.png';
import circle from '@/assets/img/circle.png';
import shadow from '@/assets/img/shadow.png';
import house from '@/assets/img/house.png';
import smHouse from '@/assets/img/smHouse.png';

const Error = () => (
  <div className="error__wrap">
    <div className="error__bg error__bg--top bg">
      <img className="bg__image" src={bg} alt="background" />
    </div>
    <div className="error__content">
      <img
        className="error__message"
        alt="404 “This is not the web page you are looking for”"
        src={message}
      />
      <img alt="octopus" className="error__octopus" src={octopus} />
      <img alt="spaceship" className="error__spaceship" src={spaceship} />
      <img alt="circle" className="error__circle" src={circle} />
      <img alt="shadow" className="error__shadow" src={shadow} />
      <img alt="house" className="error__house" src={house} />
      <img alt="smHouse" className="error__smHouse" src={smHouse} />
    </div>
  </div>
);

export default Error;
