// 禁用浏览器后退事件
export const watchPopStateToStay = () => {
  setTimeout(() => {
    if (!(history.state && history.state.target === 'Final')) {
      const meanSure = { target: 'MeanSure', random: Math.random() }
      const final = { target: 'Final', random: Math.random() }
      window.history.pushState(meanSure, '', location.href)
      window.history.pushState(final, '', location.href)
    }

    window.addEventListener('popstate', (e) => {
      if (e.state && e.state.target === 'MeanSure')
        history.forward()
    })
  }, 500)
}
