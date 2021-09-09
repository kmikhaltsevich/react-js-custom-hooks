import React, { useRef, useState } from 'react'
import useScroll from '../hooks/useScroll'

const List = () => {
  const [todos, setTodos] = useState([])
  const [page, setPage] = useState(1)
  const limit = 10
  const parentRef = useRef()
  const childRef = useRef()

  useScroll(parentRef, childRef, () => fetchTodos(page, limit))

  function fetchTodos (page, limit) {
    fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`)
      .then(response => response.json())
      .then(json => {
        setTodos([...todos, ...json])
        setPage(page => page + 1)
      })
  }

  return (
    <div>
      <div ref={parentRef} className="block-todos">
        <h4>Todos</h4>
        <div>
          {
            todos.map(todo =>
              <div key={todo.id} className="block-todos__item">{todo.title}</div>
            )
          }
        </div>
        <div ref={childRef} style={{height: 8, width: '100%', background: '#5d5d5d'}} />
      </div>
    </div>
  )
}

export default List
