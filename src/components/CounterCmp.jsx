import React from 'react'
import { useSelector } from 'react-redux'
import counterSlice from '../store/slices/counterSlice'


const CounterCmp = () => {

    const {count} = useSelector((state)=>state.counterSlice)

  return (
    <div className='card'>
        <button>Count is {count}</button>
        <p>
            Edit <code>src/App.jsx</code>and save to test hmr
        </p>
    </div>
  )
}

export default CounterCmp