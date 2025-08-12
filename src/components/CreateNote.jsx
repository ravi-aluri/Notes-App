import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import useCreateDate from './useCreateDate';
import { IoIosArrowBack } from 'react-icons/io';

const CreateNote = ({setNotes}) => {
  const [title,setTitle]=useState('')
  const [details,setDetails]=useState('')
  const navigate=useNavigate()
  const id=uuidv4();
  const date=useCreateDate();
  const handleTitle=(e)=>{
    setTitle(e.target.value)
  }
  const handleDetails=(e)=>{
    setDetails(e.target.value)
  }
  const handleClick=()=>{
    navigate("/")
  }
  const handleSave=()=>{
    if(title){
      const note={id,title,details,date}
      setNotes(prev => [note,...prev])
    }
    navigate("/")
  }
  return (
    <section>
      <div className="nav__section">
          <div className="btn__back">
              <IoIosArrowBack className='btn' onClick={handleClick}/>
          </div>
          <div className="btn__save">
              <button onClick={handleSave}>Save</button>
          </div>
      </div>
      <div className="note__section">
          <input type="text" placeholder='Title' autoFocus required onChange={handleTitle}/>
          <textarea type="text" placeholder='Write something here...' onChange={handleDetails}></textarea>
      </div>
      </section>
  )
}

export default CreateNote