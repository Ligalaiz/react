import { SearchBar } from '../../../src/components/SearchBar';
import React from 'react';
import { ISearchBar } from '../../interfaces';
import { Meta, Story } from '@storybook/react';

const meta: Meta = {
  title: 'SearchBar',
  component: SearchBar,
};

export default meta;
const Template: Story<ISearchBar> = (args) => <SearchBar {...args} />;

export const Default = Template.bind({});
