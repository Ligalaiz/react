/** @jsxImportSource @emotion/react */
import { IAgreementField } from '@src/interfaces';
import React, { FC } from 'react';
import {
  agreementLink,
  agreementCheckbox,
  agreementLabel,
  agreementWrap
} from './AgreementFieldStyle';

export const AgreementField: FC<IAgreementField> = ({
  agreement,
  handleClick,
}) => {
  return (
    <div className="agreement__wrap" css={agreementWrap}>
      <input
        name="agreement"
        type="checkbox"
        css={agreementCheckbox}
        id='agreement'
        defaultChecked={agreement}
        onClick={handleClick}
        data-testid="agreementField"
      />
      <label htmlFor="agreement" className="agreement__checkbox" css={agreementLabel}>
        I accept the{' '}
      </label>
      <a
        className="agreement__link"
        css={agreementLink}
        target="_blank="
        href="http://www.it-lex.ru/usloviya_ispolzovaniya_servisa/obrazec-politiki-konfidencialnosti-2017/"
      >
        agreement *
      </a>
    </div>
  );
};
