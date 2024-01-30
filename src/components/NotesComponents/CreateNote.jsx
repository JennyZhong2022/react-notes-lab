const CreateNote = ({textHandler,
  saveHandler,
  inputText}) => {
  const charLimit = 100
  const charLeft= charLimit - inputText.length
  return (
    <div>
      <textarea
        cols='10'
        rows='5'
        value={inputText}
        placeholder="Type.."
        onChange={textHandler}
        maxLength={charLimit}
      >

      </textarea>
      <div>
        <span>{charLeft}</span>
        <button onClick={saveHandler}>Save</button>
      </div>
    </div>
  )
}

export default CreateNote