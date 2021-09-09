import useRequest from '../hooks/useRequest'
import axios from 'axios'
const ListRequest = () => {
  const [todos, isLoading, error] = useRequest(fetchTodos)

  function fetchTodos () {
    return axios.get('https://jsonplaceholder.typicode.com/todos')
  }

  if (isLoading) {
    return <h1 className="block-todos">loading...</h1>
  }

  if (error) {
    return <h1 className="block-todos">{error}</h1>
  }

  return (
    <div>
      <div className="block-todos">
        <h4>Todos request</h4>
        <div>
          {
            todos && todos.map(todo =>
              <div key={todo.id} className="block-todos__item">{todo.title}</div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default ListRequest
