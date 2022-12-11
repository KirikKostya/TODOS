import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Styles/BACK_BUTTON.css'

export default function BACK_BUTTON() {
  return (

    <button className='Back_Button'>
        <NavLink className={'NavLink'} to={'/'}> &#11013;Back</NavLink>
    </button>

  )
}
