import React, { useState } from 'react'
import Note from './Note'

const Phonebook = () => {
  const [ persons, setPersons ] = useState([{ name: 'Arto Hellas', id:1 }]) 
  const [ newName, setNewName ] = useState('')
  
  const addName = (event) => {
      event.preventDefault()
      
      const nameObject = { 
          name: newName ,
          id: persons.length +1,
        }

      setPersons(persons.concat(nameObject))
      setNewName('')
  }

  const handleChange = (event) => {
      setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>   
      
      <form onSubmit={addName}>
        <div>
          name: <input 
          value={newName}
          onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      
      <ul>
        {persons.map(person => 
            <Note key={person.id} name={person.name} />
         )}
      </ul>
      
    </div>
  )
}

export default Phonebook