---
category: '@Core'
---

# cacheField

Cache a field value.

## Usage

<!-- ```ts
import { cacheField } from '@vueuse/core'

const { value, set } = cacheField()
set('foo', 'bar')
value.value // 'bar'
``` -->

```ts
import { cacheField } from '@use-kit/functions'

const ret = await cacheField('a', 'test')
```
