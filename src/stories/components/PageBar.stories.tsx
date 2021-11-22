import { PageBar } from '../../../src/components/PageBar';
import React from 'react';
import { IPageBar } from '../../interfaces';
import { Meta, Story } from '@storybook/react';

const meta: Meta = {
  title: 'PageBar',
  component: PageBar,
};

export default meta;
const Template: Story<IPageBar> = (args) => <PageBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  pageTotal: '100',
  pageSize: '10',
  pageNumber: '2'
};
