import { act,renderHook } from '@testing-library/react'

import { useScroll } from './use-scroll'

describe('useScroll', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    window.scrollY = 0
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('initializes with scrolled=false and showBackToTop=false', () => {
    const { result } = renderHook(() => useScroll())

    expect(result.current.scrolled).toBe(false)
    expect(result.current.showBackToTop).toBe(false)
  })

  it('sets scrolled=true when scrollY > 50', () => {
    const { result } = renderHook(() => useScroll())

    act(() => {
      window.scrollY = 100
      window.dispatchEvent(new Event('scroll'))
    })

    expect(result.current.scrolled).toBe(true)
  })

  it('sets scrolled=false when scrollY <= 50', () => {
    const { result } = renderHook(() => useScroll())

    act(() => {
      window.scrollY = 100
      window.dispatchEvent(new Event('scroll'))
    })

    expect(result.current.scrolled).toBe(true)

    act(() => {
      window.scrollY = 30
      window.dispatchEvent(new Event('scroll'))
    })

    expect(result.current.scrolled).toBe(false)
  })

  it('sets showBackToTop=true when scrollY > 500', () => {
    const { result } = renderHook(() => useScroll())

    act(() => {
      window.scrollY = 600
      window.dispatchEvent(new Event('scroll'))
    })

    expect(result.current.showBackToTop).toBe(true)
  })

  it('sets showBackToTop=false when scrollY <= 500', () => {
    const { result } = renderHook(() => useScroll())

    act(() => {
      window.scrollY = 600
      window.dispatchEvent(new Event('scroll'))
    })

    expect(result.current.showBackToTop).toBe(true)

    act(() => {
      window.scrollY = 300
      window.dispatchEvent(new Event('scroll'))
    })

    expect(result.current.showBackToTop).toBe(false)
  })

  it('updates both scrolled and showBackToTop correctly', () => {
    const { result } = renderHook(() => useScroll())

    act(() => {
      window.scrollY = 200
      window.dispatchEvent(new Event('scroll'))
    })

    expect(result.current.scrolled).toBe(true)
    expect(result.current.showBackToTop).toBe(false)

    act(() => {
      window.scrollY = 600
      window.dispatchEvent(new Event('scroll'))
    })

    expect(result.current.scrolled).toBe(true)
    expect(result.current.showBackToTop).toBe(true)
  })

  it('cleans up scroll event listener on unmount', () => {
    const removeEventListenerSpy = jest.spyOn(
      window,
      'removeEventListener'
    )
    const { unmount } = renderHook(() => useScroll())

    unmount()

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      'scroll',
      expect.any(Function)
    )
    removeEventListenerSpy.mockRestore()
  })

  it('attaches scroll event listener on mount', () => {
    const addEventListenerSpy = jest.spyOn(window, 'addEventListener')

    renderHook(() => useScroll())

    expect(addEventListenerSpy).toHaveBeenCalledWith(
      'scroll',
      expect.any(Function)
    )
    addEventListenerSpy.mockRestore()
  })
})
