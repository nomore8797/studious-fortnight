import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

describe('App Component', () => {
  test('должен отображать заголовок платформы', () => {
    render(<App />);
    const heading = screen.getByRole('heading', { name: /Консалтинговая платформа/i });
    expect(heading).toBeInTheDocument();
  });

  test('должен отображать кнопку "Демо"', () => {
    render(<App />);
    const demoButton = screen.getByRole('button', { name: /Демо/i });
    expect(demoButton).toBeInTheDocument();
  });

  test('должны отображаться секции состояния и уведомлений', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /Панель состояния:/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Уведомления:/i })).toBeInTheDocument();
  });
});


