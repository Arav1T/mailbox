import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import To from './email/To'
import Subject from './email/Subject'
import EmailBodyEditor from './email/EmailBodyEditor'

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
        <To/>
        <Subject/>
        <EmailBodyEditor/>
    </div>
  )
}
