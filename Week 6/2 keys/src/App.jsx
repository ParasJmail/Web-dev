import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from '../Components/Todo'

let counter = 4

function App() {

  const [todos, setTodos] = useState([{
    id:1,
    title:"todo 1",
    description:"todo desc 1"
  },{
    id:2,
    title:"todo 2",
    description:"todo desc 2"
  },{
    id:3,
    title:"todo 3",
    description:"todo desc 3"
  }])

  function addTodo(){
    setTodos([...todos,{
      id:counter++,
      title:Math.random(),
      description:Math.random(),
    }])
  }

  return (
    <>
      <button onClick={addTodo}>Add Todo</button>
      {/* {todos.map(todo => <Todo title={todo.title} description={todo.description} />)} */}
      {
        todos.map(function(todo){
          return <Todo key={todo.id} title={todo.title} description={todo.description} />
        })
      }
    </>
  )
}



export default App
