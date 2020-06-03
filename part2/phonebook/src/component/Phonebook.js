import React, { useState, useEffect} from 'react'
import axios from 'axios'
import Note from './Note'
import Header from './Header'

const Phonebook = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  const [ newName, setNewName ] = useState('')
  const [ newPhoneNumber, setNewPhoneNumber] = useState('')
  const [searchTerm, setSearchTerm] = React.useState(""); 

  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }  
  useEffect(hook, [])
  
  
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

  const handleSearchTearm = event => {
    setSearchTerm(event.target.value);
  }

  const noteToShow = (persons.some(person => person.name === newName) ? alert(`The name ${newName} is already added to phonebook.`) : persons)
  
 // const results = !searchTerm ? persons : persons.filter(persons =>       persons.toLowerCase().includes(searchTerm.toLocaleLowerCase())     );

  /* Link: https://dev.to/asimdahall/simple-search-form-in-react-using-hooks-42pg */     
  return (
    <div>
      <Header title={'Phonebook'}/>       
      
      <label>
        Filter name &nbsp;
          <input 
            type="text" 
            placeholder="Search" 
            value={searchTerm} 
            onChange={handleSearchTearm} 
          /> 
      </label>

      <Header title={'add a new'}/>
      
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

      <Header title={'Numbers'}/>           
      <div>        
        {noteToShow.map(({name,number}) =>            
          <Note key={name} name={name} number={number}/>
         )}
         
      </div>
      
    </div>
  )
}

export default Phonebook