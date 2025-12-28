import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App component', () => {
  it('renders main header', () => {
    render(<App />)

    const header = screen.getByRole('heading', { level: 1 })
    expect(header).toBeTruthy()
  })

  it('renders at least one button', () => {
    render(<App />)

    const buttons = screen.queryAllByRole('button')
    expect(buttons.length).toBeGreaterThan(0)
  })

  it('renders at least one list', () => {
    render(<App />)

    const lists = screen.queryAllByRole('list')
    expect(lists.length).toBeGreaterThan(0)
  })
})

