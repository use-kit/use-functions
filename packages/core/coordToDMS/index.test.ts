import { describe, expect, it } from 'vitest'
import { convertCoordToDMS, convertCoordToDecimalDegrees, coordToDMS } from '.'

describe('coordToDMS', () => {
  it('should coordinates to DMS format', () => {
    expect(coordToDMS(121.23456789)).toMatchInlineSnapshot(`
      {
        "degrees": 121,
        "minutes": 14,
        "seconds": 4,
      }
    `)
    expect(coordToDMS(-121.23456789)).toMatchInlineSnapshot(`
      {
        "degrees": 122,
        "minutes": 45,
        "seconds": 56,
      }
    `)

    expect(coordToDMS(21.23456789)).toMatchInlineSnapshot(`
      {
        "degrees": 21,
        "minutes": 14,
        "seconds": 4,
      }
    `)
    expect(coordToDMS(-21.23456789)).toMatchInlineSnapshot(`
      {
        "degrees": 22,
        "minutes": 45,
        "seconds": 56,
      }
    `)
  })
})

describe('convertCoordToDecimalDegrees', () => {
  it('should convert coordinates to decimal degrees', () => {
    expect(convertCoordToDecimalDegrees([31.22222, 121.45806])).toMatchInlineSnapshot(`
      [
        "31.2222° N",
        "121.4581° E",
      ]
    `)
    expect(convertCoordToDecimalDegrees([-38.416097, -63.616672])).toMatchInlineSnapshot(`
      [
        "38.4161° S",
        "63.6167° W",
      ]
    `)
  })
})

describe('convertCoordToDMS', () => {
  it('should convert coordinates to DMS format', () => {
    expect(convertCoordToDMS([31.22222, 121.45806])).toMatchInlineSnapshot(`
      [
        "31°13'20\\" N",
        "121°27'29\\" E",
      ]
    `)
    expect(convertCoordToDMS([-38.416097, -63.616672])).toMatchInlineSnapshot(`
      [
        "39°35'2\\" S",
        "64°22'60\\" W",
      ]
    `)
  })
})
