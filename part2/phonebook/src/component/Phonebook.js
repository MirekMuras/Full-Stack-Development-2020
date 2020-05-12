import React, { useState } from 'react'
import Note from './Note'

const Phonebook = () => {
  const [ persons, setPersons ] = useState([
    {
      id: 1,
      name: 'Arto Hellas',
      number: '12345678979',
    }
  ])

  const [ newName, setNewName ] = useState('')
  const [ newPhoneNumber, setNewPhoneNumber] = useState('')
 
  const submitHandler = (event) => {     
    event.preventDefault()


    const check_if_name_exist = obj => obj.name === newName 

      if(!persons.some(check_if_name_exist)) {      
        
        const personObject = { 
          name: newName ,
          phone: newPhoneNumber,
          id: persons.length +1,
        } 

        setPersons(persons.concat(personObject))
        setNewName('')
        setNewPhoneNumber('')
        
      }   
      else {
        alert(`${newName} already exist`)
        setNewName('') 
        setNewPhoneNumber('')     
      }    
  }

  const handleChange = (event) => {
    setNewName(event.target.value)
  } 
  
  const handleNumberChange = (event) => {
    setNewPhoneNumber(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>   
      
      <form onSubmit={submitHandler}>
        <div>
          Name: <input type='text' name='name' value={newName}  onChange={handleChange} />
          <br/>
          Phone number:<input type='number' name='number' value={newPhoneNumber} onChange={handleNumberChange} />
        </div>
        
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
            
      <div>        
        {persons.map(person =>            
          <Note key={person.id} name={person.name} number={person.number}/>
         )}
      </div>
      
    </div>
  )
}

export default Phonebook