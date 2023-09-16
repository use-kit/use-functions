import { describe, expect, it } from 'vitest'
import { getRatingStar } from '.'

describe('getRatingStar', () => {
  it('should return a rating', () => {
    expect(getRatingStar(5)).toMatchInlineSnapshot('"★★★★★"')
  })
})
