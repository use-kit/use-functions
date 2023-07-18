---
category: '@Core'
---

# getField

Get object field.

## Usage

```ts
import { getField } from '@use-kit/functions'

const obj = { name: 'asuka', age: 23, height: 158 }
const ret = getField(obj, 'name') // 'asuak'

const ret = getField(obj, 'use', undefined) // undefined
```
