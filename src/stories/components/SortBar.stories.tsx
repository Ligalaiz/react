import { SortBar } from '../../components/Search/components/SortBar';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ISortBar } from '../../interfaces';
import { Meta, Story } from '@storybook/react';

const meta: Meta = {
  title: 'SortBar',
  component: SortBar,
};

export default meta;
const Template: Story<ISortBar> = (args) => (
  <Router>
    <SortBar {...args} />
  </Router>
);

export const Default = Template.bind({});
Default.args = {
  sortType: 'relevancy',
};
