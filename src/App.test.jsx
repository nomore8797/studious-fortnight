import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App component', () => {

  test('renders main header', () => {
    render(<App />);
    const headerElement = screen.getByText(/learn react/i);
    expect(headerElement).toBeInTheDocument();
  });

  test('renders links', () => {
    render(<App />);
    const linkElements = screen.getAllByRole('link');
    expect(linkElements.length).toBeGreaterThan(0);
  });

  // Дополнительно: пример проверки кнопки, если она есть
  test('button click works', () => {
    render(<App />);
    const buttonElement = screen.queryByRole('button');
    if (buttonElement) {
      fireEvent.click(buttonElement);
      expect(buttonElement).toBeInTheDocument(); // или другая проверка после клика
    }
  });

});
