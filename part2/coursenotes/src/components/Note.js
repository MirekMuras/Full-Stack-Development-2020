import React from 'react'

// displaying a single note component Note
const Note = ({part}) => {
    return (
    <li>{part.name} {part.exercises}</li>
    )
  }

export default Note