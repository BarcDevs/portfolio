import { Experience } from '@/types/experience'

export const createMockExperience = (
  overrides?: Partial<Experience>
): Experience => ({
  company: 'Test Company',
  role: 'Senior Developer',
  startDate: new Date(2023, 0, 1),
  endDate: new Date(2024, 0, 1),
  description: 'Test role description',
  achievements: ['Achievement 1', 'Achievement 2'],
  techStack: ['React', 'TypeScript'],
  ...overrides,
})
