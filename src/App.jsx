import {React,useEffect,useState} from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Notes from './components/Notes'
import CreateNote from './components/CreateNote'
import EditNote from './components/EditNote'




const App = () => {
  const [notes,setNotes]=useState(JSON.parse(localStorage.getItem('mynotes')) || [])
useEffect(()=>{
  localStorage.setItem('mynotes',JSON.stringify(notes))
},[notes])

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Notes notes={notes} />} />
      <Route path="/create" element={<CreateNote setNotes={setNotes}/>} />
      <Route path="/edit/:id" element={<EditNote notes={notes} setNotes={setNotes} />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App