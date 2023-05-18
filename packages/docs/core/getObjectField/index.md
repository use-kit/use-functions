---
category: '@Core'
---

# objectFilter

Filter object field.

## Usage

```ts
import { getObjectField, objectFilter } from '@use-kit/functions'

const obj = { name: 'asuka', age: 23, height: 158 }
const ret = getObjectField(obj, ['name']) // { name: 'asuka' }

// The same way you can do
const ret = objectFilter(obj, (key, value) => key === 'name')
```
