import { describe, expect, it } from 'vitest'
import { hasField } from '.'

describe('hasField', () => {
  it('should to return boolen', () => {
    const obj = { akashi: true }

    expect(hasField(undefined, 'akashi')).toBeFalsy()
    expect(hasField(null, 'akashi')).toBeFalsy()

    expect(hasField(obj, 'akashi')).toBeTruthy()
    expect(hasField(obj, 'asuak')).toBeFalsy()
  })
})
