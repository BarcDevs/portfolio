import { Project } from '@/types/project'

export const createMockProject = (
  overrides?: Partial<Project>
): Project => ({
  name: 'Test Project',
  tagline: 'A test project',
  description: 'This is a test project description',
  features: ['Feature 1', 'Feature 2', 'Feature 3'],
  techStack: ['React', 'TypeScript', 'Next.js'],
  timeline: '2024',
  links: {
    live: 'https://example.com',
    github: 'https://github.com/example/test',
  },
  ...overrides,
})
