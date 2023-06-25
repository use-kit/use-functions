---
category: '@Core'
---

# mergeList

Merge object list field. It returns the modified target object list.

## Usage

```ts{28,32,36}
import { mergeList } from '@use-kit/functions'

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
// [
//   {
//     "id": "01",
//     "name": "akashi",
//   },
//   {
//     "id": "02",
//     "name": "asuka",
//   },
//   {
//     "id": "03",
//     "name": "shiori",
//   },
// ]
```
