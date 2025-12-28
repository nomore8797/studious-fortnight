import { render, screen, fireEvent, within } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App component', () => {
  it('renders main header (h1)', () => {
    render(<App />)
    const header = screen.getByRole('heading', { level: 1 })
    expect(header).toBeDefined()
    expect(header.textContent.length).toBeGreaterThan(0)
  })

  it('renders at least one button', () => {
    render(<App />)
    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBeGreaterThan(0)
  })

  it('buttons are clickable', () => {
    render(<App />)
    const buttons = screen.getAllByRole('button')
    buttons.forEach(button => {
      fireEvent.click(button)
      expect(button).toBeDefined()
    })
  })

  it('renders at least one list with items', () => {
    render(<App />)
    const lists = screen.getAllByRole('list')
    expect(lists.length).toBeGreaterThan(0)

    lists.forEach(list => {
      const items = within(list).getAllByRole('listitem')
      expect(items.length).toBeGreaterThan(0)
    })
  })
})
