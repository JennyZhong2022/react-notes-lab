import './App.css'
import AllNotes from './components/NotesComponents/AllNotes'
import Headers from './components/NotesComponents/Header'

function App() {
  return (
    <div className='main'>
      <Headers></Headers>
      <AllNotes></AllNotes>
    </div>
  )
}

export default App
