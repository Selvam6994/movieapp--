import { Route,Routes } from "react-router-dom";
import Addmovies from "./Addmovies";
import "./App.css";
import Movielist from "./Movielist";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
       <Nav></Nav>
      <Routes>
     <Route path="/" element={<Movielist/>}/>
     <Route path="addmovies" element={<Addmovies/>}/>
      </Routes>
    </div>
  );
}

export default App;
