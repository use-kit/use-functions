---
category: '@Core'
---

# isEmpty

Desensitization of mobile phone number.

## Usage

```ts
import { isEmpty } from '@use-kit/functions'

isEmpty() // true
isEmpty(null) // true
isEmpty('null') // false
isEmpty('') // true
isEmpty([]) // true
isEmpty({}) // true
```
