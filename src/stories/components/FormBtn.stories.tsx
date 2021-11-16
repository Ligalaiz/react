import { Meta, Story } from '@storybook/react';
import { Global } from '@emotion/react';
import { globalStyle } from '../../styles';
import { FormBtn } from '../../components/FormBtn';
import React from 'react';
import { IFormBtn } from '../../interfaces';

const meta: Meta = {
  title: 'FormBtn',
  component: FormBtn,
};

export default meta;
const Template: Story<IFormBtn> = (args) => (
  <>
    <Global styles={globalStyle} />
    <FormBtn {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  isValid: false,
};
