import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Auth from './auth/Auth'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
  
    <div className="relative bg-blue-500 h-64">
      <div
        className="absolute bottom-0 w-full h-16 bg-white"
        style={{ clipPath: 'polygon(100% 0, 100% 0, 100% 60%, 70% 20%)'

        }}
      ></div>
      <Auth/>
      
    </div>




    </>
  )
}

export default App
