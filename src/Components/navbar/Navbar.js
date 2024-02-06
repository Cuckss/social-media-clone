import React ,{useEffect}from "react"
import "./navbar.scss"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
const Navbar=()=>{
const navigate=useNavigate();
const [user, loading] = useAuthState(auth);
useEffect(()=>{
    if(user){
     navigate("/")
    }
 },[user,loading])
    const logoutFunction=(e)=>{
        
            signOut(auth)
            .then(()=>{
             
              navigate("/login")
              return;
            })
            .catch((error)=>{
              console.log(error.message)
              return;
            })
    
}
function scrollToTop(){
  window.scrollTo({
    top: 0,
    behavior: "smooth" // Optional: smooth scrolling animation
});
}
    return(
        <div className="navbar">
        <div className="left">
            <span onClick={scrollToTop}>Instagram</span>
            <HomeOutlinedIcon/>
            <AppsOutlinedIcon/>
            <div className="search">
          <SearchOutlinedIcon/>
          <input type="text"placeholder="Search here.."/>
        </div>
        </div>
        
        <div className="right">
         <PersonOutlineOutlinedIcon/>
         <EmailOutlinedIcon/>
         <div className="user-info">
            <img src="https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=600"/>
            <span>Akshat</span>
         </div>
          <div className="logout">
          <LogoutIcon />
          <span onClick={logoutFunction}>Logout</span>
          </div>
        </div>
        </div>
    )
}
export default Navbar;