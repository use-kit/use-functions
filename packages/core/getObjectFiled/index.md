---
category: '@Core'
---

# objectFilter

filter object field.

## Usage

```ts
import { getObjectFiled } from '@use-kit/functions'

const obj = { name: 'auska', age: 23, height: 158 }
const ret = getObjectFiled(obj, ['name']) // { name: 'asuka' }
```
