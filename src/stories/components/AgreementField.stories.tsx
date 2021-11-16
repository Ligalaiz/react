import { Meta, Story } from '@storybook/react';
import { Global } from '@emotion/react';
import { globalStyle } from '../../styles';
import { action } from '@storybook/addon-actions';
import { AgreementField } from '../../components/AgreementField';
import React from 'react';
import { IAgreementField } from '../../interfaces';

const meta: Meta = {
  title: 'AgreementField',
  component: AgreementField,
};

export default meta;
const Template: Story<IAgreementField> = (args) => (
  <>
    <Global styles={globalStyle} />
    <AgreementField {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  agreement: false,
  handleClick: action('agreement'),
};
