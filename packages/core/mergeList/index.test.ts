import { describe, expect, it } from 'vitest'
import { mergeList } from '.'

describe('merge field', () => {
  const targetList = [{
    id: 1,
    name: 'akashi',
  }, {
    id: 2,
    name: 'asuka',
  }, {
    id: 3,
    name: 'shiori',
  }]

  const sourceList = [{
    id: '01',
    name: 'akashi',
  }, {
    id: '02',
    name: 'asuka',
  }, {
    id: '03',
    name: 'shiori',
  }]

  const ret = mergeList(targetList, sourceList, 'name')
  it('should', () => expect(ret).toMatchInlineSnapshot(`
    [
      {
        "id": "01",
        "name": "akashi",
      },
      {
        "id": "02",
        "name": "asuka",
      },
      {
        "id": "03",
        "name": "shiori",
      },
    ]
  `))
})

describe('merge with more field', () => {
  const targetList = [{
    id: 1,
    name: 'akashi',
  }, {
    id: 2,
    name: 'asuka',
  }]

  const sourceList = [{
    id: 3,
    name: 'shiori',
  }]

  const ret = mergeList(targetList, sourceList, 'id')
  it('should return merge list', () => expect(ret).toMatchInlineSnapshot(`
    [
      {
        "id": 1,
        "name": "akashi",
      },
      {
        "id": 2,
        "name": "asuka",
      },
      {
        "id": 3,
        "name": "shiori",
      },
    ]
  `))
})
