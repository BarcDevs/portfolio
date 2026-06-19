import { render, screen } from '@testing-library/react'

import { personalData } from '@/config/personal-data'

import Navbar from './navbar'

jest.mock('@/hooks/use-scroll', () => ({
  useScroll: jest.fn(),
}))

jest.mock('@/components/nav/nav-links', () => ({
  __esModule: true,
  default: () => <div data-testid="nav-links">Nav Links</div>,
}))

jest.mock('@/components/nav/buttons', () => ({
  __esModule: true,
  default: () => <div data-testid="buttons">Buttons</div>,
}))

const mockUseScroll = jest.requireMock('@/hooks/use-scroll').useScroll

describe('Navbar', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    mockUseScroll.mockReturnValue({
      scrolled: false,
      showBackToTop: false,
    })
  })

  it('renders personal name from config', () => {
    render(<Navbar />)

    expect(screen.getByText(personalData.name)).toBeInTheDocument()
  })

  it('renders navigation element', () => {
    render(<Navbar />)

    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('renders nav links component', () => {
    render(<Navbar />)

    expect(screen.getByTestId('nav-links')).toBeInTheDocument()
  })

  it('renders buttons component', () => {
    render(<Navbar />)

    expect(screen.getByTestId('buttons')).toBeInTheDocument()
  })

  it('applies transparent background when not scrolled', () => {
    mockUseScroll.mockReturnValue({
      scrolled: false,
      showBackToTop: false,
    })

    const { container } = render(<Navbar />)
    const nav = container.querySelector('nav')

    expect(nav).toHaveClass('bg-transparent')
    expect(nav).not.toHaveClass('bg-background/80')
  })

  it('applies backdrop blur when scrolled', () => {
    mockUseScroll.mockReturnValue({
      scrolled: true,
      showBackToTop: false,
    })

    const { container } = render(<Navbar />)
    const nav = container.querySelector('nav')

    expect(nav).toHaveClass('backdrop-blur-lg')
    expect(nav).toHaveClass('bg-background/80')
  })

  it('applies border when scrolled', () => {
    mockUseScroll.mockReturnValue({
      scrolled: true,
      showBackToTop: false,
    })

    const { container } = render(<Navbar />)
    const nav = container.querySelector('nav')

    expect(nav).toHaveClass('border-b', 'border-border')
  })

  it('applies shadow when scrolled', () => {
    mockUseScroll.mockReturnValue({
      scrolled: true,
      showBackToTop: false,
    })

    const { container } = render(<Navbar />)
    const nav = container.querySelector('nav')

    expect(nav).toHaveClass('shadow-sm')
  })

  it('has fixed positioning', () => {
    const { container } = render(<Navbar />)
    const nav = container.querySelector('nav')

    expect(nav).toHaveClass('fixed', 'top-0', 'left-0', 'right-0', 'z-50')
  })

  it('has transition effect', () => {
    const { container } = render(<Navbar />)
    const nav = container.querySelector('nav')

    expect(nav).toHaveClass('transition-all', 'duration-300')
  })

  it('renders with flex layout for items', () => {
    const { container } = render(<Navbar />)
    const flex = container.querySelector('.flex.items-center.justify-between')

    expect(flex).toBeInTheDocument()
  })

  it('renders name with correct styling', () => {
    const { container } = render(<Navbar />)
    const name = container.querySelector('.text-xl.font-bold')

    expect(name).toBeInTheDocument()
    expect(name).toHaveTextContent(personalData.name)
  })

  it('updates styling when scroll state changes', () => {
    mockUseScroll.mockReturnValue({
      scrolled: false,
      showBackToTop: false,
    })

    const { rerender, container } = render(<Navbar />)
    const nav = container.querySelector('nav')

    expect(nav).toHaveClass('bg-transparent')

    mockUseScroll.mockReturnValue({
      scrolled: true,
      showBackToTop: true,
    })

    rerender(<Navbar />)

    expect(nav).toHaveClass('bg-background/80')
  })

  it('uses container layout', () => {
    const { container } = render(<Navbar />)
    const containerDiv = container.querySelector('.container.mx-auto.px-4')

    expect(containerDiv).toBeInTheDocument()
  })

  it('has padding on container', () => {
    const { container } = render(<Navbar />)
    const containerDiv = container.querySelector('.container.mx-auto.px-4.py-4')

    expect(containerDiv).toHaveClass('py-4')
  })

  it('renders children in correct order', () => {
    const { container } = render(<Navbar />)
    const flex = container.querySelector('.flex.items-center.justify-between')

    const children = flex?.children

    expect(children?.[0]).toHaveTextContent(personalData.name)
    expect(children?.[1]).toHaveAttribute('data-testid', 'nav-links')
    expect(children?.[2]).toHaveAttribute('data-testid', 'buttons')
  })
})
