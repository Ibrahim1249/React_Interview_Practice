import React, { useState } from "react";

function Star({ starCount = 5 }) {
  const [starValue, setStarValue] = useState();
  const [hoverValue, setHoverValue] = useState(0);
  return (
    <>
      <div className="star-container">
         <h1>Star Rating</h1>
        {new Array(starCount).fill(0).map((value, index) => {
          return (
            <span
              key={index}
              onClick={() => {
                setStarValue(index + 1);
              }}
              onMouseEnter={(e) => {
                setHoverValue(index + 1);
              }}
              onMouseLeave={()=>{setHoverValue(0)}}

              className={(hoverValue === 0 && index < starValue ) || index < hoverValue ? "gold" : ""}
              style={{cursor:"pointer" , fontSize:"38px"}}
            >
              &#9733;
            </span>
          );
        })}
      </div>
    </>
  );
}

export default Star;
