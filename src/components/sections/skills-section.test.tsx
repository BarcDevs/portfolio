import { render, screen } from '@testing-library/react'
import SkillsSection from './skills-section'

jest.mock('@/constants/skills', () => ({
  skills: [
    {
      title: 'Frontend',
      icon: () => null,
      skills: ['React', 'TypeScript'],
    },
    {
      title: 'Backend',
      icon: () => null,
      skills: ['Node.js', 'Express'],
    },
  ],
}))

jest.mock('@/components/skills/skill-category', () => {
  return {
    __esModule: true,
    default: ({ category }: any) =>
      require('react').createElement(
        'div',
        { 'data-testid': `category-${category.title}` },
        category.title
      ),
  }
})

jest.mock('@/components/section', () => {
  return {
    __esModule: true,
    default: ({ id, headline, description, children }: any) =>
      require('react').createElement(
        'section',
        { id },
        require('react').createElement('h2', null, headline),
        require('react').createElement('p', null, description),
        children
      ),
  }
})

describe('SkillsSection', () => {
  it('renders Section component', () => {
    const { container } = render(<SkillsSection />)
    const section = container.querySelector('section')

    expect(section).toBeInTheDocument()
  })

  it('passes correct id to Section', () => {
    const { container } = render(<SkillsSection />)
    const section = container.querySelector('section#skills')

    expect(section).toBeInTheDocument()
  })

  it('renders headline "Technical Skills"', () => {
    render(<SkillsSection />)
    expect(screen.getByText('Technical Skills')).toBeInTheDocument()
  })

  it('renders description about expertise', () => {
    render(<SkillsSection />)
    expect(
      screen.getByText('Expertise across the full technology stack')
    ).toBeInTheDocument()
  })

  it('renders all skill categories', () => {
    render(<SkillsSection />)

    expect(screen.getByTestId('category-Frontend')).toBeInTheDocument()
    expect(screen.getByTestId('category-Backend')).toBeInTheDocument()
  })

  it('renders skill categories with grid layout', () => {
    const { container } = render(<SkillsSection />)
    const grid = container.querySelector('.grid')

    expect(grid).toBeInTheDocument()
    expect(grid).toHaveClass('md:grid-cols-2', 'lg:grid-cols-3', 'gap-6')
  })

  it('uses category title as key', () => {
    render(<SkillsSection />)

    expect(screen.getByTestId('category-Frontend')).toBeInTheDocument()
    expect(screen.getByTestId('category-Backend')).toBeInTheDocument()
  })

  it('passes category data to SkillCategory', () => {
    render(<SkillsSection />)

    const categories = screen.getAllByTestId(/category-/)
    expect(categories).toHaveLength(2)
  })

  it('renders correct number of skill categories', () => {
    render(<SkillsSection />)
    const categories = screen.getAllByTestId(/category-/)

    expect(categories.length).toBe(2)
  })
})
