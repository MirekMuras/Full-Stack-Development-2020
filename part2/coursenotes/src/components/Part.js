import React from 'react'

const Part = (props) =>{

 
    
    return (  

        props.parts.map( part => 
        < li key={part.id}>
        {part.name} &nbsp;
        {part.exercises}
        </li>)

      
        
        
    )
} 


export default Part