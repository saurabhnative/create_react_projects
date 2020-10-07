import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders digital clock text', () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/Digital Clock/i);
  expect(textElement).toBeInTheDocument();
});
