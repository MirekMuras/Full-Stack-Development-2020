import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return(
    <div>
      <p>
        <h1>{props.course}</h1>
      </p>
    </div>
  )
}

const Content = (props) => {
  return(
    <div>
      <p> {props.part} {props.exercises} </p>
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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <Header course={course}/>
      <Content part={part1} exercises={exercises1} />
      <Content part={part2} exercises={exercises2} />
      <Content part={part3} exercises={exercises3} />
      <Total exercisesA={exercises1} exercisesB={exercises2} exercisesC={exercises3} />
    </>    
  )
}

ReactDOM.render(<App />, document.getElementById('root'))