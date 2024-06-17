import { useEffect, useState } from 'react';
import axios from "axios"


function App() {

  const [clicker,setClicker] = useState(1);

  return (
    <>
      <button onClick={function(){
        setClicker(1)
        }}>1</button>
      <button onClick={function(){
        setClicker(2)
        }}>2</button>
      <button onClick={function(){
        setClicker(3)
        }}>3</button>
      <button onClick={function(){
        setClicker(4)
        }}>4</button>
      <Todo id={clicker} />
    </>
  )
}



function Todo({id}){
  const [todo, setTodo] = useState({});

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todo?id=" + id)
      .then(async function(response){
        setTodo(response.data.todo)
      })
  },[id])
  return(
    <>
      <h1>{todo.title}</h1>
      <h2>{todo.description}</h2>

      {/* <h1>{props.title}</h1>
      <h2>{props.description}</h2> */}
    </>
  )
}

export default App
