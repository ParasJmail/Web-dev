import { useEffect, useMemo, memo } from "react";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  
  function inputFunction(){
    console.log("hi there")
  }

  // function logSomething(){
  //   console.log("Child Clicked")
  // }

  return <div>
    <ButtonComponent inputFunction={inputFunction} />
    {/* <ButtonComponent inputFunction={logSomething} /> */}
    <button onClick={() => {
      setCounter(counter + 1);
    }}>Counter ({counter})</button>
  </div>
}

const ButtonComponent = memo(({inputFunction}) => {
  console.log("child render")

  return <div>
    <button onClick={inputFunction}>Button Clicked</button>
  </div>
})

export default App;