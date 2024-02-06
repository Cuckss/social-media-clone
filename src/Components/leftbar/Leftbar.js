import React from "react";
import "./leftbar.scss"
import Diversity1Icon from '@mui/icons-material/Diversity1';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FavoriteIcon from '@mui/icons-material/Favorite';
const Leftbar=()=>{
    return(
        <div className="leftbar">
         <div className="container">
          <div className="menu">
            <div className="user">
            <img src="https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                <span>John Doe</span>
            </div>
            <div className="item">
                <Diversity1Icon style={{ height:"30px",width:"30px"}}/>
                <span>friends</span>
            </div>
            <div className="item">
                <BookmarkIcon style={{ height:"30px",width:"30px"}}/>
                <span>Bookmarked</span>
            </div>
            <div className="item">
                <FavoriteIcon style={{ height:"30px",width:"30px"}}/>
                <span>Favorites</span>
            </div>
          </div>
         </div>
        </div>
    )
}
export default Leftbar;