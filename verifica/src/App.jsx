import "./App.css";
import Counter from "./components/Counter";
import { useState } from "react";
import CounteSimple from "./components/CounterSimple";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Counter count={count} setCount={setCount} />
      <Counter count={count} setCount={setCount} />
      <Counter count={count} setCount={setCount} />
      <hr />
      <CounteSimple />

      <h1 className="h2 h1">Ciao</h1>
    </>
  );
}

export default App;
