import { Tree } from './components'

import { mockupTree } from './mockup/tree'

const App = () => {
  const tree = { ...mockupTree }

  return (
    <>
      <h1>Tree List</h1>
      <Tree tree={tree} />
    </>
  )
}

export default App
