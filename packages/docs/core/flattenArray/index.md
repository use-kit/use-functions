---
category: '@Core'
---

# flattenArray

Flat array.

## Usage

```ts
import { flattenArray } from '@use-kit/functions'

const array = ['asuka', ['shiori', 'mizuki']]
const ret = flattenArray(array) // [ 'asuka', 'shiori', 'mizuki' ]
```
