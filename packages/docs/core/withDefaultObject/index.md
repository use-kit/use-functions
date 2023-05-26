---
category: '@Core'
---

# withDefaultObject

Assignment with default object value.

## Usage

```ts{4}
import { withDefaultObject } from '@use-kit/functions'

const ret = withDefaultObject({ x: 1 }, { x: 0, y: 0 })
// ret: { x: 1, y: 0 }
```
