import { useState,useEffect } from "react"
import CreateNote from "./CreateNote"
import Note from "./Note"

const AllNotes = () => {
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(true)
  const [inputText, setInputText] = useState('')
  
  const textHandler = (e) => {
    e.preventDefault()
    setInputText(e.target.value)
  }

  const saveHandler = () => {
    setNotes((prevState) => [...prevState, 
      {text:inputText}
    ])
    setInputText('')
  }

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('Notes'))
    if (Array.isArray(data) && data.length > 0) {
      setNotes(data)
    }
    setLoading(false)
  },[])
 
  useEffect(() => {
    if (!loading) {
      console.log('notes', notes);
    localStorage.setItem('Notes', JSON.stringify(notes))
    }
  }, [notes,loading])
  
  if (loading) {
    return <div>loading</div>
  }

  const deleteNote = (noteToDelete) => {
   setNotes(notes.filter(note=>note!==noteToDelete))
 }

  return (
    <div>

      {notes.map((note,index) => (
        <Note
          key={index}
          note={note}
          deleteNote={()=>deleteNote(note)}
        />
      ))}
      <CreateNote
        textHandler={textHandler}
        saveHandler={saveHandler}
        inputText={inputText}
      />
    
    </div>
  )
}

export default AllNotes