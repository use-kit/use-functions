---
category: '@Core'
---

# throttle

Creates a throttled function that only invokes func at most once per every wait milliseconds.

## Usage

```ts
import { throttle } from '@use-kit/functions'

throttle(() => console.log('test'), 2000)
```
