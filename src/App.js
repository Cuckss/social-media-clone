import Leftbar from "./Components/leftbar/Leftbar";
import Navbar from "./Components/navbar/Navbar";
import Rightbar from "./Components/rightbar/Rightbar";
import Home from "./pages/home/Home";
import { useEffect } from "react";
import Login from "./pages/login/Login";
import { Routes,Route ,Outlet,useNavigate, Navigate} from "react-router-dom";
import Profile from "./pages/profile/Profile";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "./firebase";
function App() {
  const navigate=useNavigate();
  const [user, loading] = useAuthState(auth);
  useEffect(()=>{
    if(user){
     navigate("/")
    }
 },[user,loading])
  const withAuthorization=(WrappedComponent)=>{
    console.log(user)
    
    return(props)=>{
     
      if(user){
        return<WrappedComponent {...props}/>
      }else{
    return <Navigate to="/login"/>
      

      }
    }
  } 
  const ProtectedHome=withAuthorization(Home);
  const ProtectedProfile=withAuthorization(Profile);
  const Layout=()=>{
    return(
      <div>
        <Navbar/>
        <div style={{display:"flex"}}>
          <Leftbar/>
          <div style={{flex:"6"}}>
          <Outlet/>
          </div>
          <Rightbar/>
        </div>
      </div>
    )
  }

  return (
    <div className="App">
     <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<Layout/>}>
        <Route path="" element={<ProtectedHome/>}/>
        <Route path="/profile/:id" element={<ProtectedProfile/>}/>
      </Route>
     </Routes>
    </div>
  );
}

export default App;
