---
category: '@Core'
---

# generateTree

Compose tree.

## Usage

```ts
import { generateTree } from '@use-kit/functions'

const list = [{ id: 'nogi', }, { id: 'asuka', parent: 'nogi' }, { id: 'shiori', parent: 'nogi' }]
const ret = generateTree(list, root, replaceFields)

// expect:
// [{ id: 'nogi', children: [{ id: 'asuka', parent: 'nogi' }, { id: 'shiori', parent: 'nogi' }] }]
```
