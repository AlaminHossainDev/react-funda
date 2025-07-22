import Actor from './Actor';
import './App.css'
import Todo from './Todo';

function App() {
  const actors =['sakib khan', 'shoriful raj', 'bapparaj', 'Pasha vai', 'shimul', "Salman shah"]
  return (
    <>
    {actors.map(actor => <Actor name = {actor} ></Actor> )}
    <Actor></Actor>









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

function Device() {
  return( <div className="div1">
    <h1>Device world</h1>
    <h2>This is device no </h2>
  </div>)
}


const {name, grade, score } ={name: "nothing", grade: '00', score: "00"};

function Student({name, grade, score }) {
  console.log(name)
  return (
    <div className='div2'>
      <h3>This is student name is : {name} </h3>
      <p>grade is {grade}</p>
      <p>score is {score}</p>
    </div>
  )
}



export default App
