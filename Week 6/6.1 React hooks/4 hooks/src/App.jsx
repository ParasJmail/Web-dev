import { useState } from "react";
import { useEffect } from "react"


function App() {
  //Assignment No 1
  const [todos,setTodos] = useState([]);

  // useEffect(function(){
  //   alert("hi")
  // },[])

  
  useEffect(function(){
    setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos")
      .then(async (response) => {
        const json = await response.json();
        setTodos(json.todos)
      })
    },10000)
  },[])

  return (
    <>
      <div>
        {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
      </div>
    </>
  )
}

function Todo(props){

  return(
    <>
      <h1>
        {props.title}
      </h1>
      <h2>
        {props.description}
      </h2>
    </>
  )
}

export default App
