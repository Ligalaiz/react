import { Meta, Story } from '@storybook/react';
import { Card } from '../../components/Card';
import React from 'react';
const first = require('../../assets/img/1.jpg');

const meta: Meta = {
  title: 'Card',
  component: Card,
};

interface ICard {
  apartment: {
    name: string;
    pets: boolean;
    image: string;
    description: string;
    price: string;
    rating: number | null;
    reviews: number | null;
    [key: string]: number | string | boolean | null | undefined;
  };
}

export default meta;
const Template: Story<ICard> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  apartment: {
    name: 'House',
    image: first,
    description: 'Hoboken 1BR | Desk+WiFi | Near Hospitals | by GLS',
    price: '6.570',
    rating: 5,
    reviews: 33,
  },
};
