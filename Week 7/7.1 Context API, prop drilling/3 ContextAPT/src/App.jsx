// without context API

import { useState } from 'react'
import './App.css'
import { CountContext } from './context'
import { useContext } from 'react'

function App() {
  const [count, setCount] = useState(0)

  //wrap anyone that want to use the teleported value inside a provider
  return (
    <>
      <div>
        <CountContext.Provider value={{count, setCount}}>
          <Count setCount={setCount}/>
        </CountContext.Provider>
        
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
  const {count} = useContext(CountContext);
  return <div>
    {count}
  </div>
}

function Buttons(){

  const {count,setCount} = useContext(CountContext);
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
