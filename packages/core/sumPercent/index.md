---
category: '@Core'
---

# sumPercent

Sum percentage.

## Usage

```ts
import { isPercent, sumPercent, toNumber } from '@use-kit/functions'

isPercent('15%') // true
toNumber('15%') // 0.15
toNumber('15%', false) // 15
const ret = sumPercent('20%', '13%') // 33%
```
