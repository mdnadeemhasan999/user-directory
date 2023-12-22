import { useState } from 'react'
import Profile from './Components/Profile'
import Home from './Components/Home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home />
    </>
  )
}

export default App
