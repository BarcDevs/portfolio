import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ExperienceDetails from './experience-details'

jest.mock('@/components/experience/experience-details-expand', () => ({
  default: ({
    isExpanded,
    toggleExpand,
  }: {
    isExpanded: boolean
    toggleExpand: () => void
  }) => (
    <button onClick={toggleExpand}>
      {isExpanded ? 'Hide Details' : 'View Details'}
    </button>
  ),
}))

describe('ExperienceDetails', () => {
  it('renders expand button', () => {
    render(<ExperienceDetails experienceDetails={['Detail 1']} />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('does not show details initially', () => {
    render(
      <ExperienceDetails
        experienceDetails={['Detail 1', 'Detail 2']}
      />
    )

    expect(screen.queryByText('Additional Details:')).not.toBeInTheDocument()
  })

  it('shows details when expanded', async () => {
    const user = userEvent.setup()

    render(
      <ExperienceDetails
        experienceDetails={['Detail 1', 'Detail 2']}
      />
    )

    const button = screen.getByRole('button')
    await user.click(button)

    expect(screen.getByText('Additional Details:')).toBeInTheDocument()
  })

  it('renders all detail items when expanded', async () => {
    const user = userEvent.setup()
    const details = ['Detail 1', 'Detail 2', 'Detail 3']

    render(<ExperienceDetails experienceDetails={details} />)

    const button = screen.getByRole('button')
    await user.click(button)

    expect(screen.getByText('Detail 1')).toBeInTheDocument()
    expect(screen.getByText('Detail 2')).toBeInTheDocument()
    expect(screen.getByText('Detail 3')).toBeInTheDocument()
  })

  it('toggles details visibility on button click', async () => {
    const user = userEvent.setup()

    render(
      <ExperienceDetails
        experienceDetails={['Detail 1']}
      />
    )

    const button = screen.getByRole('button')

    await user.click(button)
    expect(screen.getByText('Additional Details:')).toBeInTheDocument()

    await user.click(button)
    expect(screen.queryByText('Additional Details:')).not.toBeInTheDocument()
  })

  it('renders details as list items', async () => {
    const user = userEvent.setup()

    render(
      <ExperienceDetails
        experienceDetails={['Detail 1', 'Detail 2']}
      />
    )

    const button = screen.getByRole('button')
    await user.click(button)

    const listItems = screen.getAllByRole('listitem')
    expect(listItems).toHaveLength(2)
  })

  it('renders bullet points for each detail', async () => {
    const user = userEvent.setup()

    const { container } = render(
      <ExperienceDetails
        experienceDetails={['Detail 1', 'Detail 2']}
      />
    )

    const button = screen.getByRole('button')
    await user.click(button)

    const bullets = container.querySelectorAll('.text-primary')
    expect(bullets.length).toBeGreaterThan(0)
  })

  it('uses first 10 chars of detail as key', async () => {
    const user = userEvent.setup()

    const { container } = render(
      <ExperienceDetails
        experienceDetails={[
          'First Detail',
          'Second Detail',
        ]}
      />
    )

    const button = screen.getByRole('button')
    await user.click(button)

    const items = container.querySelectorAll('li')
    expect(items).toHaveLength(2)
  })

  it('applies muted-foreground color to detail text', async () => {
    const user = userEvent.setup()

    const { container } = render(
      <ExperienceDetails
        experienceDetails={['Detail 1']}
      />
    )

    const button = screen.getByRole('button')
    await user.click(button)

    const listItems = container.querySelectorAll(
      '.text-sm.text-muted-foreground'
    )
    expect(listItems.length).toBeGreaterThan(0)
  })

  it('applies flex gap-2 to list items', async () => {
    const user = userEvent.setup()

    const { container } = render(
      <ExperienceDetails
        experienceDetails={['Detail 1']}
      />
    )

    const button = screen.getByRole('button')
    await user.click(button)

    const listItems = container.querySelectorAll('.flex.gap-2')
    expect(listItems.length).toBeGreaterThan(0)
  })

  it('applies border-top when expanded', async () => {
    const user = userEvent.setup()

    const { container } = render(
      <ExperienceDetails
        experienceDetails={['Detail 1']}
      />
    )

    const button = screen.getByRole('button')
    await user.click(button)

    const detailsDiv = container.querySelector('.border-t')
    expect(detailsDiv).toBeInTheDocument()
  })

  it('renders headline "Additional Details:"', async () => {
    const user = userEvent.setup()

    render(
      <ExperienceDetails
        experienceDetails={['Detail 1']}
      />
    )

    const button = screen.getByRole('button')
    await user.click(button)

    const headline = screen.getByText('Additional Details:')
    expect(headline).toHaveClass('font-semibold')
  })

  it('handles empty details array', () => {
    render(<ExperienceDetails experienceDetails={[]} />)

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('handles single detail', async () => {
    const user = userEvent.setup()

    render(
      <ExperienceDetails
        experienceDetails={['Only one detail']}
      />
    )

    const button = screen.getByRole('button')
    await user.click(button)

    expect(screen.getByText('Only one detail')).toBeInTheDocument()
  })

  it('handles many details', async () => {
    const user = userEvent.setup()
    const details = Array.from({ length: 10 }, (_, i) => `Detail ${i + 1}`)

    render(<ExperienceDetails experienceDetails={details} />)

    const button = screen.getByRole('button')
    await user.click(button)

    const listItems = screen.getAllByRole('listitem')
    expect(listItems).toHaveLength(10)
  })
})
