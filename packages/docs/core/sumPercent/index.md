---
category: '@Core'
---

# sumPercent

Sum percentage.

## Usage

```ts
import {
  isPercent,
  sumPercent,
  toNumber,
  withPercentCalculate,
} from '@use-kit/functions'

isPercent('15%') // true
toNumber('15%') // 0.15
toNumber('15%', false) // 15

const ret = sumPercent('20%', '13%') // 33%
const ret = withPercentCalculate(20, '50%') // 10
const ret = withPercentCalculate('30', '50%') // 15
const ret = withPercentCalculate('20%', '50%') // 70%
```
