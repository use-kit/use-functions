---
category: '@Core'
---

# sumPercent

Sum percentage.

## Usage

```ts
import { percentToNumber, sumPercent } from '@use-kit/functions'

const { x, y } = percentToNumber('20%', '30%') // { x: 20, y: 30 }
const ret = sumPercent('20%', '13%') // 33%
```
