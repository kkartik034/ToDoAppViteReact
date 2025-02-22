
import './App.css'
import AddTodo from './components/addTodo'
import Todos from './components/todos'

function App() {


  return (
    <>
      
      <h1 className="text-3xl font-bold text-center text-blue-600 my-4">
  Learn Redux Tool Kit
</h1>
    <AddTodo />
    <Todos />
    </>
  )
}

export default App
