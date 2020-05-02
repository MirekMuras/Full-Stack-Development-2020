import React from 'react'

const Part = (props) =>{    

    return (
        props.parts.map( part => 
        < p key={part.id}>
                {part.name} &nbsp;
                {part.exercises}
        </p>
        )   

    )
}

export default Part