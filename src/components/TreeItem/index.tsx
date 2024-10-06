import { FC, memo, useCallback, useState } from 'react'
import { Control } from '..'
import { ITreeItem } from './types'
import styled from 'styled-components'

const TreeItemWrapper = styled.li`
  padding-top: 10px;
`

const TreeItemRaw: FC<ITreeItem> = props => {
  const { name, items, level = 0, onDelete } = props

  const [childrenItems, setChildrenItems] = useState(items)

  const onAddItem = useCallback((name: string, isDir: boolean) => {
    setChildrenItems(items => [
      ...items,
      { name, ...(isDir && { items: [] }) },
    ])
  }, [])

  const onDeleteChild = useCallback((itemToDelete: ITreeItem) => {
    setChildrenItems(items =>
      items && items.filter(item => itemToDelete !== item),
    )
  }, [])

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
          {childrenItems.map(item =>
            <TreeItemWrapper key={item.name}>
              <TreeItem
                name={item.name}
                items={item.items}
                level={level + 1}
                onDelete={() => onDeleteChild(item)}
              />
            </TreeItemWrapper>)
          }
        </ul>
      )}
    </>
  )
}

const TreeItem = memo(TreeItemRaw, (a, b) => a.name === b.name)

export default TreeItem
