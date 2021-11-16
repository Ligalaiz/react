/** @jsxImportSource @emotion/react */
import { IFormBtn } from '@src/interfaces';
import { color } from '@src/styles';
import React, { FC } from 'react';
import { formBtnStyle } from './FormBtnStyle';

export const FormBtn: FC<IFormBtn> = ({ isValid, dirty }) => {
  return (
    <button
      className="form__btn"
      css={formBtnStyle}
      style={
        isValid && dirty
          ? {
              backgroundColor: `${color['brand-color']}`,
              color: `${color['white-color']}`,
            }
          : {}
      }
      disabled={!(isValid && dirty)}
      type="submit"
    >
      Apply for this job
    </button>
  );
};
