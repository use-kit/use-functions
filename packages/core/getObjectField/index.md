---
category: '@Core'
---

# objectFilter

filter object field.

## Usage

```ts
import { getObjectField } from '@use-kit/functions'

const obj = { name: 'auska', age: 23, height: 158 }
const ret = getObjectField(obj, ['name']) // { name: 'asuka' }
```
