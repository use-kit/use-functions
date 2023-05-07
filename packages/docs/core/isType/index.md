---
category: '@Core'
---

# isType

Judgment field type.

## Usage

```ts
import { isArray, isString, isType, typeOf } from '@use-kit/functions'

const string = isString('') // true
const array = isArray(1) // false
const type = isType('array')([]) // true
const ret = typeOf([]) // 'array'
```
