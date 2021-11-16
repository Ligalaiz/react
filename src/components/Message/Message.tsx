import React from 'react';
import { message, messageTitle } from './MessageStyle';

export const Message = () => {
  return (
    <div className="message" css={message} data-testid="message">
      <p className="message__title" css={messageTitle}>
        successful saving
      </p>
    </div>
  );
};
