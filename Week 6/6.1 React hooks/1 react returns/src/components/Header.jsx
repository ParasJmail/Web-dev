// export default function Header({title}){
//     return
//     (
//         <div>
//             {title}

//         </div>
//     )
// }

export const Header = React.memo(function (props){
  return(
    <div>
      {props.title}
    </div>
  )
})



