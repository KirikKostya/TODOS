import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import {useState} from 'react'
import { NavLink } from 'react-router-dom';

function App() {
  const count = useSelector(state=>state.ListOfTask)
  const [value, setValue] = useState('')

  const dispatch = useDispatch()

  const Input = document.querySelector('#INPUT');
  const Alert = document.querySelector('.Alert');

  const add = () => {
    if(Input.value!==''){
      Alert.classList.remove('close')
      setTimeout(()=>Alert.classList.add('close'), 3000)

      dispatch({type: 'PUSH', payload: {id: Math.random(), date: new Date().toLocaleString(), tittle: value , task: ''}})
      Input.value = ''
      setValue('')
    } 
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Tasks-App</h1>
        
        <div className='Alert close'>
          <p className='complate'>Your Task has been added!</p>
        </div>
        
        <div className='input'>
        <input onChange={(e)=>setValue(e.target.value)} id='INPUT' placeholder='Enter Task - Tittle' />
        <button onClick={add}>Add</button> 
        </div>  

          <ul className='AllTask'>
            {
              count.map(el=>(
                <div key={el.id}><li className='Task' key={el.id}>{el.tittle} 
                    <h4>{el.date}</h4>
                    <button onClick={ ()=>{
                      dispatch({type: 'POP', payload: el})
                    }}>&times;</button></li>
                  
                </div>
              ))
            }
          </ul>

          <p>qweqwe123</p>
      </header>
    </div>
  );
}

export default App;
