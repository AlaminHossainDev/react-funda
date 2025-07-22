// export default function Todo({task, num, isDone}) {
//     console.log(task)
//     return(
//         <div className="div2">
//             <li> {num} Task : {task}  </li>
           
//         </div>
//     )
// }


//conditional rendering 1
// export default function Todo({task, num, isDone}) {
//     if(isDone === true ){
//         return <li>Finished:{task} </li>
//     }else{
//         return <li>work on: {task}</li>
//     }
// }

//conditional rendering 2
// export default function Todo({task, num, isDone}) {
//     if(isDone === true ){
//         return <li className="div2">Finished:{task} </li>
//     }else{
//         return <li className="div3">work on: {task}</li>
//     }
// }



// ternary operation 3
// export default function Todo({task, isDone}) {
//    return(
//     <li>
//         {isDone ? 'Finished' : 'work on' } : {task}
//     </li>
//    )
// }



//conditaional operation 3 : &&
// export default function Todo({task, isDone}) {
//    return(
//     <li>
//         {task} {isDone && ': 👋Done'}
//     </li>
//    )
// }


//conditaional operation 4 : ||
export default function Todo({task, isDone}) {
   return(
    <li>
        {isDone || '😰Please finshed your '} {task} 
    </li>
   )
}