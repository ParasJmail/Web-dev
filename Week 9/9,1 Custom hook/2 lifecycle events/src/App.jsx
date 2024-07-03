import { useState } from 'react'
import React from 'react';
import './App.css'
import { useEffect } from 'react'

function App() {
  const [render, setRender] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setRender(false);
    },10000)
  },[])

  return (
    <>
      <div>
        {render ? <MyComponent /> : <div>2nd div</div>}
      </div>
    </>
  )
}

// // Functional
// function MyComponent() {
//   useEffect(() => {
//     // Perform setup or data fetching here
//     console.log("component mounted")
//     return () => {
//       // Cleanup code (similar to componentWillUnmount)
//       console.log("component unmounted")
//     };
//   }, []);
  // Render UI

//   return <div>
//     From inside my component
//   </div>
// }

// Class based
class MyComponent extends React.Component {
  componentDidMount() {
    // Perform setup or data fetching here
    console.log("component mounted")
  }

  componentWillUnmount() {
    // Clean up (e.g., remove event listeners or cancel subscriptions)
    console.log("component unmounted")
  }

  render() {
    // Render UI
    return <div>hi there</div>
  }
}

export default App
