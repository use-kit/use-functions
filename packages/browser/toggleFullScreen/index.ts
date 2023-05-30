// 全屏
export function fullScreen(id?: string) {
  const el = id
    ? document.getElementById(id)
    : document.documentElement

  const screen = (el as Element).requestFullscreen
  let wScript = null
  if (typeof screen != 'undefined' && screen) {
    screen.call(el)
    return
  }
  if (typeof window.ActiveXObject != 'undefined') {
    wScript = new ActiveXObject('WScript.Shell')
    if (wScript)
      wScript.SendKeys('{F11}')
  }
}

// 退出全屏
export function exitFullScreen() {
  const screen = document.exitFullscreen

  let wScript = null

  if (typeof screen != 'undefined' && screen) {
    screen.call(document)
    return
  }

  if (typeof window.ActiveXObject != 'undefined') {
    wScript = new ActiveXObject('WScript.Shell')
    if (wScript != null)
      wScript.SendKeys('{F11}')
  }
}

export function toggleFullScreen(element: HTMLElement) {
  element = element || document.documentElement
  if (
    (
      (document as any).fullScreenElement !== undefined
      && (document as any).fullScreenElement === null
    )
    || (
      (document as any).msFullscreenElement !== undefined
      && (document as any).msFullscreenElement === null
    )
    || (
      (document as any).mozFullScreen !== undefined
      && !(document as any).mozFullScreen
    )
    || (
      (document as any).webkitIsFullScreen !== undefined
      && !(document as any).webkitIsFullScreen
    )
  ) {
    if ((element as any).requestFullScreen)
      (element as any).requestFullScreen()

    else if ((element as any).mozRequestFullScreen)
      (element as any).mozRequestFullScreen()

    else if ((element as any).webkitRequestFullScreen)
      (element as any).webkitRequestFullScreen((Element as any).ALLOW_KEYBOARD_INPUT)

    else if ((element as any).msRequestFullscreen)
      (element as any).msRequestFullscreen()
  }
  else {
    if ((document as any).cancelFullScreen)
      (document as any).cancelFullScreen()

    else if ((document as any).mozCancelFullScreen)
      (document as any).mozCancelFullScreen()

    else if ((document as any).webkitCancelFullScreen)
      (document as any).webkitCancelFullScreen()

    else if ((document as any).msExitFullscreen)
      (document as any).msExitFullscreen()
  }
}
