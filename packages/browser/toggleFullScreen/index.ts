// 全屏
export function fullScreen(id?: string) {
  const el = id
    ? document.getElementById(id)
    : document.documentElement

  const screen = (el as Element).requestFullscreen

  if (typeof screen != 'undefined')
    screen.call(el)
}

// 退出全屏
export function exitFullScreen() {
  const screen = document.exitFullscreen

  if (typeof screen != 'undefined')
    screen.call(document)
}

export function isFullScreen(): boolean {
  const element = document.fullscreenElement
    || (document as any).webkitFullscreenElement
    || (document as any).mozFullScreenElement

  return element !== undefined
}

export function toggleFullScreen(element?: HTMLElement) {
  element = element || document.documentElement

  if (isFullScreen())
    exitFullScreen()

  else
    fullScreen(element.id)
}
