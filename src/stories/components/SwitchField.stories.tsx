import { Meta, Story } from '@storybook/react';
import { Global } from '@emotion/react';
import { globalStyle } from '../../styles';
import { action } from '@storybook/addon-actions';
import { SwitchField } from '../../components/SwitchField';
import React from 'react';
import { ISwitchField } from '../../interfaces';

const meta: Meta = {
  title: 'SwitchField',
  component: SwitchField,
};

export default meta;
const Template: Story<ISwitchField> = (args) => (
  <>
    <Global styles={globalStyle} />
    <SwitchField {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  mode: false,
  handleModeChange: action('SwitchField'),
};
