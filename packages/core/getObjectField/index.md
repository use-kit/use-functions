---
category: '@Core'
---

# objectFilter

Filter object field.

## Usage

```ts
import { getObjectField } from '@use-kit/functions'

const obj = { name: 'asuka', age: 23, height: 158 }
const ret = getObjectField(obj, ['name']) // { name: 'asuka' }
```
