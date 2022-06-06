import React from 'react'

const ThemeToggleReducer = (state={lighttheme:true} , action) => {
     if(action.type==="TOGGLE"){
         return{
             lighttheme:!state.lighttheme
         }
     }
     else{
        return state
    }
}

export default ThemeToggleReducer
