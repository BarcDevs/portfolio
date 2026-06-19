import { render, screen } from '@testing-library/react'
import Skill from './skill'

describe('Skill', () => {
  it('renders skill name', () => {
    render(<Skill skill="React" />)
    expect(screen.getByText('React')).toBeInTheDocument()
  })

  it('applies correct styling classes', () => {
    const { container } = render(<Skill skill="TypeScript" />)
    const span = container.querySelector('span')

    expect(span).toHaveClass(
      'px-3',
      'py-1.5',
      'bg-secondary',
      'text-secondary-foreground',
      'rounded-full',
      'text-sm',
      'font-medium'
    )
  })

  it('renders different skill names', () => {
    const { rerender } = render(<Skill skill="Node.js" />)
    expect(screen.getByText('Node.js')).toBeInTheDocument()

    rerender(<Skill skill="MongoDB" />)
    expect(screen.getByText('MongoDB')).toBeInTheDocument()
  })

  it('handles skill names with special characters', () => {
    render(<Skill skill="Next.js" />)
    expect(screen.getByText('Next.js')).toBeInTheDocument()
  })

  it('renders as span element', () => {
    const { container } = render(<Skill skill="Test" />)
    const span = container.querySelector('span')

    expect(span).toBeInTheDocument()
    expect(span?.tagName).toBe('SPAN')
  })

  it('renders empty skill gracefully', () => {
    const { container } = render(<Skill skill="" />)
    const span = container.querySelector('span')

    expect(span).toBeInTheDocument()
  })
})
