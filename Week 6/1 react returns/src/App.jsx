import React, { useState } from "react"
import {Header} from "./components/Header.jsx"


function App() {

  const [title,setTitle] = useState("my name is paras");

  function updateTitle(){
    setTitle("my name is " + Math.random());
  }

  return (
      <div>
        <button onClick={updateTitle}>Change title</button>
        <Header title={title} />
        <Header title="paras" />
        <Header title="paras" />
        <Header title="paras" />
        <Header title="paras" />
        <Header title="paras" />
      </div>
  )
}
// function Header({title}){
//   return(
//     <div>
//       {title}
//     </div>
//   )
// }

export default App
