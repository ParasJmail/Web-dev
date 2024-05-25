
function App() {

  return (
    <div style={{display: "flex"}}>
      <Card>
        hi there
      </Card>
      <Card>
        <div>
          hello from the 2nd card
        </div>
      </Card>
    </div>
  )
}

function Card({children}) {
  return <div style={{
    border: "1px solid black",
    padding: 10,
    margin: 10
  }}>
    {children}
  </div>
}




// //real wrap --> correct way
// function App(){
//   return(
//     <div>
//       <CardWrapper>
//         hi there
//       </CardWrapper>
//       <CardWrapper>
//       <CardWrapper>
//         <TextComponent />
//       </CardWrapper>
//       </CardWrapper>
//     </div>
//   )
// }

// function CardWrapper({children}){

//   return (
//     <div style={{border:"2px solid black",padding:20}}>
//       {children}
//     </div>
//   )
// }

// function TextComponent(){
//     return(
//       <div>
//         hi from text component
//       </div>
//     )
//   }


// function App() {

//   return (
//     <>
//       <CardWrapper innerComponent = {<TextComponent />} />
//       <CardWrapper innerComponent = {<TextComponent2 />} />
//     </>
//   )
// }

// function CardWrapper({innerComponent}){

//   return (
//     <div style={{border:"2px solid black",padding:"20 solid purple"}}>
//       {innerComponent}
//     </div>
//   )
// }

// function TextComponent(){
//   return(
//     <div>
//       Hello
//     </div>
//   )
// }
// function TextComponent2(){
//   return(
//     <div>
//       Hello world
//     </div>
//   )
// }



export default App
