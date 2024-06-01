/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import LikeCounter from './components/LikeCounter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LikeCounter/>
    </>
  )
}

export default App