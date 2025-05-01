import { describe, expect, it, vi } from 'vitest'
import { cacheField } from '.'

describe('cacheField', () => {
  it('should cache the result of the provider function', async () => {
    const provider = vi.fn(() => 'test')
    const result = await cacheField('test', provider)
    expect(result).toBe('test')
    expect(provider).toHaveBeenCalledTimes(1)
  })

  it('should return the cached result if the field already exists', async () => {
    const provider = vi.fn(() => 'test2')
    const ret = await cacheField('test', provider)
    expect(ret).toBe('test')
    expect(provider).toHaveBeenCalledTimes(0)
  })
})
