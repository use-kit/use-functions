---
category: '@Core'
---

# fuzzyQuery

Fuzzy query.

## Usage

```ts
import { fuzzyQuery } from '@use-kit/functions'

const arr = [
  { id: 1, name: 'akashi' },
  { id: 2, name: 'asuka' },
  { id: 3, name: 'shiori' },
  { id: 4, name: 'rena' },
  { id: 5, name: 'zono' },
]

const ret = fuzzyQuery(arr, 'shi', 'name')

// expect:
// [
//   {"id": 1, "name": "akashi" },
//   { "id": 3, "name": "shiori" },
// ]
```
