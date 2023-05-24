import { describe, expect, it } from 'vitest'
import { withDefaultObject } from '.'

describe('default object', () => {
  it('should', () => {
    expect(
      withDefaultObject({ x: 1 }, { x: 0, y: 0 }),
    ).toMatchInlineSnapshot(`
      {
        "x": 1,
        "y": 0,
      }
    `)
  })
})
