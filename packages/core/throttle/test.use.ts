import { throttle } from '.'

setInterval(() => {
  // 节流
  throttle(() => {
    console.log('throttle:', Math.random() * 10)
  }, 2000)
}, 500) // 多次调用但只在 2s 内响应一次
