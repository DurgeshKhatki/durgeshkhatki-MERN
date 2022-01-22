
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./Components/Home";
import Details from "./Details";
import DetailsM from "./Components/DetailsM";

function App() {
  return(
<>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/Details" element={<Details/>}/>
        <Route path="/DetailsM" element={<DetailsM/>}/>
        <Route />
      
       </Routes>
    </Router>
    
</> 
  );
}

export default App;
