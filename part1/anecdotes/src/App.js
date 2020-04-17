import React,{useState} from 'react';

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const Display = props => ( <h2><b>{props.text}</b></h2>)

const Anecdotes = props => ( <p>{props.anecdotes}</p>)

const Feedback = props => (<p>has {props.feedback} votes.</p>)

// Button 
const Button = (props) => {
  return (
    <button onClick={props.handleClik}>{props.text}</button>
  )
}

// random number method assigned to variable
const randomNumber = () => Math.floor(Math.random() * anecdotes.length)

// create a zero=filled array of the anecdotes arrray length
const copyArray = new Array(anecdotes.length).fill(-1)



const  App = () =>  {
  const [selected, setSelected] = useState(0)
  const [voted, setVoted] = useState(copyArray)

  // mutate the array into copy variable and increment the selected element 
  let copy = [...voted]
  copy[selected] += 1 

  // find the index with the highest value
  let indexOfMax=(copy.reduce((iMax,x,i,arr) => x > arr[iMax]? i : iMax, 0 ))

  return (

    <div>
      <Display text={'Anecdote of the day.'} />
      <Anecdotes anecdotes = {anecdotes[selected]} />
      <Feedback feedback = {copy[selected]}/>
      <Button handleClik = { () => setVoted(copy)} text='vote'/> &nbsp;
      <Button handleClik = { () => setSelected(randomNumber)} text = 'next anecdote' />
      <br/>
      <Display text={'Anecdote with most votes'}/>
      <Anecdotes anecdotes = {anecdotes[indexOfMax]} />
      <Feedback feedback = {copy[indexOfMax]} />         
     
    </div> 
  );
}

export default App;
