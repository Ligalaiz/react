import './error.scss';
import bg from '@root/assets/img/bg.jpg';
import message from '@root/assets/img/message.png';
import octopus from '@root/assets/img/octopus.png';
import spaceship from '@root/assets/img/spaceship.png';
import circle from '@root/assets/img/circle.png';
import shadow from '@root/assets/img/shadow.png';
import house from '@root/assets/img/house.png';
import smHouse from '@root/assets/img/smHouse.png';

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
