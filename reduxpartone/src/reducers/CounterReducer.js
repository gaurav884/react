import React from 'react'

const counterReducer = (state={visible:true,counter:4} , action) => {
   if(action.type==="INCREASE"){
       return{
          visible:true,
          counter:state.counter+1
       }
   }
   else if(action.type==="DECREASE"){
       return{
           visible:true,
           counter:state.counter-1
       }
   }
   else{
       return state
   }
}

export default counterReducer