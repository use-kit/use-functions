---
category: '@Core'
---

# isType

Judgment field type.

## Usage

```ts
import { isString, isArray, isType } from '@use-kit/functions'

const string = isString('')        // true
const array = isArray(1)           // false
const type = isType('array')([])   // true
```
