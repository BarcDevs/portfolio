import { render, screen } from '@testing-library/react'
import Section from './section'

describe('Section', () => {
  it('renders section with correct id', () => {
    const { container } = render(
      <Section id="test-section" headline="Test" description="Description">
        Content
      </Section>
    )

    const section = container.querySelector('section#test-section')
    expect(section).toBeInTheDocument()
  })

  it('renders headline', () => {
    render(
      <Section id="test" headline="My Headline" description="Description">
        Content
      </Section>
    )

    expect(screen.getByText('My Headline')).toBeInTheDocument()
  })

  it('renders description', () => {
    render(
      <Section id="test" headline="Headline" description="My Description">
        Content
      </Section>
    )

    expect(screen.getByText('My Description')).toBeInTheDocument()
  })

  it('renders children', () => {
    render(
      <Section id="test" headline="Headline" description="Description">
        <div>Child Content</div>
      </Section>
    )

    expect(screen.getByText('Child Content')).toBeInTheDocument()
  })

  it('applies padding classes', () => {
    const { container } = render(
      <Section id="test" headline="H" description="D">
        Content
      </Section>
    )

    const section = container.querySelector('section')
    expect(section).toHaveClass('py-24', 'px-4')
  })

  it('does not apply bg-muted when bgMuted is false', () => {
    const { container } = render(
      <Section id="test" headline="H" description="D" bgMuted={false}>
        Content
      </Section>
    )

    const section = container.querySelector('section')
    expect(section).not.toHaveClass('bg-muted/30')
  })

  it('applies bg-muted when bgMuted is true', () => {
    const { container } = render(
      <Section id="test" headline="H" description="D" bgMuted={true}>
        Content
      </Section>
    )

    const section = container.querySelector('section')
    expect(section).toHaveClass('bg-muted/30')
  })

  it('renders headline with correct styling', () => {
    const { container } = render(
      <Section id="test" headline="Headline" description="Description">
        Content
      </Section>
    )

    const h2 = container.querySelector('h2')
    expect(h2).toHaveClass('text-4xl', 'md:text-5xl', 'font-bold', 'mb-4')
  })

  it('renders description with muted text color', () => {
    const { container } = render(
      <Section id="test" headline="Headline" description="Description">
        Content
      </Section>
    )

    const p = container.querySelector('p')
    expect(p).toHaveClass('text-muted-foreground', 'text-lg')
  })

  it('has container layout', () => {
    const { container } = render(
      <Section id="test" headline="H" description="D">
        Content
      </Section>
    )

    const div = container.querySelector('.container')
    expect(div).toBeInTheDocument()
    expect(div).toHaveClass('mx-auto', 'max-w-6xl')
  })

  it('has margin below headline section', () => {
    const { container } = render(
      <Section id="test" headline="H" description="D">
        Content
      </Section>
    )

    const headlineDiv = container.querySelector('.text-center')
    expect(headlineDiv).toHaveClass('mb-16')
  })

  it('renders multiple children', () => {
    render(
      <Section id="test" headline="H" description="D">
        <div>Child 1</div>
        <div>Child 2</div>
        <div>Child 3</div>
      </Section>
    )

    expect(screen.getByText('Child 1')).toBeInTheDocument()
    expect(screen.getByText('Child 2')).toBeInTheDocument()
    expect(screen.getByText('Child 3')).toBeInTheDocument()
  })

  it('renders with text-balance on headline', () => {
    const { container } = render(
      <Section id="test" headline="Long Headline Text Here" description="D">
        Content
      </Section>
    )

    const h2 = container.querySelector('h2')
    expect(h2).toHaveClass('text-balance')
  })
})
