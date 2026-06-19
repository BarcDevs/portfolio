import { render, screen } from '@testing-library/react'
import { Badge } from './badge'

describe('Badge', () => {
  it('renders with default variant', () => {
    const { container } = render(<Badge>Default</Badge>)
    const badge = container.querySelector('[data-slot="badge"]')

    expect(badge).toBeInTheDocument()
    expect(badge).toHaveClass('bg-primary')
  })

  it('renders with secondary variant', () => {
    const { container } = render(<Badge variant="secondary">Secondary</Badge>)
    const badge = container.querySelector('[data-slot="badge"]')

    expect(badge).toHaveClass('bg-secondary')
  })

  it('renders with destructive variant', () => {
    const { container } = render(
      <Badge variant="destructive">Destructive</Badge>
    )
    const badge = container.querySelector('[data-slot="badge"]')

    expect(badge).toHaveClass('bg-destructive')
  })

  it('renders with outline variant', () => {
    const { container } = render(<Badge variant="outline">Outline</Badge>)
    const badge = container.querySelector('[data-slot="badge"]')

    expect(badge).toHaveClass('border')
  })

  it('applies inline-flex layout', () => {
    const { container } = render(<Badge>Layout</Badge>)
    const badge = container.querySelector('[data-slot="badge"]')

    expect(badge).toHaveClass('inline-flex')
  })

  it('applies rounded-full class', () => {
    const { container } = render(<Badge>Rounded</Badge>)
    const badge = container.querySelector('[data-slot="badge"]')

    expect(badge).toHaveClass('rounded-full')
  })

  it('applies padding and sizing', () => {
    const { container } = render(<Badge>Sized</Badge>)
    const badge = container.querySelector('[data-slot="badge"]')

    expect(badge).toHaveClass('px-2', 'py-0.5', 'text-xs')
  })

  it('renders as span element by default', () => {
    const { container } = render(<Badge>Span Badge</Badge>)
    const span = container.querySelector('span[data-slot="badge"]')

    expect(span).toBeInTheDocument()
  })

  it('renders as child element when asChild=true', () => {
    render(
      <Badge asChild>
        <button>Button Badge</button>
      </Badge>
    )
    const button = screen.getByRole('button', { name: 'Button Badge' })

    expect(button).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(
      <Badge className="custom-badge">Custom</Badge>
    )
    const badge = container.querySelector('[data-slot="badge"]')

    expect(badge).toHaveClass('custom-badge')
  })

  it('has focus visible styling', () => {
    const { container } = render(<Badge>Focusable</Badge>)
    const badge = container.querySelector('[data-slot="badge"]')

    expect(badge).toHaveClass('focus-visible:ring-ring/50')
  })

  it('applies whitespace-nowrap', () => {
    const { container } = render(<Badge>No Wrap</Badge>)
    const badge = container.querySelector('[data-slot="badge"]')

    expect(badge).toHaveClass('whitespace-nowrap')
  })
})
