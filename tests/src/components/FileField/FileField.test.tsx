// @ts-nocheck
import { App } from '../../../../src/components/App';
import '@testing-library/jest-dom';
import { render, fireEvent, screen, act } from '@testing-library/react';
import React from 'react';
import img from './img.jpg';

describe('Check File Field', () => {
  test('File Field render', () => {
    const { getByTestId } = render(<App />);
    const fieldElement = getByTestId('fileCV');
    expect(fieldElement).toBeInTheDocument();
  });
});
describe('Check File Field', () => {
  let file;

  beforeEach(() => {
    file = img;
  });

  test('File Field upload', async () => {
    const { getByTestId } = render(<App />);

    const fieldElement = getByTestId('fileCV');
    expect(fieldElement).toBeInTheDocument();
    await act(async () => {
      fireEvent.change(fieldElement, {
        target: { files: [file] },
      });
    });
  });
});
