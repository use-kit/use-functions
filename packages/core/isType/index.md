---
category: '@Core'
---

# isType

Judgment field type.

## Usage

```ts
import { isArray, isString, isType } from '@use-kit/functions'

const string = isString('') // true
const array = isArray(1) // false
const type = isType('array')([]) // true
```
