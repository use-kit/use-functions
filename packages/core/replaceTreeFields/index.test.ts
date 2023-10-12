import { describe, expect, it } from 'vitest'
import { replaceTreeFields } from '.'

describe('replaceTreeFields', () => {
  it('should replace tree fields', () => {
    const tree = {
      id: 1,
      name: 'test',
      children: [
        {
          id: 2,
          name: 'test2',
          children: [
            {
              id: 3,
              name: 'test3',
              children: [
                {
                  id: 4,
                  name: 'test4',
                },
              ],
            },
          ],
        },
      ],
    }

    const replaceFields = {
      id: 'key',
      name: 'field',
      children: 'subNode',
    }

    expect(replaceTreeFields([tree], replaceFields)).toMatchInlineSnapshot(`
      [
        {
          "children": [
            {
              "children": [
                {
                  "children": [
                    {
                      "id": 4,
                      "name": "test4",
                    },
                  ],
                  "id": 3,
                  "name": "test3",
                },
              ],
              "id": 2,
              "name": "test2",
            },
          ],
          "field": "test",
          "id": 1,
          "key": 1,
          "name": "test",
          "subNode": [
            {
              "children": [
                {
                  "children": [
                    {
                      "id": 4,
                      "name": "test4",
                    },
                  ],
                  "id": 3,
                  "name": "test3",
                },
              ],
              "field": "test2",
              "id": 2,
              "key": 2,
              "name": "test2",
              "subNode": [
                {
                  "children": [
                    {
                      "id": 4,
                      "name": "test4",
                    },
                  ],
                  "field": "test3",
                  "id": 3,
                  "key": 3,
                  "name": "test3",
                  "subNode": [
                    {
                      "field": "test4",
                      "id": 4,
                      "key": 4,
                      "name": "test4",
                      "subNode": undefined,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ]
    `)
  })
})
