import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import {useEffect, useState} from 'react'

function App() {
  const count = useSelector(state=>state.ListOfTask)
  const [value, setValue] = useState('')

  const dispatch = useDispatch()

  
  let Input; 
  let Alert;

  const add = () => {
    if(Input.value!==''){
      Alert.classList.remove('close')
      setTimeout(()=>Alert.classList.add('close'), 3000)

      dispatch({type: 'PUSH', payload: {id: Math.random(), date: new Date().toLocaleString(), tittle: Input.value , task: ''}})
      Input.value = ''
      setValue('')
    } 
  }

    useEffect(()=>{
      Input = document.querySelector('#INPUT');
      Alert = document.querySelector('.Alert');
      document.addEventListener('keyup', (e)=>{
        if(e.code == "Enter"){
          add();
        }
      })
    }, )
  

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
                <div key={el.id}><h4 className='Task' key={el.id}>{el.tittle} 
                    <p>{el.date}</p>
                    <button onClick={ ()=>{
                      dispatch({type: 'POP', payload: el})
                    }}>&times;</button></h4>
                  
                </div>
              ))
            }
          </ul>

      </header>
    </div>
  );
}

export default App;
