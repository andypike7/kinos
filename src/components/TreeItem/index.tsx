import { FC, useState } from 'react'
import { Control } from '..'
import { ITreeItem } from './types'
import styled from 'styled-components'

const TreeItemWrapper = styled.li`
  padding-top: 10px;
`

const TreeItem: FC<ITreeItem> = props => {
  const { name, items, level = 0, onDelete } = props

  const [childrenItems, setChildrenItems] = useState(() => items)

  const onAddItem = (name: string, isDir: boolean) => {
    setChildrenItems([
      ...childrenItems,
      { name, ...(isDir && { items: [] }) },
    ])
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
          {childrenItems?.map((item, index) =>
            <TreeItemWrapper key={`${level}_${item.name}`}>
              <TreeItem
                name={item.name}
                items={item.items}
                level={level + 1}
                onDelete={() => onDeleteChild(index)}
              />
            </TreeItemWrapper>)
          }
        </ul>
      )}
    </>
  )
}

export default TreeItem
