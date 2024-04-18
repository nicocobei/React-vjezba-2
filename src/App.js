import logo from "./logo.svg";
import "./App.css";
import Person from "./utilities/Default";
import { Hello, Name, city } from "./utilities/Named";

function App() {
  return (
    <div className="App">
      <p>
        <b>Ime</b>: {Person.name}
      </p>
      <p>
        <b>Prezime</b>: {Person.lastName}
      </p>
      <p>
        <b>Pozdrav</b>: <Hello />
      </p>
      <p>
        <b>Intro</b>: <Name />
      </p>
      <p>
        <b>Grad</b>: {city}
      </p>
    </div>
  );
}

export default App;
