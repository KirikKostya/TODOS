import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import '../Styles/MainField.css'
import CreateTask from './CreateTask.js'
import { NavLink } from 'react-router-dom'

export default function MainField({ setOpenTask }) {
   
  let Alert;
    const List = useSelector(state=>state.ListOfTask)
    const [isOpen, setOpen] = useState('close')

    const dispatch = useDispatch()

    useEffect(()=>{
        Alert = document.querySelector('.Alert')
    }, [])

  return (
    <header className="App-header">
        <div className='header'>
            <h1>My Tasks-App</h1>
            
            <div className='Alert close'>
            <p className='complate'>Your Task has been added!</p>
            </div>
            
            <button className='CreateBtn' onClick={()=>setOpen('')}>Create Task</button>

            <div className={`CreateTask ${isOpen}`}>
                <CreateTask setOpen = {setOpen}/>
            </div>
        </div>
          <ul className='AllTask'>
            {
              List.map(el=>(
                <div key={el.id} className='Task'>
                  <NavLink onClick={()=>setOpenTask(el)} to='/Task' className={'NavLink'}>
                    <h4 key={el.id}>{el.tittle}</h4>
                      <p>{el.date}</p>
                      <button onClick={ ()=>{
                        dispatch({type: 'POP', payload: el})
                      }}>&times;</button>
                    </NavLink>
                </div>
              ))
            }
          </ul>

      </header>
  )
}
