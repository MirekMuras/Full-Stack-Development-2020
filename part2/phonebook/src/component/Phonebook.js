import React, { useState } from 'react'
import Note from './Note'

const Phonebook = () => {
  const [ persons, setPersons ] = useState([
    {name: 'Mirek Muras',
     number : '123 456 7898'}
  ])

  const [ newName, setNewName ] = useState('')
  const [ newPhoneNumber, setNewPhoneNumber] = useState('')
 
  const submitHandler = (event) => {     
    event.preventDefault()

    const personObject = { 
      name: newName ,
      number: newPhoneNumber,
      id: persons.length +1,
    } 
   

    setPersons(persons.concat(personObject))
    setNewName('')
    setNewPhoneNumber('')
   
  }

  const handleChange = (event) => {
    setNewName(event.target.value)
  } 
  
  const handleNumberChange = (event) => {
    setNewPhoneNumber(event.target.value)
  }

  const noteToShow = (persons.some(person => person.name === newName) ? alert(`The name ${newName} is already added to phonebook.`) : persons)
       
  return (
    <div>
      <h2>Phonebook</h2>   
      
      <form onSubmit={submitHandler}>
          <label>
              Name  &nbsp;
              <input value={newName}  onChange={handleChange} />
          </label>          
          <br/>
          <label>
              Phone number &nbsp;
              <input value={newPhoneNumber} onChange={handleNumberChange} />
          </label>
        
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>            
      <div>        
        {noteToShow.map(({name,number}) =>            
          <Note key={name} name={name} number={number}/>
         )}
         
      </div>
      
    </div>
  )
}

export default Phonebook