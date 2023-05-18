import { describe, expect, it } from 'vitest'
import { sum } from '.'

describe('sum', () => {
  it('n & n', () => {
    expect(sum(1, 2)).toBe(3)
  })

  it('n & sn', () => {
    expect(sum(1, '3')).toBe(4)
  })

  it('sn & sn', () => {
    expect(sum('2', '3')).toBe(5)
  })

  it('n & s', () => {
    expect(sum(3, 'a')).toBe('3a')
  })

  it('s & s', () => {
    expect(sum('b', 'c')).toBe('bc')
  })
})
