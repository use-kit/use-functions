// TODO:
---
category: '@Core'
---

# stringByteSize

Checks if a string is of a certain length.

## Usage

```ts
import { stringByteSize } from '@use-kit/functions'

stringByteSize('') // 0
stringByteSize('a') // 1
stringByteSize('ab') // 2
stringByteSize('abc') // 3
stringByteSize('abcd') // 4
stringByteSize('abcde') // 5
stringByteSize('😜') // 4
```
