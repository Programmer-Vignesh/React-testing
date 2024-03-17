import Greet from "./components/Greet/Greet";
import "./App.css";
import Person from "./components/PersonList/PersonList";
import Status from "./components/Status/Status";
import Heading from "./components/Heading/Heading";
import Counter from "./components/Counter/Counter";
import Timer from "./components/Timer/Timer";

const nameList = [
  {
    first: "Bruce",
    last: "Banner",
  },
  {
    first: "Tony",
    last: "Stark",
  },
  {
    first: "Steve",
    last: "Rogger",
  },
];

function App() {
  return (
    <div className="App">
      <Heading>
        <h1>Welcome to codePractice site</h1>
      </Heading>
      <header className="App-header">
        <h2>Learn Jest with React</h2>
      </header>
      <Greet name="Vignesh" sessionCount={25} isLogged={false} />
      <Person name={nameList} />
      <Counter />
      <Status status="loading" />
      <Timer />
    </div>
  );
}

export default App;
