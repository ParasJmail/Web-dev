import { useEffect, useMemo } from "react";
import { useState } from "react";
import axios from "axios";

function useTodos(){
  const [todos, setTodos] = useState([]);
  
  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos")
      .then((res) => {
        setTodos(res.data.todos)
      })
  },[])

  return todos;
}

function App() {
  // const [todos, setTodos] = useState([]);
  
  // useEffect(() => {
  //   axios.get()
  //     .then((res) => {
  //       setTodos(res.data.todos)
  //     })
  // },[])

  const todos = useTodos();

  return <div>
    {todos.map(todo => <Todo props={todo}/>)}
  </div>
}

function Todo({props}){
  return <div>
    <h1>{props.title}</h1>
    <p>{props.description}</p>
  </div>
}

export default App;