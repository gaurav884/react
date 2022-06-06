import Photos from "./hooks/Photos"
import themeContext from "./themeContext"


function App() {



  return (

    <themeContext.Provider value={{ name: "gaurav", "id": "5355" }}>
      <div className="App">
        <Photos />
      </div>
    </themeContext.Provider>

  );
}

export default App;
