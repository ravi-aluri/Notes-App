import React from 'react'
import { Link } from 'react-router-dom'


const NoteItem = ({note}) => {
  if (!note) return null;
  return (
    <Link to={`/edit/${note.id}`} className='note__item' >
        <h4>{note.title.length>20 ? note.title.substring(0,20)+"..." : note.title}</h4>
        <p>{note.date}</p>
    </Link>
  )
}

export default NoteItem