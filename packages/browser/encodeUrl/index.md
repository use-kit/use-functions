---
category: '@Browser'
---

# encodeUrl

Encode url params.

## Usage

```ts
import {
  decryptUrlParam,
  encryptUrlParam,
  getUrlQuery
} from '@use-kit/functions'

// case 1:
const query = getUrlQuery() // get window.location.href
const encrypt = encryptUrlParam(query)
const decrypt = decryptUrlParam(encrypt)

// case 2:
const q = getUrlQuery('https://www.nogi.com/member?age=19&cate=3')
// { age: '19', cate: '3' }

// Execute in browser environment
const en = encryptUrlParam(q)
const de = decryptUrlParam(en)
```
