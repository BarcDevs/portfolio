import { render, screen } from '@testing-library/react'
import ProjectDetails from './project-details'

describe('ProjectDetails', () => {
  it('renders timeline label', () => {
    render(<ProjectDetails timeline="2024" />)
    expect(screen.getByText('Timeline:')).toBeInTheDocument()
  })

  it('renders timeline value', () => {
    render(<ProjectDetails timeline="2024-2025" />)
    expect(screen.getByText('2024-2025')).toBeInTheDocument()
  })

  it('applies correct styling classes', () => {
    const { container } = render(<ProjectDetails timeline="2024" />)
    const div = container.firstChild

    expect(div).toHaveClass(
      'text-xs',
      'text-muted-foreground',
      'space-y-1',
      'mt-auto',
      'pt-4',
      'border-t'
    )
  })

  it('renders with different timeline values', () => {
    const { rerender } = render(<ProjectDetails timeline="2023-2024" />)
    expect(screen.getByText('2023-2024')).toBeInTheDocument()

    rerender(<ProjectDetails timeline="2024-Ongoing" />)
    expect(screen.getByText('2024-Ongoing')).toBeInTheDocument()
  })

  it('renders timeline label as bold text', () => {
    const { container } = render(<ProjectDetails timeline="2024" />)
    const span = container.querySelector('span.font-semibold')

    expect(span).toBeInTheDocument()
    expect(span).toHaveTextContent('Timeline:')
  })

  it('has border at top', () => {
    const { container } = render(<ProjectDetails timeline="2024" />)
    const div = container.firstChild

    expect(div).toHaveClass('border-t')
  })

  it('has margin top auto', () => {
    const { container } = render(<ProjectDetails timeline="2024" />)
    const div = container.firstChild

    expect(div).toHaveClass('mt-auto')
  })

  it('has padding top', () => {
    const { container } = render(<ProjectDetails timeline="2024" />)
    const div = container.firstChild

    expect(div).toHaveClass('pt-4')
  })

  it('uses muted-foreground color', () => {
    const { container } = render(<ProjectDetails timeline="2024" />)
    const div = container.firstChild

    expect(div).toHaveClass('text-muted-foreground')
  })

  it('uses extra small text size', () => {
    const { container } = render(<ProjectDetails timeline="2024" />)
    const div = container.firstChild

    expect(div).toHaveClass('text-xs')
  })

  it('has space between children', () => {
    const { container } = render(<ProjectDetails timeline="2024" />)
    const div = container.firstChild

    expect(div).toHaveClass('space-y-1')
  })

  it('renders timeline in paragraph', () => {
    const { container } = render(<ProjectDetails timeline="2024" />)
    const p = container.querySelector('p')

    expect(p).toBeInTheDocument()
  })

  it('handles long timeline strings', () => {
    render(
      <ProjectDetails timeline="January 2024 - December 2025 (Ongoing)" />
    )
    expect(
      screen.getByText('January 2024 - December 2025 (Ongoing)')
    ).toBeInTheDocument()
  })
})
