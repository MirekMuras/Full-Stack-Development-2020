import React from 'react';
import Content from './components/Content'
import Header from './components/Header'


const App = ({course}) => {  
  
return (
    <div>
      <Header text={course.name}/>
      <Content course={course}/>
      
    </div>
  )
}

export default App;
