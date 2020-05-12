import React from 'react'

// displaying a single note component Note
const Note = (props) => {
  
    return (
    <p>{props.name} - {props.number}</p>
    )
  }

export default Note