import { SearchForm } from '../../components/Search/components/SearchForm';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ISearchForm } from '../../interfaces';
import { Meta, Story } from '@storybook/react';

const meta: Meta = {
  title: 'SearchBar',
  component: SearchForm,
};

export default meta;
const Template: Story<ISearchForm> = (args) => (
  <Router>
    <SearchForm {...args} />
  </Router>
);

export const Default = Template.bind({});
