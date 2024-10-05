import { FC } from 'react'
import { AddItem } from '..'
import { IControl } from './types'

const Control: FC<IControl> = props => {
  const { enableAdd, onAdd, enableDelete, onDelete } = props

  return (
    <div style={{ display: 'inline-flex', gap: 10, paddingLeft: 10 }}>
      {enableAdd && <AddItem onAdd={onAdd} />}
      {enableDelete && <button onClick={onDelete}>&ndash;</button>}
    </div>
  )
}

export default Control
