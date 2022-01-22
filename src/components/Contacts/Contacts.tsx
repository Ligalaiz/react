import React, { FC } from 'react';
import rss from '@assets/img/rss.jpg';
import { contactsImg } from './ContactsStyle';

const Contacts: FC = () => (
  <div className="contacts__img" css={contactsImg}>
    <img src={rss} alt="RSschool" data-testid="rsschool" />
  </div>
);

export { Contacts };
