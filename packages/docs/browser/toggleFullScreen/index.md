---
category: '@Browser'
---

# fullScreen

Full Screen.

## Usage

```ts
import { exitFullScreen, fullScreen, toggleFullScreen } from '@use-kit/functions'

const isFullscreen = ref(false)
const toggleScreen = () => {
  isFullscreen.value ? exitFullScreen() : fullScreen()
  isFullscreen.value = !isFullscreen.value
}

// or
toggleFullScreen()
```
