import { describe, expect, it } from 'vitest'
import { isArray, isNull, isString, isType, isUndefined } from '.'

describe('should', () => {
  it('is null', () => {
    expect(isNull(null)).toBe(true)
  })

  it('is undefined', () => {
    expect(isUndefined(undefined)).toBe(true)
  })

  it('is string', () => {
    expect(isString('akashi')).toBe(true)
  })

  it('is array', () => {
    expect(isArray([])).toBe(true)
  })

  it('is type', () => {
    expect(isType('boolean')(false)).toBe(true)

    expect(isType('number')(1)).toBe(true)
  })
})

// const ret = null
// console.log(isType('null')(ret))

// const big = BigInt("0x1fffffffffffff")
// console.log('b', Object.prototype.toString.call(big))
