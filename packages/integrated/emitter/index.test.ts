import { describe, expect, it } from 'vitest'
import { emitter } from '.'

describe('should', () => {
  it('emitter', () => {
    let emit = 1
    emitter.on('test', (resp: number) => {
      emit = resp
    })

    emitter.emit('test', 2)
    expect(emit).toBe(2)
  })
})
