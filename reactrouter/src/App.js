import{BrowserRouter , Route , Routes ,useParams} from "react-router-dom"
import './App.css';
import Contact from "./components/Contact"
import About from "./components/About"
import Products from "./components/Products"
import Navbar from "./components/Navbar"


function Routing(){
 const params = useParams();
  return <>
  <Routes>
    <Route path="/" exact element={<About/>}/>
    <Route path="/products/:yo" exact element={<Products/>}/>
    <Route path="/contact" exact element={<Contact/>}/>
    
     <Route path="*" exact element={<h1>page not found</h1>}/>
  
  </Routes>
  </> 
}


function App() {

  
  return (
    <div className="App">
    
    <BrowserRouter>
    <Navbar/>
 
       <Routing/>
     </BrowserRouter>
    </div>
  );
}

export default App;
