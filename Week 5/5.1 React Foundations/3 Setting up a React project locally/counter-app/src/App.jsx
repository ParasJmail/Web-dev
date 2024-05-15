import {useState} from "react"

// let state = {
//   count: 0
// }

function App() {

  const [count,setCount] = useState(0);

  

  return (
    <>
      <div>
        {/* <button onClick={onClickHandler}>Counter {count}</button> */}
        <CustomButton count={count} setCount={setCount}></CustomButton>
      </div>
    </>
  )
}

function CustomButton(props){
  function onClickHandler(){
    // state.count = state.count + 1;
    props.setCount(props.count + 1);
  }
  return (
    <button onClick={onClickHandler}>
      Counter {props.count}
    </button>
  )
}

export default App
