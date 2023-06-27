import { describe, expect, it } from 'vitest'
import { isArray, isMap, isNull, isString, isSymbol, isType, isUndefined, isWeakSet, typeOf } from '.'

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

  it('is symbol', () => {
    expect(isSymbol(Symbol('test symbol'))).toBe(true)
  })

  it('is map', () => {
    expect(isMap(new Map())).toBe(true)
  })

  it('is weak set', () => {
    expect(isWeakSet(new WeakSet())).toBe(true)
  })

  it('type of', () => {
    expect(typeOf([])).toMatchInlineSnapshot('"array"')
  })

  it('is type', () => {
    expect(isType('boolean')(false)).toBe(true)

    expect(isType('number')(1)).toBe(true)

    expect(isType('weak-map')(new WeakMap())).toBe(true)
  })
})

// const ret = null
// console.log(isType('null')(ret))

// const big = BigInt("0x1fffffffffffff")
// console.log('b', Object.prototype.toString.call(big))
