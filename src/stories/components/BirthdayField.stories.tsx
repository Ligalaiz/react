import { Meta, Story } from '@storybook/react';
import { Global } from '@emotion/react';
import { globalStyle } from '../../styles';
import { BirthdayField } from '../../components/BirthdayField';
import React from 'react';
import { IBirthdayField } from '../../interfaces';

const meta: Meta = {
  title: 'BirthdayField',
  component: BirthdayField,
};

export default meta;
const Template: Story<IBirthdayField> = (args) => (
  <>
    <Global styles={globalStyle} />
    <BirthdayField {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  experience: 'middle',
  handleChange: () => {},
};
