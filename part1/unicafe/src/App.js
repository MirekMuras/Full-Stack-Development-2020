import React,{useState} from 'react';

const Didplay = props => <div>{props.text} {props.value} {props.symbol}</div>

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = (good + neutral + bad)
  const avg = (good*1+neutral*0+bad*(-1)) / total
  const positive = (good / total) * 100 ;

  return (
    <div>
      <h2>Give feedback</h2>
      <Button handleClick={() => setGood(good+1)} text='Good'/>
      <Button handleClick={() => setNeutral(neutral+1)} text='Neutral'/>
      <Button handleClick={() => setBad(bad+1)} text='Bad'/>
      <h2>Statistics</h2>
      <Didplay text='Good feedback : ' value={good}/>
      <Didplay text='Neutral feedback : ' value={neutral}/>
      <Didplay text='Bad feedback : ' value={bad}/>
      <Didplay text='All feedbacks : ' value={total}/>
      <Didplay text='Average: ' value={avg}/> 
      <Didplay text='Positive feedbacks:' value={positive} symbol='%' /> 
    </div>
  )
}

export default App;
