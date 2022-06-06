import UseEffect from "./components/UseEffect"
import UseReducer from "./components/UseReducer"
import UseState from "./components/UseState"
import UseMemo from "./components/UseMemo"
import { useState} from "react"
import Context from "./components/CreateContext"


function App() {
                                                                       //generally useReducer is used with useContext for global states
                                                                      

  return (
    <Context.Provider value={{value:"this is the context value"}}>               
    <div className="App">
      <UseEffect/>
       <UseState />
       <UseReducer/>
       <UseMemo/>
    </div>
    </Context.Provider>
  );
}

export default App;
