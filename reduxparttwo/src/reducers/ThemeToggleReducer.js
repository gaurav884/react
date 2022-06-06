
import { createSlice} from "@reduxjs/toolkit"



const themeSlice = createSlice({
    name:"themeState",
    initialState:{lighttheme: true}, 
    reducers:{
        toggle(state , action){
            state.lighttheme = !state.lighttheme
        }
    }
})

export const themeActions  = themeSlice.actions

export default themeSlice.reducer





// const ThemeToggleReducer = (state={lighttheme:true} , action) => {
//      if(action.type==="TOGGLE"){
//          return{
//              lighttheme:!state.lighttheme
//          }
//      }
//      else{
//         return state
//     }
// }
// console.log(ThemeToggleReducer)
// export default ThemeToggleReducer
