import {useState} from "react"

//todo application
// todo
// {
//  todos:[{title:"todo1",description:"First todo",completed:"false"}]
// }

function App() {

  const [todos,setTodos] = useState([{
    title:"go gym",
    description:"go gym to 5-7",
    completed:false
  },{
    title:"Study",
    description:"study to 9-10",
    completed:true
  }]);

  function addTodo(){
    setTodos([...todos,{
      title:"new Todo",
      description:"desc of new todo"
    }])
  }

  return (
    <>
      <div>
        <button onClick={addTodo}>Add a random todo</button>
        {/* <Todo title={todos[0].title} description={todos[0].description} />
        <Todo title={todos[1].title} description={todos[1].description} /> */}
        {todos.map(function(todo){
          return <Todo title={todo.title} description={todo.description} />
        })}
      </div>
    </>
  )
}
// todo App,{
//   title,
//   description,
//   completed
// }
function Todo(props){
  
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
      
    </div>
  )
}

export default App
