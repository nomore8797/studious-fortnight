import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Консалтинговая платформа/i);
  expect(headerElement).toBeDefined();
});
