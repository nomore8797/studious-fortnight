import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, within } from '@testing-library/react';
import App from './App.jsx';

describe('App component', () => {

  it('renders main header', () => {
    render(<App />);
    const header = screen.getByRole('heading', { level: 1 });
    expect(header).not.toBeNull();
    expect(header.textContent).toMatch(/Studious Fortnight/i);
  });

  it('renders secondary headers', () => {
    render(<App />);
    const secondaryHeaders = screen.getAllByRole('heading', { level: 2 });
    expect(secondaryHeaders.length).toBeGreaterThan(0);
  });

  it('renders paragraphs', () => {
    render(<App />);
    const paragraphs = screen.getAllByRole('paragraph');
    expect(paragraphs.length).toBeGreaterThan(0);
  });

  it('renders buttons and responds to click', () => {
    render(<App />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(0);
    buttons.forEach(button => {
      fireEvent.click(button);
      expect(button.disabled).toBe(false);
    });
  });

  it('renders lists with items', () => {
    render(<App />);
    const lists = screen.getAllByRole('list');
    lists.forEach(list => {
      const items = within(list).getAllByRole('listitem');
      expect(items.length).toBeGreaterThan(0);
    });
  });

  it('renders links', () => {
    render(<App />);
    const links = screen.queryAllByRole('link');
    expect(links.length).toBeGreaterThan(0);
  });

});
