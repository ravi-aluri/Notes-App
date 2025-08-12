import React, { useEffect, useState } from 'react'
import NoteItem from './NoteItem';
import { Link } from 'react-router-dom'
import { MdClose } from 'react-icons/md';
import { CiSearch } from 'react-icons/ci';
import { BsPlusLg } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';


const Notes = ({notes}) => {
  const [show,setShow]=useState(false)
  const [text,setText]=useState("");
  const [filteredNotes,setFilteredNotes]=useState([])
  const navigate=useNavigate()
  const handleChange=()=>{
    setFilteredNotes(notes.filter(note =>
    note.title.toLowerCase().includes(text.toLowerCase())
  ))}
  useEffect(() => {
    handleChange();
  }, [text, notes]);
  return (
    <>
    <div className="navbar">
        <div className="nav__head">
           {<h2> <span className='hide'> My </span>Notes</h2>}
        </div>
        <div className="nav__search">
        {show && <div className="nav__input">
           <input type="text" autoFocus value={text} onChange={(e)=>{setText(e.target.value)} } placeholder='Keyword...' />
        </div>}
        <div className="nav__btn">
          {!show && <CiSearch className="btn" onClick={()=> setShow(prev => !prev)}  /> }
          {show && <MdClose className="btn" onClick={()=> {setShow(prev => !prev);setText("")}} />  } 
        </div>
        </div>
      </div>
    <section className='home' >
      
      <div className="notes__container">
        {filteredNotes.length>0 ? (filteredNotes.map(note => (<NoteItem key={note.id} note={note} />))) : <p className="empty" >No Notes found...</p> }
      </div>
      <div className="btn__add">
       <Link to="/create" className='link' > <BsPlusLg className='btn lg' /></Link>
      </div>
    </section>
    </>
    
  )
}

export default Notes