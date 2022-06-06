import React,{useReducer , useState , useContext} from 'react'
import Context  from './CreateContext'

const UseReducer = () => {
    
const {value} = useContext(Context)
console.log(value) 



const [name , setName] = useState("")

const  reducer = (state , dispatch)=>{
    if(dispatch.type === "LOGIN"){
        return dispatch.payload
    }
    else if(dispatch.type === "LOGOUT"){
        return null
    }
} 

  const [userState , userDispatch] = useReducer(reducer , null)          ///same as useState but with more flexibility and it always has latest snapshot of state
                                                                         ///never mutate the orignal state means update the state with same number and name of the propterties
  return (                                                               //DO NOT mutate       
   <div className ="hooksContainer">                     
        <h1>useReducer Hook</h1>
        <div className="containerMid useReducerContainer">
           {userState ? <p>Logged in User is: {userState.username} with ID: ({userState.id})</p> : <p>No one is Logged in</p>}

           <div className="inputContainer">
               <input type="text" placeholder="Enter your name...."value={name} onChange={(e)=>{setName(e.target.value)}}/>
               <button onClick={()=>{userDispatch({type:"LOGIN" , payload:{username:name , id:Math.floor(Math.random()*100)+1}})}}>Login</button>
           </div>

           <button onClick={()=>{userDispatch({type:"LOGOUT"})}}>Logout</button>
        </div>
    </div>
  )
}

export default UseReducer