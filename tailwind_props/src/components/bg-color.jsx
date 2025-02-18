import React, { useState } from 'react'

function Bg_color() {
    const [color, setColor]=useState("gray")
  return (
    <>
    <div className=" w-full h-screen duration-200" style={{backgroundColor:color}}> 
    <div className='fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2'>
        <div className='flex flex-wrap mx-96 justify-center gap-3 shadow-lg bg-white px-3 by-2 rounded-3xl'>
            <button
            onClick={()=> setColor('red')}
            className='outline-none px-3 py-1 rounded-full text-white shadow-sm'
            style={{backgroundColor:"red"}} >Red</button>
            <button
            onClick={()=> setColor('green')}
            className='outline-none px-3 py-1 rounded-full text-white shadow-sm'
            style={{backgroundColor:"green"}} >Green</button>
            <button
            onClick={()=> setColor('yellow')}
            className='outline-none px-3 py-1 rounded-full text-white shadow-sm'
            style={{backgroundColor:"yellow"}} >Yellow</button>
            
            <button
            onClick={()=> setColor('Black')}
            className='outline-none px-3 py-1 rounded-full text-white shadow-sm'
            style={{backgroundColor:"black"}} >Black</button>
            <button
            onClick={()=> setColor('Blue')}
            className='outline-none px-3 py-1 rounded-full text-white shadow-sm'
            style={{backgroundColor:"Blue"}} >Blue</button>
            <button
            onClick={()=> setColor('olive')}
            className='outline-none px-3 py-1 rounded-full text-white shadow-sm'
            style={{backgroundColor:"olive"}} >Olive</button>
            <button
            onClick={()=> setColor('purple')}
            className='outline-none px-3 py-1 rounded-full text-white shadow-sm'
            style={{backgroundColor:"purple"}} >Purple</button>
            
            
         </div>
        </div>
      </div>
    </>
  )
}

export default Bg_color