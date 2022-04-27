import "./App.css";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Routers } from "./components/Route";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routers />
    </div>
  );
}

export default App;
