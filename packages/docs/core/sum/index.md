---
category: '@Core'
---

# sum

Return numbers as possible whether sum  a number or string.

## Usage

```ts
import { sum } from '@use-kit/functions'

sum(1, 2) // 3
sum(1, '2') // 3
sum('1', '2') // 3
sum(1, 'a') // 1a
sum('b', 'c') // bc
```
