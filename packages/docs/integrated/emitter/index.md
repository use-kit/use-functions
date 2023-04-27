---
category: '@Integrated'
---

# emitter

Event emitter.

## Usage

```ts
import { emitter } from '@use-kit/functions'

emitter.on('asuka', () => console.log('asuka', 1))
emitter.on('nagi', () => console.log('nagi'))

emitter.off('asuka')
emitter.on('asuka', () => console.log('asuka', 2))

emitter.emit('asuka') // asuka 2
emitter.emit('nagi') // nagi

emitter.once('ume', () => console.log('ume'))
emitter.emit('ume') // ume
emitter.emit('ume')
emitter.emit('ume')
```
