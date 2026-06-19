import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { ScrollToTop } from './scroll-to-top'

describe('ScrollToTop', () => {
  it('renders nothing when show=false', () => {
    const { container } = render(<ScrollToTop show={false} />)

    expect(container.firstChild).toBeNull()
  })

  it('renders button when show=true', () => {
    render(<ScrollToTop show={true} />)

    const button = screen.getByRole('button', { name: /scroll to top/i })
    expect(button).toBeInTheDocument()
  })

  it('calls window.scrollTo on click', async () => {
    const scrollToSpy = jest.spyOn(window, 'scrollTo')
    const user = userEvent.setup()

    render(<ScrollToTop show={true} />)
    const button = screen.getByRole('button')

    await user.click(button)

    expect(scrollToSpy).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth',
    })

    scrollToSpy.mockRestore()
  })

  it('has correct fixed positioning classes', () => {
    render(<ScrollToTop show={true} />)
    const button = screen.getByRole('button')

    expect(button).toHaveClass('fixed', 'bottom-8', 'right-8', 'z-50')
  })

  it('has rounded-full class', () => {
    render(<ScrollToTop show={true} />)
    const button = screen.getByRole('button')

    expect(button).toHaveClass('rounded-full')
  })

  it('has shadow-lg class', () => {
    render(<ScrollToTop show={true} />)
    const button = screen.getByRole('button')

    expect(button).toHaveClass('shadow-lg')
  })

  it('has accessible aria-label', () => {
    render(<ScrollToTop show={true} />)

    const button = screen.getByLabelText('Scroll to top')
    expect(button).toBeInTheDocument()
  })

  it('renders ArrowUp icon', () => {
    const { container } = render(<ScrollToTop show={true} />)
    const svg = container.querySelector('svg')

    expect(svg).toBeInTheDocument()
  })

  it('icon has correct sizing', () => {
    const { container } = render(<ScrollToTop show={true} />)
    const icon = container.querySelector('[class*="h-5 w-5"]')

    expect(icon).toBeInTheDocument()
  })

  it('toggles visibility based on show prop', () => {
    const { rerender, container } = render(<ScrollToTop show={true} />)

    expect(screen.getByRole('button')).toBeInTheDocument()

    rerender(<ScrollToTop show={false} />)
    expect(container.firstChild).toBeNull()
  })

  it('has icon button size', () => {
    render(<ScrollToTop show={true} />)
    const button = screen.getByRole('button')

    expect(button).toHaveClass('size-9')
  })

  it('maintains button functionality after re-render', async () => {
    const scrollToSpy = jest.spyOn(window, 'scrollTo')
    const user = userEvent.setup()

    const { rerender } = render(<ScrollToTop show={true} />)

    rerender(<ScrollToTop show={true} />)

    const button = screen.getByRole('button')
    await user.click(button)

    expect(scrollToSpy).toHaveBeenCalled()
    scrollToSpy.mockRestore()
  })
})
