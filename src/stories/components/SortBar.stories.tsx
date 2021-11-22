import { SortBar } from '../../../src/components/SortBar';
import React from 'react';
import { ISortBar } from '../../interfaces';
import { Meta, Story } from '@storybook/react';

const meta: Meta = {
  title: 'SortBar',
  component: SortBar,
};

export default meta;
const Template: Story<ISortBar> = (args) => <SortBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  sortType: 'relevancy'
};
