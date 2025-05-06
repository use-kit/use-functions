---
category: '@Core'
---

# getRandom

Returns a random number or string or array.

## Usage

```ts
import { getRandom } from '@use-kit/functions'

const ret = getRandom() // => unique random number
const ret = getRandom(10) // => random string of length 10
const ret = getRandom(10, 20) // => random number between 10 and 20
const ret = getRandom([1, 2, 3]) // => random element from array
```
