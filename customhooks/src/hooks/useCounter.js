import React,{useState ,useEffect} from 'react'

const useCounter = (forward = true) => {
      
    const [counter , setCounter] = useState(0);


    useEffect(()=>{
        const counterInterval = setInterval(()=>{
            if(forward){
                setCounter((prev)=>{
                   return prev+1
                })
            }
            else{
                setCounter((prev)=>{ 
                    return prev-1
                })
            }
         
        } , 1000)
        return ()=>{
            clearInterval(counterInterval)
        }
    },[])
   
    return counter;

}

export default useCounter