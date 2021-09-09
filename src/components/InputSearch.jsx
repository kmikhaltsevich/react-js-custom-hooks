import React, { useState } from 'react'
import useDebounce from '../hooks/useDebounce'

const InputSearch = () => {
  const [value, setValue] = useState('')
  const debouncedSearch = useDebounce(search, 500)

  function search (query) {
    fetch(`https://jsonplaceholder.typicode.com/todos?query=${query}`)
      .then(response => response.json())
      .then(json => console.log(json))
  }

  const onChange = e => {
    setValue(e.target.value)
    debouncedSearch(e.target.value)
  }

  return (
    <div className="block-input-search">
      <input value={value} onChange={onChange} type="text" />
    </div>
  )
}

export default InputSearch
