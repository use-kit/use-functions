---
category: '@Core'
---

# getFileType

Get file type.

## Usage

```ts
import { getFileType } from '@use-kit/functions'

const ret = getFileType('asuka.jpeg') // jpeg
const ret = getFileType('shiori.use.png') // png
const ret = getFileType('application/vnd.ms-powerpoint') // ppt
const ret = getFileType('application/json', false) // Json
```
