import { render, screen, fireEvent, within } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders heading', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Studious Fortnight/i);
  });

  test('renders buttons and responds to click', () => {
    render(<App />);
    const buttons = screen.getAllByRole('button');
    buttons.forEach(button => {
      expect(button).toBeEnabled();
      fireEvent.click(button);
    });
  });

  test('renders lists with items', () => {
    render(<App />);
    const lists = screen.getAllByRole('list');
    lists.forEach(list => {
      const items = within(list).getAllByRole('listitem');
      expect(items.length).toBeGreaterThan(0);
    });
  });

  test('renders links', () => {
    render(<App />);
    const links = screen.getAllByRole('link');
    expect(links.length).toBeGreaterThan(0);
  });
});

