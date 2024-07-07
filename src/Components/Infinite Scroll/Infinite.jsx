import { useEffect, useState ,useCallback } from "react"
import Data from "./Data"




function Infinite() {
    const [dataCount, setDataCount] = useState(0);

    const loadMoreData = useCallback(() => {
        setDataCount(prevCount => prevCount + 4);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop >= 
                document.documentElement.offsetHeight - 100) {
                loadMoreData();
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [loadMoreData]);

    useEffect(()=>{
     loadMoreData()
    },[loadMoreData])
  return (
     <>
      <div className="infinite-container">
         {[...Array(dataCount)].map((_,index)=>(
             <Data key={index}/>
         ))}
      </div>
     </>
  )
}

export default Infinite