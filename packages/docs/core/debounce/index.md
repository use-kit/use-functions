---
category: '@Core'
---

# debounce

Creates a debounced function that delays invoking func until after wait milliseconds have elapsed since the last time the debounced function was invoked.

## Usage

```ts
import { debounce } from '@use-kit/functions'

debounce(() => console.log('test'), 2000)
```
