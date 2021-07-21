import "./App.css";
import { useState } from "react";
import img from "./calculator.png";

function App() {
  let newValue = 0;
  const [counter, setSwitch] = useState(0);
  // const [counter2, setSwitch2] = useState(0);
  // // const [newValue, setSwitch3] = useState(0);
  const increment = () => {
    newValue = counter + 1;

    return setSwitch(newValue);
  };
  const decrement = () => {
    newValue = counter - 1;
    return setSwitch(newValue);
  };
  const reset = () => {
    newValue = 0;
    return setSwitch(newValue);
  };

  return (
    <div>
      <header>
        <img src={img} alt="" />
        <span>React Counter</span>
      </header>
      <main>
        <div>
          {" "}
          <button
            style={{ visibility: counter === 0 ? "hidden" : "visible" }}
            onClick={decrement}
          >
            -
          </button>
          <div className="result">
            <span>{counter}</span>
          </div>
          <button
            style={{ visibility: counter === 10 ? "hidden" : "visible" }}
            onClick={increment}
          >
            +
          </button>
        </div>
        <div>
          <button onClick={reset}>Reset</button>
        </div>
      </main>
      <footer>
        {" "}
        <p>
          Made with <span>React</span> at{" "}
          <a href="https://www.lereacteur.io/">Le Reacteur</a> By{" "}
          <a href="https://github.com/polatonur">Onur</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
