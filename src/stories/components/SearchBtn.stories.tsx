import { Meta, Story } from '@storybook/react';
import { SearchBtn } from '../../components/SearchBtn';
import React from 'react';

const meta: Meta = {
  title: 'Search Button',
  component: SearchBtn,
};

interface ISearchBtn {
  disabled: boolean;
  [key: string]: string | boolean;
}

export default meta;
const Template: Story<ISearchBtn> = (args) => <SearchBtn {...args} />;

export const Default = Template.bind({});
Default.args = {
  disabled: false,
};
