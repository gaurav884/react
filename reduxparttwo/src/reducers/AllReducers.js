import CounterReducer from "./CounterReducer"
import ThemeToggleReducer from "./ThemeToggleReducer"
import {combineReducers } from "redux"


const rootReducer = combineReducers({
    CounterReducer,
    ThemeToggleReducer
})

export default rootReducer