// import React, { useEffect, useState } from "react";
// import { BringToFront, Eye, EyeOff } from "lucide-react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Auth = () => {
//     const navigate = useNavigate()
//     const API_KEY=import.meta.env.VITE_API_KEY
//     const [isForget , setIsForget]= React.useState(false)
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//   const [isSignUp, setIsSignUp] = React.useState(true)
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [error, setError] = useState("");
//   const url = isSignUp
//   ? `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`
//   : `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };
//   useEffect(()=>{
//     if(!formData.password){setError("") 
//         return}
//     if(!passwordRegex.test(formData.password)){
//         setError("Password must be at least 8 characters long, including letters, numbers, and a special character.")
//     }
//     else{
//         setError("")
//     }
//   },[formData.password])
//   useEffect(()=>{
//     if(formData.confirmPassword === formData.password && !formData.confirmPassword ){
//         setError("")
//     }
//     else{
//         setError("passowrd not matching ")
//     }
//   },[formData.confirmPassword])
//   const handleSubmit =async (e) => {
//     console.log("sumbit");
    
//     e.preventDefault();
//     setError("")
//     try {
//         const res= await axios.post(url,{
//             email: formData.email,
//             password: formData.password,
//             returnSecureToken: true,
//         })
//         console.log("res",res);
//         localStorage.setItem("idToken", res.data.idToken)
//         navigate("/", {replace:true})
        
        
//     } catch (error) {
//         setError("failed")
//     }
//     // alert("Signup Successful!");
//   };
//   const handleOnForget = async(e)=>{
//     e.stopPropagation()
//     setError("")
//     if(formData.email){
//         try {
//             const res = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${API_KEY}`,{
//                 requestType:"PASSWORD_RESET",
//                 email: formData.email
//             })
//             console.log(res.data);
//             alert("please check you email")
            
//         } catch (error) {
//             setError(error)
//         }
//     }else{
//         setError("enter you email")
//     }
//   }
//   useEffect(()=>{
//     if(localStorage.getItem("idToken")){
//         navigate("/", {replace:true})
//     }
//   },[localStorage.getItem("idToken")])
//   const [val,setVal] = React.useState(false)
//   useEffect(()=>{setVal(true)},[isSignUp,isForget])
//   return (
//     <div className={`flex justify-center items-center h-screen bg-gray-100 ${val && "transform rotate-y-360 duration-500"}`}>
//       <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//         {!isForget  ?<h2 className="text-2xl font-bold text-center mb-4">{isSignUp ?"Sign Up": "SignIn"}</h2>
//         :<h2 className="text-2xl font-bold text-center mb-4">Forget</h2>}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700">Email</label>
//             <input
//               type="email"
//               name="email"
//               className="w-full p-2 border rounded mt-1"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           {!isForget && <div className="mb-4 relative">
//             <label className="block text-gray-700">Password</label>
//             <input
//               type={showPassword ? "text" : "password"}
//               name="password"
//               className="w-full p-2 border rounded mt-1"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//             <button
//               type="button"
//               className="absolute right-3 top-9"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//             </button>
//           </div>}

//           {isSignUp && !isForget && <div className="mb-4 relative">
//             <label className="block text-gray-700">Confirm Password</label>
//             <input
//               type={showConfirmPassword ? "text" : "password"}
//               name="confirmPassword"
//               className="w-full p-2 border rounded mt-1"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               required
//             />
//             <button
//               type="button"
//               className="absolute right-3 top-9"
//               onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//             >
//               {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//             </button>
//           </div>}

//           {error && <p className="text-red-500 text-sm">{error}</p>}

