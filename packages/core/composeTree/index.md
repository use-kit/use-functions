---
category: '@Core'
---

# composeTree

compose tree.

## Usage

```ts
import { composeTree } from '@use-kit/functions'

const list = [{ id: 'nogi', }, { id: 'asuka', parent: 'nogi' }, { id: 'shiori', parent: 'nogi' }]
const ret = composeTree(list)

// expect:
// [{ id: 'nogi', children: [{ id: 'asuka', parent: 'nogi' }, { id: 'shiori', parent: 'nogi' }] }]
```
