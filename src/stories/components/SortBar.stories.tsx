import React from 'react';
import { SortBar } from '../../components/Search/components/SortBar';
import { BrowserRouter as Router } from 'react-router-dom';
import { Meta, Story } from '@storybook/react';
import { Provider } from 'react-redux';
import { store } from '../../store';

const meta: Meta = {
  title: 'SortBar',
  component: SortBar,
};

export default meta;
const Template: Story = (args) => (
  <Router>
    <Provider store={store}>
      <SortBar {...args} />
    </Provider>
  </Router>
);

export const Default = Template.bind({});
Default.args = {
  sortType: 'relevancy',
};
