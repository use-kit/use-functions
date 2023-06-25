---
category: '@Core'
---

# hasField

Is Object has a field in.

## Usage

```ts
import { hasField } from '@use-kit/functions'

const obj = { akashi: true }
const ret = hasField(obj, 'akashi') // true
const ret = hasField(obj, 'asuka') // false
```
