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

const Content = (props) => {
  return(
    <div>
        <Part part={props.name} exercises={props.exercises}/> 
    </div>    
  )
}

const Total = (props) => {
  return(
    <div>
      <p>Number of exercises {props.exercisesA + props.exercisesB + props.exercisesC}</p>
    </div>      
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name:'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }


  return (
    <>
      <Header course={course}/>
      <Content name={part1.name} exercises={part1.exercises} />
      <Content name={part2.name} exercises={part2.exercises} />
      <Content name={part3.name} exercises={part3.exercises} />
      <Total exercisesA={part1.exercises} exercisesB={part2.exercises} exercisesC={part3.exercises}/>      
    </>    
  )
}

ReactDOM.render(<App />, document.getElementById('root'))