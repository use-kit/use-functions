---
category: '@Core'
---

# hideMobile

Desensitization of mobile phone number.

## Usage

```ts
import { hideMobile } from '@use-kit/functions'

const phone = '12345678910'
const ret = hideMobile(phone)

// expect: "123****8910"
```
