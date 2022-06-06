import {useSelector , useDispatch} from "react-redux"

function App() {
   
  const counter = useSelector((state)=>state.CounterReducer.counter)  
  const lightTheme = useSelector((state)=>state.ThemeToggleReducer.lighttheme)                                                                                                                    
  const dispatch = useDispatch()
 
  return (
              
    <div className=" containerMid">
    <h2>Theme is {lightTheme ?"light" :"dark"}</h2>
    <button onClick={()=>{dispatch({type:"TOGGLE"})}}>Toggle Theme</button><br/>
    <button onClick={()=>{dispatch({type:"DECREASE"})}}>-</button>
       <span style={{fontWeight:"bolder" , fontSize:"25px"}}>{counter}</span>
       <button onClick={()=>{dispatch({type:"INCREASE"})}}>+</button>   

    </div>
  
  );
}

export default App;
