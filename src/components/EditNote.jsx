 import React from 'react'
 import { useState,useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
 import { useNavigate } from 'react-router-dom'
import useCreateDate from './useCreateDate'
import { IoIosArrowBack } from 'react-icons/io'
import { RiDeleteBin6Line } from 'react-icons/ri'


 const EditNote = ({notes,setNotes}) => {
     const [title,setTitle]=useState("")
    const [details,setDetails]=useState("") 
    const {id}=useParams()
    const note=notes.find(n => n.id===id)
    const navigate=useNavigate()
    const date=useCreateDate()

    useEffect(() => {
      if (note) {
        setTitle(note.title);
        setDetails(note.details);
      }
    }, [note]);

  const handleSave=()=>{
    if(title){
      const updatednote={id,title,details,date}
      const newnotes=notes.filter(item=> item.id!==id)
    setNotes(notes=> [updatednote,...newnotes])
    }
    navigate("/")
  }
  const handleDelete= ()=>{
    if(window.confirm("Are you sure...you want to delete!")){
       setNotes(prev => prev.filter(note => note.id!=id))
       navigate("/")
    }
  }
   return (
     <section>
      <div className="nav__section">
      <div className="btn__back">
        <Link to="/" >
        <IoIosArrowBack className='btn' />
        </Link>
      </div> 
      <div className="btn__save" onClick={handleSave}>
        <button>Save</button>
      </div>
      <div className="btn__delete">
        <RiDeleteBin6Line className='delete btn' onClick={handleDelete} />
      </div>
      </div>
      <div className="note__section">
        <input type="text" value={title} placeholder='Title' required onChange={e => setTitle(e.target.value)} />
        <textarea type="text" value={details} placeholder='Write something here...' onChange={e => setDetails(e.target.value)} ></textarea>
      </div>
    </section>
   )
 }
 
 export default EditNote 