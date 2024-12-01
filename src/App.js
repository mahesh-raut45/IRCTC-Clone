import { useState } from "react";
import "./App.css";
import { HomePage } from "./Components/HomPage/HomePage";
import { Nav } from "./Components/Nav/Nav";
import { SearchComp } from "./Components/SearchComp";
import { StopWatch } from "./Components/StopWatch";
import { TraiCard } from "./Components/TrainCard/TrainCard";
import { Search } from "./Components/Search/Search";

const train = {
  name: "Rajdhani Exp",
  from: "Delhi",
  to: "Mumbai",
  deptTime: "05:00 PM",
  arivalTime: "11:30 PM",
  fare: 100,
};

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <HomePage />
      <TraiCard train={train} />
      {/* <Search /> */}

      {/* <SearchComp />

      {/* {show && <StopWatch />}
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "hide" : "show"}
      </button> */}
    </div>
  );
}

export default App;
