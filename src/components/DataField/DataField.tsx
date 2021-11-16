/** @jsxImportSource @emotion/react */
import { ICardApp, IDataField, IShow, ITitle } from '@src/interfaces';
import React, { FC } from 'react';
import { formField } from './DataFieldStyle';

const show: IShow = {
  visibility: 'visible',
  color: 'red',
};

const title: ITitle = {
  name: 'Name *',
  surname: 'Surname *',
  phone: '+7(___)___ ____ *',
};

export const DataField: FC<IDataField> = (props) => {
  const {
    name,
    value,
    handleChange,
    maxLength = 0,
    minLength = 0,
    type,
    handleBlur,
    touched,
    errors,
  } = props;

  return (
    <div className={`form__${name} ${name}`}>
      <input
        name={name}
        value={value}
        data-testid={name}
        maxLength={Number(maxLength)}
        minLength={Number(minLength)}
        type={type || ''}
        className="form__field form__field--{name}"
        css={formField}
        onChange={handleChange}
        placeholder={title[name]}
        onBlur={handleBlur}
      />
      <p>
        <span
          className="form__notice"
          style={
            touched[name as keyof ICardApp] && errors[name as keyof ICardApp]
              ? show
              : { visibility: 'hidden' }
          }
        >
          {errors[name as keyof ICardApp]}! please input {name}{' '}
          {name === 'phone' ? '' : 'more'} {name === 'phone' ? 10 : 3}{' '}
          characters
        </span>
      </p>
    </div>
  );
};
