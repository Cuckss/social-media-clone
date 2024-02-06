import React ,{useState}from "react"
import "./login.scss"
import { toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Login=()=>{
    const Navigate=useNavigate();
    const[login,setLogin]=useState(false);
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[confirmPassword,setConfirmPassword]=useState("");
    const[isLoading,setIsLoading]=useState(false);
    const registerUser=(e)=>{
      e.preventDefault();
      setIsLoading(true);
      if(!name||!email||!password || !confirmPassword){
        alert("All the details are required");
        //toast.error("All details are required!!")
       setIsLoading(false);
        return;
      }else if(password!==confirmPassword){
        alert("Passwords don't match");
        //toast.error("Password do not match")
       setIsLoading(false);
        return;
      }
      else{
        createUserWithEmailAndPassword(auth,email,password)
        .then((userDetails)=>{
         const user = userDetails.user;
         console.log(user);
         alert("signup successful")
         setIsLoading(false)
         setName("")
         setEmail("")
         setPassword("")
         setConfirmPassword("")
         Navigate("/");
         
        })
        .catch((error)=>{
         const errorCode=error.code;
         const errorMessage=error.message;
         setIsLoading(false)
         console.log(error)
     
         })
     }
    }
    const signin=(e)=>{
       e.preventDefault();
       setIsLoading(true);
       if(!email || !password){
       
        setIsLoading(false);
        return;
      }else{
        signInWithEmailAndPassword(auth,email,password)
        .then((userDetails)=>{
        const user=userDetails.user;
        console.log(user);
        alert("login successfull")
        setIsLoading(false);
         setEmail("");
         setPassword("")
       Navigate("/")
        })
        .catch((error)=>{
          const errorCode = error.code;
          const errorMessage = error.message;
          
          setIsLoading(false);

        })
      }
    }
  return(
    <div className="login">
    <div className="card">
       {
        login==true?(
            <>
            
            <h1>Login</h1>
       <form>
        <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button type="submit" onClick={signin}>Login</button>
       </form>
       <div className="lower">
       <span>Don't have an Account?</span>
       <button onClick={()=>setLogin(!login)}>Register</button>
       </div>
       </>
        ):(
            <>
            
            <h1>Register</h1>
       <form >
        <input type="text" placeholder="UserName" value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <input type="password" placeholder="ConfirmPassword" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
        <button type="submit" onClick={registerUser}>Register Here</button>
       </form>
       <div className="lower">
       <span>Already have an Account?</span>
       <button onClick={()=>setLogin(!login)}>Login here</button>
       </div>
       </>
        )
       }
    </div>
    </div>
  )
}
export default Login;