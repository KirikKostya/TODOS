import React, {useState, useEffect} from 'react'
import '../Styles/CreateTask.css'
import { useDispatch } from 'react-redux';

export default function CreateTask({ setOpen }) {

  const [InputValue, setInputValue] = useState('');
  const [textAreaValue, setTextAreaValue] = useState('');
  let Input;
  let textArea;

  const dispatch = useDispatch();

  const add = () => {
    if(Input.value!==''){
      textArea = document.querySelector('.textArea');

      // Alert.classList.remove('close')
      // setTimeout(()=>Alert.classList.add('close'), 3000)

      dispatch({type: 'PUSH', payload: {id: Math.random(), date: new Date().toLocaleString(), tittle: Input.value , task: textArea.value}})
      Input.value = ''
      textArea.value = ''
      setTextAreaValue('')
      setInputValue('')
    } 
  }


  useEffect(()=>{
    Input = document.querySelector('#INPUT');

    document.addEventListener('keyup', (e)=>{
      if(e.code == "Enter"){
        add();
      }
    })
  }, )

  return (
    <div className='CreateTask'>
      <button className='closeBtn' onClick={()=>setOpen('close')}>&times;</button>
      <h2>Add Your Task</h2>
      <input id='INPUT' placeholder='Tittle' onChange={(e)=>setInputValue(e.target.value)} value = {InputValue}></input>
      <textarea onChange={(e)=>setTextAreaValue(e.target.value)} className='textArea'/>
      <button className='AddBtn' onClick={add}>Add</button>
    </div>
  )
}
