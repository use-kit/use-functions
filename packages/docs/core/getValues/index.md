---
category: '@Core'
---

# getValues

Get values.

## Usage

```ts{6,7}
import { getValues } from '@use-kit/functions'

const p = { name: 'asuka', age: 24 }
const ret = getValues(p)
// [
//   "asuka",
//   24,
// ]
```
