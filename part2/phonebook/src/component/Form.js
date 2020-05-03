import React,{useState} from 'react'
import Note from './Note'

const Form = (props) => {

    const [notes, setNote] = useState(props.notes)
    const [newNote,setNewNote] = useState('')
    const [showAll, setShowAll] = useState(true)

    /* ## 1 - add HTML 'form' to the component that will be used for adding new notes
    - addNote() as an event handler to the form element that will be called when the form 
    is submitted by clicking the submit button.
    const addNote = (event) => {
        event.preventDefault()
        console.log('button clicked', event.target)
    }*/

    /* ## 2 - In order to enable of the input , we have to regiter 'event handler' 
    that synchronizes the changes made to the input with the component's state
    1) registered an event handler : the onCharge attribute of hte form's INPUT element
    2) event :  handler is called every time a change occures in the Input element
    The event handler receives the event object as its 'event' parameter
    3) target- property of the event object now coresponds to the controlled INPUT
    element and 'event.target.value' refers to the INPUT value of the element.*/
    const handleNoteChange = (event) => {
        console.log(event.target.value)
        setNewNote(event.target.value)
    }

    /* ## 3 - create 'addNote' function for creating new notes 
    - create a new object for the note called 'noteObject'
        that will receive its content from the component's 'newNote' state
    - unique identifier 'id' is generated based on the total number of notes, ONLY works if notes are not deleted
    - the new note is added to the list of notes using the 'concat' array method, 
        doesn't mutated the original notes state array 
    - 'setNewNote' function resets the value of the controlled input element of the 'newNote' state.   
    */
    const addNote = (event) => {
        event.preventDefault()
        
        const noteObject = {
            content: newNote,
            date: new Date().toISOString(),
            important: Math.random() < 0.5,
            id: notes.length + 1,
        }

        setNote(notes.concat(noteObject))
        setNewNote('')
    }

    /* ## 4 - Filtering Displayed Elements
    - let's add a pice of state to the App component that keeps track of which notes should be displayed 
    - using 'conditional' operator , if the value of 'allShow' is false, the notesToShow variable with */
    const noteToShow = showAll ? notes : notes.filter(note => note.imortant === true)

    return (
        <div>
            <h3>Notes</h3>
            
            <button onClick={() => setShowAll(!showAll)}>
                show {showAll ? 'important' : 'all'}
            </button>
            
            <ul>
                {noteToShow.map(note => <Note key={note.id} name={note.content}/>)}
            </ul>

            <form onSubmit={addNote}>                       
                <input value={newNote}
                onChange={handleNoteChange}/>
                <button type='submit'> save </button>
            </form>
        </div>
    )
}


export default Form