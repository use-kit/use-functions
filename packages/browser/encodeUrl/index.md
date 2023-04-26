---
category: '@Browser'
---

# encodeUrl

Encode url params.

## Usage

```ts
import { decryptUrlParam, encryptUrlParam, getUrlQuery } from '@use-kit/functions'

const query = getUrlQuery()
const encrypt = encryptUrlParam(query)
const decrypt = decryptUrlParam(encrypt)
```
