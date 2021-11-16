/** @jsxImportSource @emotion/react */
import { ISelectField } from '@src/interfaces';
import React, { FC } from 'react';
import { experianceItem, experianceSelect } from './SelectFieldStyles';

export const SelectField: FC<ISelectField> = ({ experience, handleChange }) => {
  return (
    <div className="experience">
      <label htmlFor="experience__label">
        * work experience:&nbsp;
        <select
          className="experience__select"
          data-testid="experience"
          css={experianceSelect}
          name="experience"
          value={experience}
          onChange={handleChange}
        >
          <option
            className="experiance__item"
            value="junior"
            css={experianceItem}
            data-testid="select-option"
          >
            junior
          </option>
          <option
            className="experiance__item"
            value="middle"
            css={experianceItem}
            data-testid="select-option"
          >
            middle
          </option>
          <option
            className="experiance__item"
            value="senior"
            css={experianceItem}
            data-testid="select-option"
          >
            senior
          </option>
        </select>
      </label>
    </div>
  );
};
