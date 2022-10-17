interface Content {
  dom?: Element
  to?: 'top' | 'bottom'
}

export const scrollIntoView = (content?: Content, callback?: Function): void => {
  let el: Element | null
  const to = content?.to ?? 'top'

  if (!content?.dom)
    el = window.document.firstElementChild
  else
    el = to === 'top' ? content.dom.firstElementChild : content.dom.lastElementChild

  el?.scrollIntoView({
    behavior: 'smooth',
    block: 'nearest',
    inline: 'start',
  })

  callback && callback()
}
