import React from 'react'

// displaying a single note component Note
const Note = ({name , number}) => {
  
  return (
    <p>{name} - {number}</p>
    )
  }

export default Note