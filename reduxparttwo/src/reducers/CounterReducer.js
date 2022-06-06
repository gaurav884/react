import { createSlice } from "@reduxjs/toolkit"


const counterSlice = createSlice({
    name: "counterState",
    initialState: { visible: true, counter: 0 },
    reducers:{
        increment(state , action){
            state.counter++
        },
        decrement(state , action){
             state.counter--
        }
    }
})

export const counterActions = counterSlice.actions

export default counterSlice.reducer





// const counterReducer = (state={visible:true,counter:4} , action) => {
//    if(action.type==="INCREASE"){
//        return{
//           visible:true,
//           counter:state.counter+1
//        }
//    }
//    else if(action.type==="DECREASE"){
//        return{
//            visible:true,
//            counter:state.counter-1
//        }
//    }
//    else{
//        return state
//    }
// }

// export default counterReducer


