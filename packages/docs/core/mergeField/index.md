---
category: '@Core'
---

# mergeField

Merge object field. It returns the modified target object.

## Usage

```ts{4}
import { mergeField } from '@use-kit/functions'

const ret = mergeField({ a: 'a', d: 'd' }, { a: 'b', b: 'b', c: 'c' })
// ret: { a: 'b', d: 'd', b: 'b', c: 'c' }
```
