import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ExperienceDetailsExpand from './experience-details-expand'

describe('ExperienceDetailsExpand', () => {
  it('renders View Details text when not expanded', () => {
    const mockToggle = jest.fn()
    render(
      <ExperienceDetailsExpand isExpanded={false} toggleExpand={mockToggle} />
    )

    expect(screen.getByText('View Details')).toBeInTheDocument()
  })

  it('renders Hide Details text when expanded', () => {
    const mockToggle = jest.fn()
    render(
      <ExperienceDetailsExpand isExpanded={true} toggleExpand={mockToggle} />
    )

    expect(screen.getByText('Hide Details')).toBeInTheDocument()
  })

  it('calls toggleExpand callback on click', async () => {
    const mockToggle = jest.fn()
    const user = userEvent.setup()

    render(
      <ExperienceDetailsExpand isExpanded={false} toggleExpand={mockToggle} />
    )

    const button = screen.getByRole('button')
    await user.click(button)

    expect(mockToggle).toHaveBeenCalledTimes(1)
  })

  it('shows ChevronDown icon when not expanded', () => {
    const mockToggle = jest.fn()
    const { container } = render(
      <ExperienceDetailsExpand isExpanded={false} toggleExpand={mockToggle} />
    )

    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })

  it('shows ChevronUp icon when expanded', () => {
    const mockToggle = jest.fn()
    const { container } = render(
      <ExperienceDetailsExpand isExpanded={true} toggleExpand={mockToggle} />
    )

    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })

  it('applies ghost variant button style', () => {
    const mockToggle = jest.fn()
    render(
      <ExperienceDetailsExpand isExpanded={false} toggleExpand={mockToggle} />
    )

    const button = screen.getByRole('button')
    expect(button).toHaveClass('hover:bg-accent')
  })

  it('applies small size button style', () => {
    const mockToggle = jest.fn()
    render(
      <ExperienceDetailsExpand isExpanded={false} toggleExpand={mockToggle} />
    )

    const button = screen.getByRole('button')
    expect(button).toHaveClass('h-8')
  })

  it('has gap between icon and text', () => {
    const mockToggle = jest.fn()
    render(
      <ExperienceDetailsExpand isExpanded={false} toggleExpand={mockToggle} />
    )

    const button = screen.getByRole('button')
    expect(button).toHaveClass('gap-2')
  })

  it('renders as button element', () => {
    const mockToggle = jest.fn()
    render(
      <ExperienceDetailsExpand isExpanded={false} toggleExpand={mockToggle} />
    )

    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('updates text when isExpanded prop changes', () => {
    const mockToggle = jest.fn()
    const { rerender } = render(
      <ExperienceDetailsExpand isExpanded={false} toggleExpand={mockToggle} />
    )

    expect(screen.getByText('View Details')).toBeInTheDocument()

    rerender(
      <ExperienceDetailsExpand isExpanded={true} toggleExpand={mockToggle} />
    )

    expect(screen.getByText('Hide Details')).toBeInTheDocument()
  })
})
