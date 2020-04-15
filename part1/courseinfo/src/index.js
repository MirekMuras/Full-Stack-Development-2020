import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({course}) => {
  return (
    <div>
      <h1>{course.name}</h1>
    </div>
  )
}

const Part = (props) => {
  return(
      <p>{props.part} {props.exercises}</p>     
  )
}  

const Total = (props) => {
  return (
    <p>
      Total exersise {props.exercises1 + props.exercises2 + props.exercises3}
    </p>
  )
}

const Content = ({course}) => {

  const [first,second,third] = course.parts

  return(
    <div>
      <Part part={first.name} exercises={first.exercises}/> 
      <Part part={second.name} exercises={second.exercises}/>
      <Part part={third.name} exercises={third.exercises}/>
      <Total exercises1={first.exercises} exercises2={second.exercises} exercises3={third.exercises}/> 
    </div> 
  )
}




const App = () => {
  const course = {
  name:'Half Stack application development',
   parts: [    
    {
    name:'Fundamentals of React',
    exercises: 10
    },
    {
    name: 'Using props to pass data',
    exercises: 7
    },
    {
    name: 'State of a component',
    exercises: 14
    },    
  ]
}

  return (
    <> 
      <Header course={course} />
      <Content course={course}/>     
    </>    
  )
}

ReactDOM.render(<App />, document.getElementById('root'))