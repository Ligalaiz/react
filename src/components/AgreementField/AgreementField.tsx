/** @jsxImportSource @emotion/react */
import { IAgreementField } from '@src/interfaces';
import React, { FC } from 'react';
import { agreementStyle } from './AgreementFieldStyle';

export const AgreementField: FC<IAgreementField> = ({
  agreement,
  handleClick,
}) => {
  return (
    <div className="agreement" css={agreementStyle}>
      <label className="agreement__checkbox">
        <input
          name="agreement"
          type="checkbox"
          defaultChecked={agreement}
          onClick={handleClick}
          data-testid="agreementField"
        />
        <span>
          I accept the{' '}
          <a
            className="agreement__link"
            target="_blank="
            href="http://www.it-lex.ru/usloviya_ispolzovaniya_servisa/obrazec-politiki-konfidencialnosti-2017/"
          >
            agreement *
          </a>
        </span>
      </label>
    </div>
  );
};
