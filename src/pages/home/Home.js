import React ,{useEffect, useState} from "react";
import "./home.scss"
import { TextField } from "@mui/material";
import { db,imageDb,auth } from "../../firebase";
import { ref ,uploadBytes} from "firebase/storage";
import { collection } from "firebase/firestore";
import { addDoc ,getDocs,doc,query} from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";
import { getDownloadURL } from "firebase/storage";
import { useAuthState } from "react-firebase-hooks/auth";
import Posts from "../../Components/posts/Posts";

const Home=()=>{
  const[user]=useAuthState(auth);
  console.log(user);
    const[image,setImage]=useState(null);
    const[caption,setCaption]=useState("");
    const[posts,setPosts]=useState([]);
    const handleChange=(e)=>{
        if(e.target.files[0]){
            setImage(e.target.files[0]);
        }
    }
    

useEffect(()=>{
  fetchPosts()
},[])

  
const fetchPosts = async () => {
  try {
    const collectionRef = collection(db, "posts");
    const q = query(collectionRef);
    const snapshot = await getDocs(q);

    let array = [];
    snapshot.forEach((doc) => {
      // Use doc.data() to get the data of the document
      array.push({ id: doc.id, post: doc.data() });
    });

    setPosts(array);
    console.log(array);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

  console.log(posts);
   

  
    



    const handleUpload = async () => {
      if (image) {
        
        const imageRef = ref(imageDb, `files/${new Date().getTime()}`);
        
        // Upload image to storage
        await uploadBytes(imageRef, image);
  
        // Get download URL
        const imageURL = await getDownloadURL(imageRef);
  
        // Add post to Firestore
        const postRef = collection(db, "posts");
        await addDoc(postRef, {
          timestamp: serverTimestamp(),
          caption: caption,
          imageURL: imageURL,
        });
          console.log(postRef)
        // Reset state
        setImage(null);
        setCaption("");
        fetchPosts();
      } else {
        console.error("No image selected");
      }
    };

    return(
      <div className="home">
        <h2>Add New Post</h2>
        <div className="home-div">
        <input type="file" onChange={handleChange}/>
        <textarea value={caption} placeholder="Caption here.." onChange={(e)=>setCaption(e.target.value)}/>
        {/* <progress max='100'/> */}
        <button onClick={handleUpload}>add Post</button>

        </div>
     
       {
          posts.map(({id,post})=>(
           <div>
              <Posts key={id}
                   postId={id}
                   user={user}
                   userName={user.email}
                   caption={post.caption}
                   imageURL={post.imageURL}/>
                
             </div> 
          ))
        }
    
      </div>
    )
    }
export default Home;