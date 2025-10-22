const throttleIIFE = (() => {
  let last = 0

  return (callback: Function, wait = 700) => {
    const now = +new Date()
    if (now - last > wait) {
      callback()
      last = now
    }
  }
})()

function throttleFn(callback: Function, delay = 700) {
  let timer: NodeJS.Timeout | null = null

  return function (...args: any) {
    if (!timer) {
      timer = setTimeout(() => {
        callback(...args)
        timer = null
      }, delay)
    }
  }
}

export function throttle<T extends (this: any, ...args: any[]) => any>(
  fn: T,
  wait = 700,
  options: { leading?: boolean; trailing?: boolean } = { leading: true, trailing: true },
) {
  let lastCallTime = 0
  let timer: ReturnType<typeof setTimeout> | null = null
  let lastCall: (() => ReturnType<T>) | null = null
  let result: ReturnType<T> | undefined

  const invoke = () => {
    if (!lastCall)
      return
    lastCallTime = Date.now()
    result = lastCall()
    lastCall = null
  }

  const throttled = function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    const now = Date.now()
    if (!lastCallTime && options.leading === false)
      lastCallTime = now

    const remaining = wait - (now - lastCallTime)
    // capture the call in a closure to avoid aliasing `this`
    lastCall = () => fn.apply(this, args) as ReturnType<T>

    if (remaining <= 0) {
      if (timer) {
        clearTimeout(timer)
        timer = null
      }
      invoke()
    }
    else if (!timer && options.trailing !== false) {
      timer = setTimeout(() => {
        timer = null
        if (options.leading === false)
          lastCallTime = 0

        invoke()
      }, remaining)
    }

    return result as ReturnType<T>
  }

  throttled.cancel = () => {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    lastCall = null
    lastCallTime = 0
  }

  throttled.flush = () => {
    if (timer) {
      clearTimeout(timer)
      timer = null
      invoke()
    }
  }

  return throttled as T & { cancel(): void; flush(): void }
}
