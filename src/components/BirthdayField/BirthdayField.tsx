/** @jsxImportSource @emotion/react */
import { IBirthdayField } from '@src/interfaces';
import React, { FC } from 'react';
import { birthdayField } from './BirthdayFieldStyle';

export const BirthdayField: FC<IBirthdayField> = ({
  birthday,
  handleChange,
}) => {
  return (
    <div className="birthday">
      <label className="birthday__label">
        * birthday:
        <input
          type="date"
          name="birthday"
          data-testid="birthdayField"
          value={birthday}
          className="birthday__field"
          css={birthdayField}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};
