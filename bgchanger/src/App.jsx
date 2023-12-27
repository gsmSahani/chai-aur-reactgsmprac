
import { useState } from 'react'
import './App.css'

function App() {

  const [color, setColor] = useState("olive");
  
  return (
   <>
      <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      
        <div className='fixed inset-x-0 flex flex-wrap justify-center px-12 buttom-12'> 
        {/* button 1 */}
          <div className="flex flex-wrap justify-center gap-3 px-3 py-2 bg-white rounded shadow-lg-3xl">
            <button className='px-4 py-1 text-white rounded-full shadow-lg outline-none' style={{backgroundColor:"black"}} onClick={ () => {setColor("red")} } > Red </button>
          </div>
          {/* button 2 */}
          <div className="flex flex-wrap justify-center gap-3 px-3 py-2 bg-white rounded shadow-lg-3xl">
            <button className='px-4 py-1 text-white rounded-full shadow-lg outline-none' style={{backgroundColor:"black"}}  onClick={ () => {setColor("yellow")} } > Yellow </button>
          </div>
          {/* button 3 */}
          <div className="flex flex-wrap justify-center gap-3 px-3 py-2 bg-white rounded shadow-lg-3xl">
            <button className='px-4 py-1 text-white rounded-full shadow-lg outline-none' style={{backgroundColor:"black"}}  onClick={ () => {setColor("purple")} } > purple </button>
          </div>
        </div>
      </div>
   </>
  )
}

export default App
