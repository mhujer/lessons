import React from 'react'
import Note from './Note'
import '../styles/NoteList.css'

class NoteList extends React.Component {
  render() {
    const { notes, removeNoteFromList } = this.props
    return (
      <div className="NoteList">
        {notes.map(note => (
          <Note
            key={note.uuid}
            noteId={note.uuid}
            title={note.title}
            text={note.text}
            /* TODO: pass editNote fn form App.js to Note.js */
            removeNoteFromList={removeNoteFromList}
          />
        ))}
      </div>
    )
  }
}

export default NoteList
