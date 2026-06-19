import { Experience } from '@/types/experience'

export const createMockExperience = (
  overrides?: Partial<Experience>
): Experience => ({
  company: 'Test Company',
  role: 'Senior Developer',
  period: '2023 - 2024',
  brief: 'Test role description',
  achievements: ['Achievement 1', 'Achievement 2'],
  techStack: ['React', 'TypeScript'],
  ...overrides,
})
