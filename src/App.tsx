// import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Auth from './auth/Auth'
// import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from 'react-router-dom'
// import Layout from './Layout'


// function App() {
//   const [auth, setAuth] = useState(localStorage.getItem("idToken"))
//   console.log(localStorage.getItem("idToken"),!localStorage.getItem("idToken"));
//   useEffect(()=>{setAuth(localStorage.getItem("idToken"))},[localStorage.getItem("idToken")])
//   const router = createBrowserRouter(createRoutesFromElements(
//     <>
//   <Route path='/auth' element={<Auth/>}/>
//   <Route path="/" element={ auth !==null ? <Layout/> : <Navigate to='/auth' />  }> </Route>

//     </>
//   ))
// // 
//   return (
//     <>
   
  
//     <div className="relative bg-blue-500 h-64">
//       <div
//         className="absolute bottom-0 w-full h-16 bg-white "
//         style={{ clipPath: 'polygon(100% 0, 100% 0, 100% 60%, 70% 20%)'

//         }}
//       >

//       </div>
//       {/* <Auth/>
//        */}
//       <RouterProvider router={router}/>
//     </div>




//     </>
//   )
// }

// export default App
import { useEffect, useState } from "react";
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from "react-router-dom";
import Auth from "./auth/Auth";
import Layout from "./Layout";

function App() {
  const [auth, setAuth] = useState(!localStorage.getItem("idToken"));

  // ✅ Fix: Update state when localStorage changes
  useEffect(() => {
    const handleStorageChange = () => {
      setAuth(!localStorage.getItem("idToken"));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={!auth ? <Layout /> : <Navigate to="/auth" />} />
      </>
    )
  );

  return (
    <>
      <div className="relative bg-blue-500 h-64">
        <div
          className="absolute bottom-0 w-full h-16 bg-white"
          style={{ clipPath: "polygon(100% 0, 100% 0, 100% 60%, 70% 20%)" }}
        ></div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
