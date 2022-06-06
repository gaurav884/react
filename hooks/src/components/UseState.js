import React,{useState} from 'react'

const UseState = () => {
  const [counter , setCounter] = useState(0);
  const [randomStateOne , setRandomStateOne] = useState(Math.floor(Math.random()*100)+1)
 


  
//   const increaseHandler = ()=>{                     ///WRONG WAY(state updates are async so u should not rely on state to calculate next state)
//       setCounter(counter+1)
//   }

//   const decreaseHandler = ()=>{
//       setCounter(counter-1)
//   }


   const increaseHandler = ()=>{                      ///Correct WAY(it takes in a function and previous state as parameter and returns new state to be set)
       setCounter((prev)=>{
           return prev+1;
       })

       setRandomStateOne(counter+1)
       
       
   }

   const decreaseHandler = ()=>{                      //Though this thing, setting multiple states in single call requires re render component one after
      setCounter((prev)=>{                            //another so for performance issues react sometimes batches the state updates and thats
        return prev-1;                                //why sometimes state changes are not reflected immideatley so it is advised to to update state
      })                                              //one after another using useEffect to change the state of next state to be changed
 
      setRandomStateOne(counter-1)
      
   }
  

  return (
    <div className ="hooksContainer">
        <h1>useState Hook</h1>
        <div className="containerMid useStateContainer">
            <button onClick={()=>{decreaseHandler()}}>-</button>
            <span>{counter}</span>
            <button onClick={()=>{increaseHandler()}}>+</button>
            <hr/>
            <span>Random State One: {randomStateOne}</span>
        </div>
    </div>
  )
}

export default UseState