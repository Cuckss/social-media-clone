import React from "react"
import "./rightbar.scss"
const Rightbar=()=>{
    return(
        <div className="rightbar">
          <div className="container">
            <div className="item">
                 <span>Suggestions for you</span>
                 <div className="user">
                  <div className="user-info">
                           <img src="https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                    <span>John singh</span>
                    <div>
                       <button style={{backgroundColor:"greenyellow",border:"none",borderRadius:"5px",cursor:"pointer"}}>Follow</button> 
                       <button style={{backgroundColor:"tomato",border:"none",borderRadius:"5px",cursor:"pointer"}}>reject</button>
                    </div>
                  </div>
                  <div className="user-info">
                           <img src="https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                    <span>John singh</span>
                    <div>
                       <button style={{backgroundColor:"greenyellow",border:"none",borderRadius:"5px",cursor:"pointer"}}>Follow</button> 
                       <button style={{backgroundColor:"tomato",border:"none",borderRadius:"5px",cursor:"pointer"}}>reject</button>
                    </div>
                  </div>
                 </div>
            </div>
            <div className="item">
            <span>Recent Activities</span>
                 <div className="user">
                  <div className="user-info">
                           <img src="https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                   <p>
                   <span>John singh </span>
                   changed their cover picture
                   </p>
                    <span>1min ago</span>
                  </div>
                  <div className="user-info">
                           <img src="https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                   <p>
                   <span>John singh </span>
                   changed their cover picture
                   </p>
                    <span>1min ago</span>
                  </div>
                  <div className="user-info">
                           <img src="https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                   <p>
                   <span>John singh </span>
                   changed their cover picture
                   </p>
                    <span>1min ago</span>
                  </div>
                  <div className="user-info">
                           <img src="https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                   <p>
                   <span>John singh </span>
                   changed their cover picture
                   </p>
                    <span>1min ago</span>
                  </div>
                 </div>
            </div>
          </div>
        </div>
    )
}
export default Rightbar;