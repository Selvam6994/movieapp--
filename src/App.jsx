import "./App.css";
import Moviecard from "./Moviecard";
import Movielist from "./Movielist";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Movielist></Movielist>
    </div>
  );
}

export default App;
