
const Note = ({note,deleteNote}) => {
  return (
    <div>
      <div>{note.text}</div>
      <button
       onClick={deleteNote}
      >Delete
      </button>
    </div>
  )
}

export default Note