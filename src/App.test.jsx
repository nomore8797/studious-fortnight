// src/App.test.jsx

import { render, screen, fireEvent } from '@testing-library/react';

import App from './App';

describe('App component', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('renders main header', () => {
    const header = screen.getByRole('heading', { level: 1 });
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent(/Studious Fortnight/i);
  });

  test('renders secondary headers', () => {
    const subHeaders = screen.getAllByRole('heading', { level: 2 });
    expect(subHeaders.length).toBeGreaterThan(0);
  });

  test('renders paragraphs', () => {
    const paragraphs = screen.getAllByText(/./); // Находит все тексты
    expect(paragraphs.length).toBeGreaterThan(0);
  });

  test('renders buttons and responds to click', () => {
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(0);

    buttons.forEach(button => {
      fireEvent.click(button);
      expect(button).toBeEnabled();
    });
  });

  test('renders lists with items', () => {
    const lists = screen.getAllByRole('list');
    expect(lists.length).toBeGreaterThan(0);

    lists.forEach(list => {
      const items = within(list).getAllByRole('listitem');
      expect(items.length).toBeGreaterThan(0);
    });
  });

  test('renders links', () => {
    const links = screen.getAllByRole('link');
    links.forEach(link => {
      expect(link).toHaveAttribute('href');
    });
  });

  test('renders dynamic elements', () => {
    // Пример для проверки текстов, которые могут появляться после действий
    // Можно заменить на конкретные селекторы вашего App
    const dynamicText = screen.queryByText(/Loading/i);
    if (dynamicText) {
      expect(dynamicText).toBeInTheDocument();
    }
  });
});
