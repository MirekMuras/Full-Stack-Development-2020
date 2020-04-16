import React,{useState} from 'react';

const Header = (props) => <h2>{props.text}</h2>

const Statistic = ({text,value}) => (
  <tr>
    <td>
      {text} {value} 
    </td>
  </tr>
)

const Statistics = (props) => {
  const {good,neutral,bad} = props.elements

  const total = (good + neutral + bad)
  const avg = (good*1+neutral*0+bad*(-1)) / total
  const positive = (good / total) * 100 + ' %' 

  return (
    <div>
      <table>
        <tbody>
          <Statistic text='Good feedback : ' value={good}/>
          <Statistic text='Neutral feedback : ' value={neutral}/>
          <Statistic text='Bad feedback : ' value={bad}/>
          <Statistic text='All feedbacks : ' value={total}/>      
          <Statistic text='Average: ' value={avg}/> 
          <Statistic text='Positive feedbacks:' value={positive} /> 
        </tbody>
      </table>
    </div>
  )


}

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

  const elements = {good,neutral,bad}

  return (
    <div>
      <Header text={'Give feedback'}/>
      <Button handleClick={() => setGood(good+1)} text='Good'/> &nbsp;
      <Button handleClick={() => setNeutral(neutral+1)} text='Neutral'/>&nbsp;
      <Button handleClick={() => setBad(bad+1)} text='Bad'/>&nbsp;

      <Header text={'Statistics'}/>
      {(good || neutral || bad) === 0 ? 'Your feedback is needed!' : <Statistics elements={elements} /> }
      

    </div>
  )
}

export default App;
