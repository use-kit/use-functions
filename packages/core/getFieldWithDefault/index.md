---
category: '@Core'
---

# getField

Get object field with multiple default fields.

## Usage

```ts
import { getFieldWithDefault } from '@use-kit/functions'

const obj = { name: 'asuka', age: 23, height: 158 }
const ret = getFieldWithDefault(obj, obj.id, obj.name, obj.nickname) // 'asuak'
```
