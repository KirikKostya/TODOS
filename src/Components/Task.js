import React from 'react'
import { useEffect } from 'react'
import '../Styles/Task.css'
import BACK_BUTTON from './BACK_BUTTON'

export default function Task({OpenTask}) {

  return (
    <div className='OpenTask'>
      <BACK_BUTTON/>
        <div className='Task'>
          <h1>{OpenTask.tittle}</h1>
          <p>{OpenTask.task}</p>
        </div>
    </div>
  )
}
