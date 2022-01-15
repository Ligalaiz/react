import { render } from '@testing-library/react';
import {Articles} from '../../../../../src/components/search/components/articles/Arcicles';
import '@testing-library/jest-dom/extend-expect';
import data from './data';

describe('Articles', () => {
  it('Render Articles component', () => {
    const { getByText } = render(
      <Articles
        article={{
          ...data,
          publishedAt: '2021-03-03T04:21:18Z',
          urlToImage: 'https://akm-img-a-in.tosshub.com/untitled.jpg',
        }}
      />,
    );
    expect(getByText(/Tesla/i)).toHaveTextContent("Tesla's self-driving");
  });

  it('Render Articles component with small date', () => {
    const { getByText } = render(
      <Articles article={{ ...data, publishedAt: '2021-11-15T04:21:18Z' }} />,
    );
    expect(getByText(/Tesla/i)).toHaveTextContent("Tesla's self-driving");
  });

  it('Render Articles component with big date', () => {
    const { getByText } = render(
      <Articles
        article={{
          ...data,
          publishedAt: '2021-11-15T04:21:18Z',
          urlToImage: null,
        }}
      />,
    );
    expect(getByText(/Tesla/i)).toHaveTextContent("Tesla's self-driving");
  });
});
