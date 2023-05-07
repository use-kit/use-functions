---
category: '@Core'
---

# uniqueArray

Unique array.

## Usage

```ts
import { uniqueArray } from '@use-kit/functions'

const arr = [1, 2, 2, '1', 'ab', 'ac', 'ab']
const ret = uniqueArray(arr)

// expect: [1, 2, '1', 'ab', 'ac']

const arr = [
  { id: 1, name: 'akashi' },
  { id: 2, name: 'asuka' },
  { id: 3, name: 'akashi' },
  { id: 4, name: 'shiori' },
]
const ret = uniqueArray(arr)

// expect: [
//   {
//     "id": 1,
//     "name": "akashi",
//   },
//   {
//     "id": 2,
//     "name": "asuka",
//   },
//   {
//     "id": 4,
//     "name": "shiori",
//   },
// ]
```
