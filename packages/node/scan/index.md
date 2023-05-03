---
category: '@Node'
---

# scan

Scan local file of directory.

## Usage

```ts
import { scan } from '@use-kit/functions'

const folders = scan('.', { type: 'directory', filters: ['docs', 'utils'] })
```
