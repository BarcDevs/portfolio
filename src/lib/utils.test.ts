import { cn } from './utils'

describe('cn()', () => {
  it('merges class names correctly', () => {
    const result = cn('px-2', 'py-1')
    expect(result).toBe('px-2 py-1')
  })

  it('removes conflicting tailwind classes', () => {
    const result = cn('bg-red-500', 'bg-blue-500')
    expect(result).toBe('bg-blue-500')
  })

  it('removes conflicting text sizes', () => {
    const result = cn('text-sm', 'text-lg')
    expect(result).toBe('text-lg')
  })

  it('handles conditional classes with boolean', () => {
    const isActive = true
    const result = cn('base', isActive && 'active', !isActive && 'inactive')
    expect(result).toContain('base')
    expect(result).toContain('active')
    expect(result).not.toContain('inactive')
  })

  it('filters out false/null/undefined values', () => {
    const isHidden = false
    const result = cn('base', isHidden && 'hidden', null, undefined, 'visible')
    expect(result).toBe('base visible')
  })

  it('returns empty string for no inputs', () => {
    expect(cn()).toBe('')
  })

  it('handles array of classes', () => {
    const classes = ['px-2', 'py-1', 'bg-white']
    const result = cn(...classes)
    expect(result).toContain('px-2')
    expect(result).toContain('py-1')
    expect(result).toContain('bg-white')
  })

  it('merges padding and margin conflicts correctly', () => {
    const result = cn('p-2 m-1', 'p-4')
    expect(result).toContain('p-4')
    expect(result).toContain('m-1')
  })

  it('handles complex tailwind utilities', () => {
    const result = cn(
      'flex items-center justify-between gap-2',
      'w-full h-auto'
    )
    expect(result).toContain('flex')
    expect(result).toContain('items-center')
    expect(result).toContain('justify-between')
    expect(result).toContain('w-full')
  })
})
