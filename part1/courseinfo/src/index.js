import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
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

const Total = (props) => {
  return (
    <p>
      Total exersise {props.exercises1 + props.exercises2 + props.exercises3}
    </p>
  )
}

const Content = ({parts}) => {

  const [first,second,third,forth] = parts

  return(
    <div>
      <Header course={first.course} />
      <Part part={second.name} exercises={second.exercises}/> 
      <Part part={third.name} exercises={third.exercises}/>
      <Part part={forth.name} exercises={forth.exercises}/>
      <Total exercises1={second.exercises} exercises2={third.exercises} exercises3={forth.exercises}/> 
    </div> 
  )
}




const App = () => {
  const parts = [
    {
      course:'Half Stack application development'
    },
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

  return (
    <> 
      <Content parts={parts} />     
    </>    
  )
}

ReactDOM.render(<App />, document.getElementById('root'))