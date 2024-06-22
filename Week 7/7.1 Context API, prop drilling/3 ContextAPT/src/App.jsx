// without context API

import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
        <Count count={count} setCount={setCount}/>
        
      </div>
    </>
  )
}

function Count({setCount}){
  return <div>
    <CountRender />
    <Buttons setCount={setCount} />
  </div>
}

function CountRender(){
  const count = 1;
  return <div>
    {count}
  </div>
}

function Buttons({setCount}){

  const count = 1;
  return <div>
    <button onClick={() => {
      setCount(count + 1)
    }}> Increase</button>
    <button onClick={() => {
      setCount(count - 1)
    }}> Decrease</button>
  </div>
}
export default App
