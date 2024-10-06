import { FC } from 'react'
import { TreeItem } from '..'
import { defaultTree } from './constants'

const Tree: FC = props => {
  const { tree = defaultTree } = props

  return (
    <ul>
      <TreeItem {...tree} />
    </ul>
  )
}

export default Tree
