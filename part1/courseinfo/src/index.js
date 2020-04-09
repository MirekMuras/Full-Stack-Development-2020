import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  console.log(props)
  return( 
    <div>
      <h1>{props.course}</h1> 
    </div>        
  )
}

const Part = (props) => {
  return(
      <p>{props.part} {props.exercises}</p>     
  )
}  

const Content = ({parts}) => {
  console.log(parts)

  const [first,second,third] = parts
  
  return(
    <div>
        <Part part={first.name} exercises={first.exercises}/> 
        <Part part={second.name} exercises={second.exercises}/> 
        <Part part={third.name} exercises={third.exercises}/> 
    </div>    
  )
}

const Total = ({parts}) => {

  const [first,second,third] = parts;

  return (
    <p>Total of exercises : {first.exercises + second.exercises + third.exercises}</p>
  )
}



const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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
    }
  ]


  return (
    <>
      <Header course={course}/>
      <Content parts={parts} />
      <Total parts={parts} />
    </>    
  )
}

ReactDOM.render(<App />, document.getElementById('root'))