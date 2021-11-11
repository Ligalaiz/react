import { Meta, Story } from '@storybook/react';
import { SearchCheckbox } from '../../components/SearchCheckbox';
import React from 'react';

const meta: Meta = {
  title: 'Search Checkbox',
  component: SearchCheckbox,
};

interface ISearchCheckbox {
  petsAllowed: boolean;
  handleCheckboxChange: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export default meta;
const Template: Story<ISearchCheckbox> = (args) => <SearchCheckbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  disabled: false,
};
