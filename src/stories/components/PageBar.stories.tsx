import { PageBar } from '../../components/Search/components/PageBar';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Meta, Story } from '@storybook/react';
import { store } from '../../store';

const meta: Meta = {
  title: 'PageBar',
  component: PageBar,
};

export default meta;
const Template: Story = (args) => (
  <Router>
    <Provider store={store}>
      <PageBar {...args} />
    </Provider>
  </Router>
);

export const Default = Template.bind({});
Default.args = {
  pageTotal: '100',
  pageSize: '10',
  pageNumber: '2',
};
