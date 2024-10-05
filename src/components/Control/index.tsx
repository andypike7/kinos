import { FC } from 'react'
import { AddItem } from '..'
import { IControl } from './types'
import styled from 'styled-components'

const ControlWrapper = styled.div`
  display: inline-flex;
  gap: 10px;
  padding-left: 10px;
`

const Control: FC<IControl> = props => {
  const { enableAdd, onAdd, enableDelete, onDelete } = props

  return (
    <ControlWrapper>
      {enableAdd && <AddItem onAdd={onAdd} />}
      {enableDelete && <button onClick={onDelete}>&ndash;</button>}
    </ControlWrapper>
  )
}

export default Control
