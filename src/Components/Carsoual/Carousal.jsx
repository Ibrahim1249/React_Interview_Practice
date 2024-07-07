import { useState } from "react"
import { images } from "../../Images"
import { useEffect } from "react";
import { useRef } from "react";

function Carousal() {
    const ref = useRef(null);
    const [index , setIndex] = useState(0)
    
    function handleLeft(){
      setIndex((preIndex)=>{
         if(preIndex === 0){
            return images.length - 1;
         }else{
             return preIndex - 1;
         }
      })
    }
     
    function handleRight(){
   
        setIndex((preIndex)=>{
             if(preIndex === images.length - 1){
                 return 0
             }else{
                return preIndex + 1
             }
        })
    }

    useEffect(()=>{
      ref.current = setInterval(handleRight,3000);
       return ()=>{
          clearInterval(ref.current)
       }
    },[])

  return (
    <>
      <div className="container">
          <div className="left-btn" onClick={handleLeft}>{"<"}</div>
           <div className="img">
           <img src={images[index].download_url} alt="" />
           </div>
          <div className="right-btn" onClick={handleRight}>{">"}</div>
        </div> 
    </>
  )
}
// onMouseEnter={()=> clearInterval(ref.current)} onMouseLeave={()=> ref.current = setInterval(handleRight,2000)}
export default Carousal