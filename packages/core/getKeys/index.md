---
category: '@Core'
---

# getKeys

Get keys.

## Usage

```ts{6,7}
import { getKeys } from '@use-kit/functions'

const p = { name: 'asuka', age: 24 }
const ret = getKeys(p)
// [
//   "name",
//   "age",
// ]
```
