import React, { useEffect, useRef, useState } from 'react'
const STATE = {
    LOADING: "LOADING",
    ERROR: "ERROR",
    SUCCESS: "SUCCESS",
  };
  
function Engine() {
    const [results , setResults] = useState([]);
    const [query,setQuery] = useState("");
    const [status, setStatus] = useState(STATE.LOADING)
    const cache = useRef({})

    useEffect(()=>{  

        const fetchData = async()=>{
            try{
                setStatus(STATE.LOADING);
                if(cache.current[query]){
                    console.log("cache")
                    setStatus(STATE.SUCCESS);
                    setResults(cache.current[query])
                    return;
                }
               console.log("Api")
               const response = await fetch(`https://dummyjson.com/products/search?q=${query}&limit=10`);
               const result = await response.json();
               setStatus(STATE.SUCCESS);
               cache.current[query] = result.products;
               setResults(result.products)
            }catch(error){
                setStatus(STATE.ERROR);
            }                          
        }


        let id = setTimeout(()=>{
            fetchData()
        },1000)

       return ()=>{
         clearTimeout(id);
       }

    },[query])

  return (
    <>
      <div className="engine-container">
         <input type="text" value={query} onChange={(e)=>{setQuery(e.target.value)}} />
   
         {status === STATE.LOADING && <div>...Loading</div>}
         {status === STATE.ERROR && <div>Error occured</div>}
         {status === STATE.SUCCESS && (
            <ul>
                {results.map((data,index)=>{
                    return <li key={index}>{data.title}</li>
                })}
            </ul>
         ) }
      </div>
    </>
  )
}

export default Engine