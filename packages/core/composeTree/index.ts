interface Node {
  id: string
  parent: string | null
}

type CreateNode = Node & {
  children?: Node[]
}

export const composeTree = (list: Node[]) => {
  const idMapping = list.reduce((acc: any, el: any, index: number) => {
    acc[el.id] = index
    return acc
  }, {})

  let root: CreateNode | undefined

  list.forEach((el) => {
    if (!el.parent) {
      root = el
      return
    }

    const parentEl: CreateNode = list[idMapping[el.parent]]

    parentEl.children = [...(parentEl.children || []), el]
  })

  return root
}
