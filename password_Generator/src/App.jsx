
import { useCallback, useEffect, useState, useRef } from 'react'

function App() {

  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_{}[]<>?/`~"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numAllowed, charAllowed, setPassword])

// copying password to clipboard
// useRef hook of react
const passowrdRef = useRef(null)
const copyPassToClip = useCallback(() =>{
  passowrdRef.current?.select()
window.navigator.clipboard.writeText(password)
},[password])

  useEffect(() => { 
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator])

  return (
    <>

      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800 ">
        <h1 className='pt-12 text-3xl font-bold text-center text-slate-400 my-3'>Password Generator </h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='password' readOnly ref={passowrdRef}/>

          <button className='outline-none bg-blue-700 text-white px-3 py0.5 shrink-0' onClick={copyPassToClip}>Copy</button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex item-center gap-x-1">
            <input type="range"
              min={6} max={12}
              value={length}
              className='curson-pointer'
              onChange={(e) => { setLength(e.target.value) }} />
            <label htmlFor="Length">Length: {length} </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
              defaultChecked={numAllowed}
              id='numberInput'
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }} />
            <label htmlFor="inputNumber">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
              defaultChecked={charAllowed}
              id='charInput'
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }} />
            <label htmlFor="charInput">Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
