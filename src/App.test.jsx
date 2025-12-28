import { render, screen, fireEvent, within } from '@testing-library/react'
import App from './App'

describe('App component', () => {
  test('renders main header', () => {
    render(<App />)
    const header = screen.getByRole('heading', { level: 1 })
    expect(header).toBeInTheDocument()
    expect(header).toHaveTextContent(/Studious Fortnight/i)
  })

  test('renders secondary headers', () => {
    render(<App />)
    const subHeaders = screen.getAllByRole('heading', { level: 2 })
    expect(subHeaders.length).toBeGreaterThan(0)
  })

  test('renders paragraphs', () => {
    render(<App />)
    const paragraphs = screen.getAllByText(/./, { selector: 'p' })
    expect(paragraphs.length).toBeGreaterThan(0)
  })

  test('renders buttons and responds to click', () => {
    render(<App />)
    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBeGreaterThan(0)
    buttons.forEach((button) => {
      fireEvent.click(button)
      expect(button).toBeEnabled()
    })
  })

  test('renders lists with items', () => {
    render(<App />)
    const lists = screen.getAllByRole('list')
    lists.forEach((list) => {
      const items = within(list).getAllByRole('listitem')
      expect(items.length).toBeGreaterThan(0)
    })
  })

  test('renders links', () => {
    render(<App />)
    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThan(0)
  })
})

