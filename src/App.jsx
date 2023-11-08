import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterCmp from './components/CounterCmp'
import { useDispatch } from 'react-redux'
import { addCounter } from './store/slices/counterSlice'

function App() {
  const [count, setCount] = useState(0)
  const dispatch = useDispatch();

  const updateCounter=()=>{
    console.log("updateCounter");
    dispatch(addCounter("yo its me"))
  }
  return (
    <>
      <CounterCmp/>
      <button onClick={updateCounter}>ADD COUNTER</button>
    </>
  )
}

export default App
