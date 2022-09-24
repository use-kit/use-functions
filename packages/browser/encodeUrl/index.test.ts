import { describe, expect, it } from 'vitest'
import { getUrlQuery } from '.'

describe('should', () => {
  it('exported', () => {
    const ret = { age: '19', cate: '3' }
    expect(getUrlQuery('https://www.nogi.com/member?age=19&cate=3')).toEqual(ret)
  })
})
