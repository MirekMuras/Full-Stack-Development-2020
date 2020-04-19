import React,{useState} from 'react';

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

// Display text component
const Display = props => ( <h2><b>{props.text}</b></h2>)

const Anecdotes = props => ( <p>{props.anecdotes}</p>)
// Feedback component
const Feedback = props => (<p>has {props.feedback} votes.</p>)

// Button component
const Button = (props) => {
  return (
    <button onClick={props.handleClik}>{props.text}</button>
  )
}

// create a zero=filled array of the anecdotes arrray length
const copyArray = new Array(anecdotes.length).fill(0)


const  App = () =>  {
  const [selected, setSelected] = useState(0)
  const [voted, setVoted] = useState(copyArray)

  // mutate the array into copy variable and increment the selected element 
  const VotedHandler = () => {
  const copy = [...voted]
  copy[selected] += 1
  setVoted(copy)
  }

  const randomAnecdoteHandler = () => {
    const randomNumber = () => Math.floor(Math.random() * anecdotes.length)
    setSelected(randomNumber)
  }

  // find the index with the highest value
  const indexOfMax=(voted.reduce((iMax,x,i,arr) => x > arr[iMax]? i : iMax, 0 ))
  // find largest element of the array
  const highestVotes = Math.max(...voted)

  return (

    <div>
      <Display text={'Anecdote of the day.'} />
      <Anecdotes anecdotes = {anecdotes[selected]} />
      <Feedback feedback = {voted[selected]}/>
      <Button handleClik = { VotedHandler} text='vote'/> &nbsp;
      <Button handleClik = { randomAnecdoteHandler } text = 'next anecdote' />
      <br/>
      <Display text={'Anecdote with most votes'}/>
      <Anecdotes anecdotes = {anecdotes[indexOfMax]} />
      <Feedback feedback = {highestVotes} />         
     
    </div> 
  );
}

export default App;
