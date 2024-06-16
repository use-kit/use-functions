---
category: '@Core'
---

# coordToDMS

convert coordinate to DMS/DD.

## Usage

```ts
import { convertCoordToDMS, convertCoordToDecimalDegrees, coordToDMS } from '@use-kit/functions'

coordToDMS(121.23456789)
// {
//   "degrees": 121,
//   "minutes": 14,
//   "seconds": 4,
// }

convertCoordToDecimalDegrees([31.22222, 121.45806])
// [
//   "31.2222° N",
//   "121.4581° E",
// ]

convertCoordToDMS([-38.416097, -63.616672])
// [
//   "39°35'2\\" S",
//   "64°22'60\\" W",
// ]
```
