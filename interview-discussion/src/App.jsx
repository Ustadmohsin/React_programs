import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setValue] = useState(1)
  const [multipliedValue, setMultipliedValue] = useState (1)

  const multiplybytwo = () => {
    setMultipliedValue(value * 2)
    setValue(value + 1)

  }
  return (
    <>
      <h1>Main value:{value}</h1>
      <button onClick={multiplybytwo}
      >Click to multiply by 2</button>
      <h2>Multipled value: {multipliedValue}</h2>
    </>
  )
}

export default App
