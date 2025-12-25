// src/App.test.jsx
test('renders main header', () => {
  render(<App />);
  const headerElement = screen.getByText(/GitHub Codespaces/i);
  expect(headerElement).toBeDefined();
});
