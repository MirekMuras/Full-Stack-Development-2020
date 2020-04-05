import React from 'react';
import ReactDOM from 'react-dom';

const Text = (props) => {
  console.log(' component Text was created');
  
  return (
    <div>
      <p>Notes:<br/> 
      {props.text}</p>
    </div>
  )
}

const App = () => {
const component ="- Component is defined as a JavaScript arrow function with <div> tag, which wraps a p-tag contaning a text and assigned to a constant variable App. ";


  return (
    <div>
      <h1>Course info</h1>
      <Text text={component} />
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'));


