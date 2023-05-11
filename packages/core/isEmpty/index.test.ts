import { describe, expect, it } from 'vitest'
import { isEmpty } from '.'

describe('is empty', () => {
  it('null undefined', () => {
    expect(isEmpty(null)).toBe(true)
    expect(isEmpty(undefined)).toBe(true)
  })

  it('string', () => {
    expect(isEmpty('akashi')).toBe(false)
    expect(isEmpty('undefined')).toBe(false)
    expect(isEmpty('')).toBe(true)
  })

  it('array', () => {
    expect(isEmpty([])).toBe(true)
    expect(isEmpty(['asuka'])).toBe(false)
  })

  it('object', () => {
    expect(isEmpty({})).toBe(true)
    expect(isEmpty({ name: 'akashi' })).toBe(false)
  })

  it('should be true', () => {
    expect(isEmpty()).toBe(true)
  })
})
