import React, {useState} from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { useSelector } from 'react-redux'
import Task from './Components/Task.js'
import CreateTask from './Components/CreateTask.js'
import MainComponents from './Components/MainField.js'

export default function Router() {
  
  const List = useSelector(state => state.ListOfTask); 
  const [OpenTask, setOpenTask] = useState(List[0]);
  
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<MainComponents setOpenTask = {setOpenTask}/>}/>
        </Routes>

        <Routes>
            <Route path='/Task' element={<Task OpenTask={OpenTask}/>}/>
        </Routes>

        <Routes>
            <Route path='/CreateTask' element={<CreateTask/>}/>
        </Routes>
    </BrowserRouter>
  )
}
