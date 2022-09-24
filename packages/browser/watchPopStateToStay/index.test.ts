import { describe, expect, it } from 'vitest'
import { watchPopStateToStay } from '.'

describe('should', () => {
  it('exported', () => {
    watchPopStateToStay()
    expect(1).toEqual(1)
  })
})
