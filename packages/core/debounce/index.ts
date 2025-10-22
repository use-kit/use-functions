const debounceIIFE = (() => {
  let timer: number | null = null

  return (callback: Function, wait = 700) => {
    timer && clearTimeout(timer)
    timer = setTimeout(callback, wait)
  }
})()

function debounceFn(callback: Function, delay = 700) {
  let timer: NodeJS.Timeout | null = null

  return function (...args: any) {
    if (timer)
      clearTimeout(timer)

    timer = setTimeout(() => {
      callback(...args)
    }, delay)
  }
}

export function debounce<T extends (this: any, ...args: any[]) => any>(
  fn: T,
  wait = 700,
  options: { leading?: boolean; trailing?: boolean } = { leading: false, trailing: true },
) {
  let timer: ReturnType<typeof setTimeout> | null = null
  let lastCall: (() => ReturnType<T>) | null = null
  let result: ReturnType<T> | undefined
  let calledLeading = false

  const invoke = () => {
    if (!lastCall)
      return
    result = lastCall()
    lastCall = null
    calledLeading = true
  }

  const clear = () => {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
  }

  const debounced = function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    if (timer)
      clear()

    if (options.leading && !calledLeading) {
      // leading 立即触发，不使用 lastCall 闭包以避免重复调度
      result = fn.apply(this, args) as ReturnType<T>
      calledLeading = true
      timer = setTimeout(() => {
        calledLeading = false
        timer = null
      }, wait)
      return result
    }

    // capture the call in a closure that binds `this` and args without aliasing `this`
    lastCall = () => fn.apply(this, args) as ReturnType<T>

    if (options.trailing !== false) {
      timer = setTimeout(() => {
        invoke()
        timer = null
      }, wait)
    }

    return result
  }

  debounced.cancel = () => {
    clear()
    lastCall = null
    calledLeading = false
  }

  debounced.flush = () => {
    if (timer) {
      clear()
      invoke()
    }
    return result
  }

  return debounced as T & { cancel(): void; flush(): ReturnType<T> | undefined }
}
