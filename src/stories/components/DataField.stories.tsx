import { Meta, Story } from '@storybook/react';
import { Global } from '@emotion/react';
import { globalStyle } from '../../styles';
import { DataField } from '../../components/DataField';
import React from 'react';
import { IDataField } from '../../interfaces';

const meta: Meta = {
  title: 'DataField',
  component: DataField,
};

export default meta;
const Template: Story<IDataField> = (args) => (
  <>
    <Global styles={globalStyle} />
    <DataField {...args} />
  </>
);

export const Name = Template.bind({});
Name.args = {
  name: 'name',
  value: '',
  handleChange: () => {},
  maxLength: 0,
  minLength: 0,
  type: 'text',
  handleBlur: () => {},
  touched: {},
  errors: {},
};

export const Surname = Template.bind({});
Surname.args = {
  name: 'surname',
  value: '',
  handleChange: () => {},
  maxLength: 0,
  minLength: 0,
  type: 'text',
  handleBlur: () => {},
  touched: {},
  errors: {},
};

export const Phone = Template.bind({});
Phone.args = {
  name: 'phone',
  value: '',
  handleChange: () => {},
  maxLength: 0,
  minLength: 0,
  type: 'text',
  handleBlur: () => {},
  touched: {},
  errors: {},
};

export const FieldWithError = Template.bind({});
FieldWithError.args = {
  name: 'phone',
  value: '',
  handleChange: () => {},
  maxLength: 0,
  minLength: 0,
  type: 'text',
  handleBlur: () => {},
  touched: { phone: 'To short' },
  errors: { phone: 'To short' },
};
