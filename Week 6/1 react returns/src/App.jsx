import React, { useState } from "react"
// import {Header} from "./components/Header.jsx"
// import { HeaderWithButtons } from "./components/minimizeReRender/HeaderWithButtons.jsx";

function App() {

  // const [title,setTitle] = useState("my name is paras");

  // function updateTitle(){
  //   setTitle("my name is " + Math.random());
  // }

  // return (
  //     <div>
  //       <button onClick={updateTitle}>Change title</button>
  //       <Header title={title} />
  //       <Header title="paras" />
  //       <Header title="paras" />
  //       <Header title="paras" />
  //       <Header title="paras" />
  //       <Header title="paras" />
  //     </div>
  // )

  return (
    <div>
      <HeaderWithButtons />
      <br/>
      <Header title="my name is paras" />
    </div>
  )
}

function HeaderWithButtons(){
  const [title,setTitle] = useState("my name is paras1");

  function updateTitle(){
      setTitle("my name is " + Math.random());
  }

  return(
      <>
          <h1>3.1 minimize the rerender</h1>
          <h2>push the state down</h2>


          <button onClick={updateTitle}>update title0</button>
          <Header title={title} />
      </>
  )
}
const Header = React.memo(function({title}){
  return(
    <div>
      {title}
    </div>
  )
})

export default App
