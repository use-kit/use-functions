import { describe, expect, it } from 'vitest'
import { convertCoordToDMS } from '.'

describe('convertCoordToDMS', () => {
  it('should convert coordinates to DMS format', () => {
    expect(convertCoordToDMS(121.23456789)).toMatchInlineSnapshot(`
      {
        "degrees": 121,
        "minutes": 14,
        "seconds": "04",
      }
    `)
    expect(convertCoordToDMS(-121.23456789)).toMatchInlineSnapshot(`
      {
        "degrees": -122,
        "minutes": 45,
        "seconds": 56,
      }
    `)

    expect(convertCoordToDMS(21.23456789)).toMatchInlineSnapshot(`
      {
        "degrees": 21,
        "minutes": 14,
        "seconds": "04",
      }
    `)
    expect(convertCoordToDMS(-21.23456789)).toMatchInlineSnapshot(`
      {
        "degrees": -22,
        "minutes": 45,
        "seconds": 56,
      }
    `)
  })
})
