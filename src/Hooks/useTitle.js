import { useEffect } from "react"

const useTitle =title=>{
   useEffect(()=>{
    document.title=`Interior Hub ${title}`
   }
     
    ,[title])
}

export default useTitle;