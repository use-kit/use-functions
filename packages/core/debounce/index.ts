export const debounce = (() => {
  let timer: number | null = null

  return (callback: Function, wait = 700) => {
    timer && clearTimeout(timer)
    timer = setTimeout(callback, wait)
  }
})()
