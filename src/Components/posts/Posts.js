import React ,{useEffect, useState}from "react";
import "./posts.scss"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Avatar } from "@mui/material";
import { db } from "../../firebase";
import { addDoc,doc,collection, serverTimestamp ,query,getDocs} from "firebase/firestore";
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
const Posts=({postId,user,userName,caption,imageURL})=>{
    const[comment,setComment]=useState("");
    const[commentList,setCommentList]=useState([]);
    const[isLiked,setIsLiked]=useState(false);
    const postComment=async(e)=>{
        e.preventDefault();
        if(!comment){
            return;
        }
        const parentDocRef = doc(db, 'posts', postId);
        const subcollectionRef = collection(parentDocRef,"comments");
        const data={
            text:comment,
            userName:user.email,
            timeStamp:serverTimestamp(),
        }
        const newDocRef = await addDoc(subcollectionRef, data);
        setComment("");
        console.log(newDocRef);
        fetchComments();
    }
    useEffect(()=>{
        fetchComments()
    },[])
    const fetchComments = async () => {
        try {
          const collectionRef = collection(db, "posts",postId,"comments");
          const q = query(collectionRef);
          const snapshot = await getDocs(q);
      
          let array = [];
          snapshot.forEach((doc) => {
            // Use doc.data() to get the data of the document
            array.push({ id: doc.id, comment: doc.data() });
          });
      
          setCommentList(array);
          console.log(array);
        } catch (error) {
          console.error("Error fetching comments:", error);
        }
      };
      
        console.log(commentList);
      
    return(
        <div className="post">
         
         <div className="post_header">
           <AccountCircleIcon
           />
           <h3>{userName?userName:"Anonymous_one"}</h3>
         </div>

         <img src={imageURL}/>
         <div className="like-part">
         <p>{caption}</p>{
          isLiked ? (
            <ThumbUpIcon onClick={() => setIsLiked(!isLiked)} />
        ) : (
            <ThumbUpAltOutlinedIcon onClick={() => setIsLiked(!isLiked)} />
        )}
         
         {/* <ThumbUpAltOutlinedIcon onClick={()=>setIsLiked(!isLiked)} style={{backgroundColor: isLiked ? 'black' : 'transparent'}}/> */}
         </div>
          <div className="comments-container">
           {
              commentList && commentList.map(({id,comment})=>(
                <>
                <p key={id}>
                    <b>{comment.userName?comment.userName:"Anonymous_user"}</b>:&nbsp;{comment.text}
                </p>
                </>
              ))
            
           }
          </div>
          {
            user &&(
                <>
                <form>
                    <input type="text" value={comment} placeholder="type comment.." onChange={(e)=>setComment(e.target.value)}/>
                     <button type="submit" onClick={postComment}>Add Comment</button>
                </form>
                </>
            )
          }
        </div>
    )
}
export default Posts;