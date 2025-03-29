import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export default function Layout() {
    const navigate = useNavigate()
    const handleOnLogout =()=>{
        localStorage.removeItem("idToken")
        navigate("/auth", {replace:true})
    }
  return (
    <div>
        hello
        <Outlet/>
        <button onClick={handleOnLogout}>Logout</button>

    </div>
  )
}
