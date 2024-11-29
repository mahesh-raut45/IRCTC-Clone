import "./App.css";
import { HomePage } from "./Components/HomePage";
import { Nav } from "./Components/Nav";
import { SearchComp } from "./Components/SearchComp";
import { TraiCard } from "./Components/TrainCard";

const train = {
  name: "Rajdhani Exp",
  from: "Delhi",
  to: "Mumbai",
  deptTime: "05:00 PM",
  arivalTime: "11:30 PM",
  fare: 100,
};

function App() {
  return (
    <div className="App">
      <HomePage />
      <TraiCard train={train} />
      {/* <SearchComp /> */}
    </div>
  );
}

export default App;
