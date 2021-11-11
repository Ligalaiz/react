import { Meta, Story } from '@storybook/react';
import { SearchField } from '../../components/SearchField';
import React from 'react';

const meta: Meta = {
  title: 'Search Field',
  component: SearchField,
};

interface ISearchField {
  filterText: string;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default meta;
const Template: Story<ISearchField> = (args) => <SearchField {...args} />;

export const Default = Template.bind({});
