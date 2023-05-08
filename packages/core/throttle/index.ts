export const throttle = (() => {
  let last = 0

  return (callback: Function, wait = 700) => {
    const now = +new Date()
    if (now - last > wait) {
      callback()
      last = now
    }
  }
})()
