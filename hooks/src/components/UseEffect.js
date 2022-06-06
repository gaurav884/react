import React,{useEffect , useState} from 'react'

const UseEffect = () => {
   const [posts , setPosts]= useState([])
   const [counter , setCounter] = useState(0)
   let controller = new AbortController() 

   useEffect(() => {                      //this useEffect with empty dependencies does is rendered second time first the component is rendered
     
    getPosts()                                        //always clean up the async tasks by returning function

    return ()=>{                                   //always ran on client side
        
        controller?.abort()
    }
   },[]) 

   
   useEffect(()=>{

       function handleEvent(e){
        if(e.key==="f"){                                                          //start counter
            changeCounter = setInterval(intervalF, 1000)
           }
           else if(e.key==="Escape"){                                                  //stop counter
               clearInterval(changeCounter)
           }
       }
       
       const intervalF = ()=>{                                       ///counter
        setCounter(Math.floor(Math.random()*100)+1)
    }

       let changeCounter = setInterval(intervalF, 1000)
       

       window.addEventListener("keydown",handleEvent)

       return ()=>{
            clearInterval(changeCounter)
            window.removeEventListener("keydown",handleEvent)
        }

   },[counter])



   async function getPosts() {
      try{ 
          const response = await  fetch("https://jsonplaceholder.typicode.com/photos" , {signal:controller.signal})

          if(!response.ok){
              throw new Error("SOrry an error has occured")
          }
           const data = await response.json()
           data.splice(5,5000)
          setPosts(data)
    }
    catch(e){
          console.log(e.message)
    }
   }

  return (
    <div className ="hooksContainer">
        <h1>useEffect Hook {counter} </h1>
        <p style={{textAlign:"Center" , fontSize:"1.5rem"}}>press "f" to start and "ESC" top stop counter</p> 
        <div className="containerBig useEffectContainer">
            {posts.map((each, index)=>{
                return <img src ={each.thumbnailUrl} alt={each.title} key={each.id}/>
            })}
        </div>  
    </div>
  )
}

export default UseEffect