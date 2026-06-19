import { render } from '@testing-library/react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from './card'

describe('Card', () => {
  it('renders card container', () => {
    const { container } = render(<Card>Content</Card>)
    const card = container.querySelector('[data-slot="card"]')

    expect(card).toBeInTheDocument()
    expect(card).toHaveClass('bg-card', 'rounded-xl', 'border')
  })

  it('applies card styling classes', () => {
    const { container } = render(<Card>Content</Card>)
    const card = container.querySelector('[data-slot="card"]')

    expect(card).toHaveClass('flex', 'flex-col', 'gap-6', 'shadow-sm')
  })

  it('accepts custom className on card', () => {
    const { container } = render(<Card className="custom">Content</Card>)
    const card = container.querySelector('[data-slot="card"]')

    expect(card).toHaveClass('custom')
  })

  it('renders CardHeader with correct styling', () => {
    const { container } = render(
      <Card>
        <CardHeader>Header</CardHeader>
      </Card>
    )
    const header = container.querySelector('[data-slot="card-header"]')

    expect(header).toBeInTheDocument()
    expect(header).toHaveClass('px-6')
  })

  it('renders CardTitle with correct styling', () => {
    const { container } = render(
      <Card>
        <CardHeader>
          <CardTitle>Title</CardTitle>
        </CardHeader>
      </Card>
    )
    const title = container.querySelector('[data-slot="card-title"]')

    expect(title).toBeInTheDocument()
    expect(title).toHaveClass('font-semibold', 'leading-none')
  })

  it('renders CardDescription with correct styling', () => {
    const { container } = render(
      <Card>
        <CardDescription>Description text</CardDescription>
      </Card>
    )
    const description = container.querySelector('[data-slot="card-description"]')

    expect(description).toBeInTheDocument()
    expect(description).toHaveClass('text-muted-foreground', 'text-sm')
  })

  it('renders CardContent with padding', () => {
    const { container } = render(
      <Card>
        <CardContent>Content</CardContent>
      </Card>
    )
    const content = container.querySelector('[data-slot="card-content"]')

    expect(content).toBeInTheDocument()
    expect(content).toHaveClass('px-6')
  })

  it('renders CardFooter with flex layout', () => {
    const { container } = render(
      <Card>
        <CardFooter>Footer</CardFooter>
      </Card>
    )
    const footer = container.querySelector('[data-slot="card-footer"]')

    expect(footer).toBeInTheDocument()
    expect(footer).toHaveClass('flex', 'items-center', 'px-6')
  })

  it('renders CardAction with grid positioning', () => {
    const { container } = render(
      <Card>
        <CardAction>Action</CardAction>
      </Card>
    )
    const action = container.querySelector('[data-slot="card-action"]')

    expect(action).toBeInTheDocument()
    expect(action).toHaveClass('col-start-2', 'self-start', 'justify-self-end')
  })

  it('renders complete card structure', () => {
    const { container } = render(
      <Card>
        <CardHeader>
          <CardTitle>My Title</CardTitle>
          <CardDescription>My description</CardDescription>
        </CardHeader>
        <CardContent>Main content here</CardContent>
        <CardFooter>Footer content</CardFooter>
      </Card>
    )

    const card = container.querySelector('[data-slot="card"]')
    const header = container.querySelector('[data-slot="card-header"]')
    const title = container.querySelector('[data-slot="card-title"]')
    const description = container.querySelector('[data-slot="card-description"]')
    const content = container.querySelector('[data-slot="card-content"]')
    const footer = container.querySelector('[data-slot="card-footer"]')

    expect(card).toBeInTheDocument()
    expect(header).toBeInTheDocument()
    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(content).toBeInTheDocument()
    expect(footer).toBeInTheDocument()
  })

  it('accepts custom className on sub-components', () => {
    const { container } = render(
      <Card>
        <CardHeader className="custom-header">
          <CardTitle className="custom-title">Title</CardTitle>
        </CardHeader>
        <CardContent className="custom-content">Content</CardContent>
      </Card>
    )

    expect(container.querySelector('[data-slot="card-header"]')).toHaveClass(
      'custom-header'
    )
    expect(container.querySelector('[data-slot="card-title"]')).toHaveClass(
      'custom-title'
    )
    expect(container.querySelector('[data-slot="card-content"]')).toHaveClass(
      'custom-content'
    )
  })
})
