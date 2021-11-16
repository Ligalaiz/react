import { Meta, Story } from '@storybook/react';
import { Global } from '@emotion/react';
import { globalStyle } from '../../styles';
import { SelectField } from '../../components/SelectField';
import React from 'react';
import { ISelectField } from '../../interfaces';

const meta: Meta = {
  title: 'SelectField',
  component: SelectField,
};

export default meta;
const Template: Story<ISelectField> = (args) => (
  <>
    <Global styles={globalStyle} />
    <SelectField {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  experience: 'middle',
  handleChange: () => {},
};
