import Inputs from './components/Inputs'
import Block from './components/Block'
import List from './components/List'
import InputSearch from './components/InputSearch'
import ListRequest from './components/ListRequest'

function App () {
  return (
    <div className="App">
      <ListRequest />
      <Inputs />
      <Block />
      <List />
      <InputSearch />
    </div>
  )
}

export default App