//           {!isForget && <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 rounded-lg mt-4 hover:bg-blue-600"
//           >
//             {isSignUp ?"Sign Up":"Login"}
//           </button>}
//           {isForget && <button type="button" onClick={handleOnForget} className="w-full bg-blue-500 text-white py-2 rounded-lg mt-4 hover:bg-blue-600">
//             send
//             </button>}
//         </form>
//         {!isForget && <><p className="text-center text-gray-600 mt-4 ">
//           {isSignUp ?"Have an account?": "Create New Account"} <button onClick={()=>setIsSignUp(!isSignUp)} className="text-blue-500 hover:underline">{isSignUp ?"Login":"SignUp"}</button>
//         </p>
//           <p className="text-center text-gray-600 mt-4">
//           {!isSignUp && !isForget && <button  onClick={()=>setIsForget(!isForget )} className="text-blue-500 hover:underline"> Forgot Password </button>}
//           </p></>}
        
//       </div>
//     </div>
//   );
// };

// export default Auth;
import React, { useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  const API_KEY = import.meta.env.VITE_API_KEY;

  const [isForget, setIsForget] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);
  const [rotate, setRotate] = useState(0);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const url = isSignUp
    ? `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`
    : `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (!formData.password) {
      setError("");
      return;
    }
    if (!passwordRegex.test(formData.password)) {
      setError("Password must be at least 8 characters long, including letters, numbers, and a special character.");
    } else {
      setError("");
    }
  }, [formData.password]);

  useEffect(() => {
    if (formData.confirmPassword === formData.password && !formData.confirmPassword) {
      setError("");
    } else {
      setError("Password not matching");
    }
  }, [formData.confirmPassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post(url, {
        email: formData.email,
        password: formData.password,
        returnSecureToken: true,
      });
      console.log("res", res);
      localStorage.setItem("idToken", res.data.idToken);
      navigate("/", { replace: true });
    } catch (error) {
      setError("Failed");
    }
  };

  const handleOnForget = async (e) => {
    e.stopPropagation();
    setError("");
    if (formData.email) {
      try {
        const res = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${API_KEY}`, {
          requestType: "PASSWORD_RESET",
          email: formData.email,
        });
        console.log(res.data);
        alert("Please check your email");
      } catch (error) {
        setError("Failed to send reset email");
      }
    } else {
      setError("Enter your email");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("idToken")) {
      navigate("/", { replace: true });
    }
  }, []);

  const handleRotate = (type) => {
    setRotate(rotate + 360); // Increment rotation by 360°
    if (type === "switch") setIsSignUp(!isSignUp);
    if (type === "forget") setIsForget(!isForget);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div
        className="bg-white p-8 rounded-lg shadow-lg w-96 transition-transform duration-700"
        style={{ transform: `rotateY(${rotate}deg)` }} // Apply rotation
      >
        {!isForget ? (
          <h2 className="text-2xl font-bold text-center mb-4">{isSignUp ? "Sign Up" : "Sign In"}</h2>
        ) : (
          <h2 className="text-2xl font-bold text-center mb-4">Forgot Password</h2>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="w-full p-2 border rounded mt-1"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {!isForget && (
            <div className="mb-4 relative">
              <label className="block text-gray-700">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="w-full p-2 border rounded mt-1"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-9"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          )}

          {isSignUp && !isForget && (
            <div className="mb-4 relative">
              <label className="block text-gray-700">Confirm Password</label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                className="w-full p-2 border rounded mt-1"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-9"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          )}

          {error && <p className="text-red-500 text-sm">{error}</p>}

          {!isForget && (
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg mt-4 hover:bg-blue-600">
              {isSignUp ? "Sign Up" : "Login"}
            </button>
          )}
          {isForget && (
            <button
              type="button"
              onClick={handleOnForget}
              className="w-full bg-blue-500 text-white py-2 rounded-lg mt-4 hover:bg-blue-600"
            >
              Send
            </button>
          )}
        </form>

        {!isForget && (
          <>
            <p className="text-center text-gray-600 mt-4">
              {isSignUp ? "Have an account?" : "Create New Account"}{" "}
              <button onClick={() => handleRotate("switch")} className="text-blue-500 hover:underline">
                {isSignUp ? "Login" : "Sign Up"}
              </button>
            </p>
            <p className="text-center text-gray-600 mt-4">
              {!isSignUp && !isForget && (
                <button onClick={() => handleRotate("forget")} className="text-blue-500 hover:underline">
                  Forgot Password
                </button>
              )}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Auth;
