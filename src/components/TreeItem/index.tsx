import { FC, useState } from 'react'
import { Control } from '..'
import { ITreeItem } from './types'

const TreeItem: FC<ITreeItem> = props => {
  const { name, items, level = 0, onDelete } = props

  const [childrenItems, setChildrenItems] = useState(() => items)

  const onAddItem = (name: string, isDir: boolean) => {

    const newItem: ITreeItem = {
      name,
      ...(isDir && { items: [] }),
    }

    setChildrenItems([...childrenItems, newItem])
  }

  const onDeleteChild = (index: number) => {
    if (!childrenItems) return

    setChildrenItems(childrenItems.filter((_, elIndex) =>
      elIndex !== index,
    ))
  }

  return (
    <>
      {name}

      <Control
        enableAdd={Boolean(items)}
        onAdd={onAddItem}
        enableDelete={level > 0}
        onDelete={onDelete}
      />

      {childrenItems && (
        <ul>
          {childrenItems?.map((item, index) => {
              return (
                <li style={{ paddingTop: 10 }} key={`${level}_${item.name}`}>
                  <TreeItem
                    name={item.name}
                    items={item.items}
                    level={level + 1}
                    onDelete={() => onDeleteChild(index)}
                  />
                </li>
              )
            },
          )}
        </ul>
      )}
    </>
  )
}

export default TreeItem
