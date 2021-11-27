import { PageBar } from '../../components/Search/components/PageBar';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { IPageBar } from '../../interfaces';
import { Meta, Story } from '@storybook/react';

const meta: Meta = {
  title: 'PageBar',
  component: PageBar,
};

export default meta;
const Template: Story<IPageBar> = (args) => (
  <Router>
    <PageBar {...args} />
  </Router>
);

export const Default = Template.bind({});
Default.args = {
  pageTotal: '100',
  pageSize: '10',
  pageNumber: '2',
};
