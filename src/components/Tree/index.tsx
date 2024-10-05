import { FC } from 'react'
import { TreeItem } from '..'
import { mockupTree } from './mockup'

const Tree: FC = () => {
  const tree = { ...mockupTree } // { name: 'Root' }

  return (
    <ul>
      <TreeItem {...tree} />
    </ul>
  )
}

export default Tree
