/** @jsxImportSource @emotion/react */
import { Card } from '@components/Card';
import { Form } from '@components/Form';
import { Message } from '@components/Message';
import { ICardApp } from '@src/interfaces';
import React, { FC, useState } from 'react';
import { cardWrap, formSubtitle, formTitle, formWrap } from './AppStyle';

export const App: FC = () => {
  const [cards, setCards] = useState<ICardApp[]>([]);
  const [message, setMessage] = useState<boolean>(false);

  return (
    <>
      <div className="form__wrap" css={formWrap}>
        <h2 className="form__title" css={formTitle}>
          Application Form
        </h2>
        <p className="form__subtitle" css={formSubtitle}>
          Complete the form below, telling us why you’d be a great fit at
          Wargaming, and you could be part of our awesome family.
        </p>
        <Form setCards={setCards} setMessage={setMessage} cards={cards} />
        {message && <Message />}
      </div>
      <div className="card__wrap" css={cardWrap}>
        {cards.map((card, index) => {
          return <Card key={card.name} card={card} index={index} />;
        })}
      </div>
    </>
  );
};
