import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Task from './Task.js'

export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/Task' element={<Task />}/>
        </Routes>
    </BrowserRouter>
  )
}
