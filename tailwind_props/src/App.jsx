import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/cards'

function App() {
  // let myObj = {
  //   username:"harshit",
  //   age:32
  // }
  let newArr = [1,2,4,8,3]  
  return (
    <>
      {/* <h1 className='bg-red-300'>hello this is tailwaid</h1> */}
      <Cards username="chaiaurcode" btnText="Click me" />
      <Cards username="harshit" btnText="Visit me"/>
    </>
  )
}

export default App
