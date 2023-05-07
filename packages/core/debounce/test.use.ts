import { debounce } from '.'

setTimeout(() => {
  // 防抖
  debounce(() => {
    console.log('debounce:', Math.random() * 10)
  }, 200)

  debounce(() => {
    console.log('debounce:', Math.random() * 10)
  }, 500)

  debounce(() => {
    console.log('debounce:', Math.random() * 10)
  }, 1000)

  debounce(() => {
    console.log('debounce:', Math.random() * 10)
  }, 2000)
}, 2000) // 2s 内只调用一次
