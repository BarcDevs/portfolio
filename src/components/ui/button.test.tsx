import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './button'

describe('Button', () => {
  it('renders with default variant and size', () => {
    render(<Button>Click me</Button>)
    const button = screen.getByRole('button', { name: 'Click me' })

    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('bg-primary')
  })

  it('applies secondary variant class', () => {
    render(<Button variant="secondary">Secondary</Button>)
    const button = screen.getByRole('button')

    expect(button).toHaveClass('bg-secondary')
  })

  it('applies destructive variant class', () => {
    render(<Button variant="destructive">Delete</Button>)
    const button = screen.getByRole('button')

    expect(button).toHaveClass('bg-destructive')
  })

  it('applies outline variant class', () => {
    render(<Button variant="outline">Outline</Button>)
    const button = screen.getByRole('button')

    expect(button).toHaveClass('border')
  })

  it('applies ghost variant class', () => {
    render(<Button variant="ghost">Ghost</Button>)
    const button = screen.getByRole('button')

    expect(button).toHaveClass('hover:bg-accent')
  })

  it('applies link variant class', () => {
    render(<Button variant="link">Link</Button>)
    const button = screen.getByRole('button')

    expect(button).toHaveClass('text-primary')
  })

  it('applies small size class', () => {
    render(<Button size="sm">Small</Button>)
    const button = screen.getByRole('button')

    expect(button).toHaveClass('h-8')
  })

  it('applies large size class', () => {
    render(<Button size="lg">Large</Button>)
    const button = screen.getByRole('button')

    expect(button).toHaveClass('h-10')
  })

  it('applies icon size class', () => {
    render(<Button size="icon">🔍</Button>)
    const button = screen.getByRole('button')

    expect(button).toHaveClass('size-9')
  })

  it('applies icon-sm size class', () => {
    render(<Button size="icon-sm">🔍</Button>)
    const button = screen.getByRole('button')

    expect(button).toHaveClass('size-8')
  })

  it('applies icon-lg size class', () => {
    render(<Button size="icon-lg">🔍</Button>)
    const button = screen.getByRole('button')

    expect(button).toHaveClass('size-10')
  })

  it('disables button when disabled prop is set', () => {
    render(<Button disabled>Disabled</Button>)
    const button = screen.getByRole('button')

    expect(button).toBeDisabled()
    expect(button).toHaveClass('disabled:opacity-50')
  })

  it('handles click events', async () => {
    const handleClick = jest.fn()
    const user = userEvent.setup()

    render(<Button onClick={handleClick}>Clickable</Button>)
    const button = screen.getByRole('button')

    await user.click(button)

    expect(handleClick).toHaveBeenCalled()
  })

  it('renders as child element when asChild=true', () => {
    render(
      <Button asChild>
        <a href="/test">Link Button</a>
      </Button>
    )
    const link = screen.getByRole('link')

    expect(link).toHaveTextContent('Link Button')
    expect(link).toHaveAttribute('href', '/test')
  })

  it('applies custom className alongside variant styles', () => {
    render(
      <Button variant="primary" className="custom-class">
        Custom
      </Button>
    )
    const button = screen.getByRole('button')

    expect(button).toHaveClass('custom-class')
  })

  it('renders with data-slot attribute', () => {
    const { container } = render(<Button>Data Slot</Button>)
    const button = container.querySelector('[data-slot="button"]')

    expect(button).toBeInTheDocument()
  })

  it('has focus visible styling', () => {
    render(<Button>Focusable</Button>)
    const button = screen.getByRole('button')

    expect(button).toHaveClass('focus-visible:ring-ring/50')
  })
})
