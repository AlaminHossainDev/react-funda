import './App.css';
import Singer from './Singer';

function App() {

  // const actors =['sakib khan', 'shoriful raj', 'bapparaj', 'Pasha vai', 'shimul', "Salman shah"]

  //for singer component 

  const singers = [
    { name: 'Aziza qualiva', genre: 'Pop', albums: ['Album A', 'Album B', 'Album C'] },
    { name: 'Honey Singh', genre: 'Rock', albums: ['Album X', 'Album Y'] },
    { name: 'Sakira', genre: 'Jazz', albums: ['Album M'] }
  ];

  return (
    <>

   {singers.map(singer =>(
    <Singer 
    key={singer.name}
    name={singer.name}
    albums={singer.albums}
    />
   ))}
    

    {/* <Todo num = "1" task ="learn React from Now" isDone={true} ></Todo>
    <Todo num = "2" task ="Explore the core concenft from today" isDone={false} ></Todo>
    <Todo num = "2" task ="Try Jsx" isDone={true} ></Todo>
      <Device></Device>
      <Student name= "alamin" score="96" grade="13"></Student>
      <Student name= "Hossain" score="98" grade="25"></Student>
      <Student name= "full-stack developer" score="96" grade="3"></Student> */}
    </>
  )
}

// function Device() {
//   return( <div className="div1">
//     <h1>Device world</h1>
//     <h2>This is device no </h2>
//   </div>)
// }


// const {name, grade, score } ={name: "nothing", grade: '00', score: "00"};

// function Student({name, grade, score }) {
//   console.log(name)
//   return (
//     <div className='div2'>
//       <h3>This is student name is : {name} </h3>
//       <p>grade is {grade}</p>
//       <p>score is {score}</p>
//     </div>
//   )
// }



export default App
