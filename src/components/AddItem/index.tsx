import { FC, useState } from 'react'

const AddItem: FC<IAddItem> = props => {
  const { onAdd } = props

  const [name, setName] = useState('')
  const [isExpanded, setIsExpanded] = useState(false)

  const expand = (state: boolean) => {
    setIsExpanded(state)
  }

  const add = (isDir?: boolean) => {
    const str = name.trim()

    if (str !== '') {
      onAdd(str, isDir)
      setName('')
    }

    expand(false)
  }

  return (
    <span>
      {isExpanded
        ? <>
          <input value={name} onInput={evt => setName(evt.target.value)} />
          <button onClick={() => add()}>+FILE</button>
          <button onClick={() => add(true)}>+DIR</button>
          <button onClick={() => expand(false)}>X</button>
        </>
        : <button onClick={() => expand(true)}>+</button>
      }
    </span>
  )
}

export default AddItem
