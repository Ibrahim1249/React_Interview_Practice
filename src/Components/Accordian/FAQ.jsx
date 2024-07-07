import { useState } from "react";
import { faqData } from "../../../faq";
// import Accordian from "./Accordian";

import Accordian2 from "./Accordian2";

function FAQ() {
  // this is second method

  const [isOpenIndex, setIsOpenIndex] = useState(0);

  return (
    <>
      <div className="faq-container">
        <h1>FAQ QUESTION</h1>
        {/* first method */}
        {/* {faqData.map((obj,index)=>{
                 return <Accordian key={index} obj={obj}/>
            })} */}
        {/* second method */}
        {faqData.map((obj, index) => {
          return (
            <Accordian2
              key={index}
              obj={obj}
              show={isOpenIndex === index ? true : false}
              setShow={() => {
                isOpenIndex === index
                  ? setIsOpenIndex(null)
                  : setIsOpenIndex(index);
              }}
            />
          );
        })}
      </div>
    </>
  );
}

export default FAQ;
