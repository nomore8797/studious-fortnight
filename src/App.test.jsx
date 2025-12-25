import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main header', () => {
  render(<App />);
  const headerElement = screen.getByText(/GitHub Codespaces/i);
  expect(headerElement).toBeDefined();
});
