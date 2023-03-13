import axios from "axios";
import { useEffect, useState } from "react";
import { BiCameraMovie } from "react-icons/bi";
import Comment from "../comment/Comment";

const SonYorumlar = () => {
    const url = "https://63f89e7d5b0e4a127de9e14e.mockapi.io/recap";
    
    const [comment, setComment] = useState([]);
    const getComment = async () => {
      try {
        const { data } = await axios(url);
        setComment(data);
        console.log(comment)
      } catch (error) {
      }
    };
    useEffect(() => {
        getComment();
      }, []);
  return (
    <div className="son-yorumlar">
    <h4>
      <span>
        <BiCameraMovie />
      </span>
      Son Yorumlar
    </h4>
    {comment.map((item,i)=>{
        return <Comment key={i} item={item}/>
    })}
    
    
  </div>
  )
}

export default SonYorumlar