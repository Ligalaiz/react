import { useState } from 'react';
import Form from './form/Form';
import Card from './card/Card';
import Message from './message/Message';
import '../styles/index.scss';

const App = () => {
  const [cards, setCards] = useState([]);
  const [message, setMessage] = useState(false);

  return (
    <>
      <div className="form__wrap">
        <h2 className="form__title">Application Form</h2>
        <p className="form__subtitle">
          Complete the form below, telling us why you’d be a great fit at
          Wargaming, and you could be part of our awesome family.
        </p>
        <Form setCards={setCards} setMessage={setMessage} />
        {message && <Message />}
      </div>
      <div className="card__wrap">
        {cards.map((card, index) => {
          return <Card key={index} card={card} index={index} />;
        })}
      </div>
    </>
  );
};

export default App;
