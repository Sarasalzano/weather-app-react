import { useState } from "react";

export default function CounteSimple() {
  const [counter, setCounter] = useState(0);

  return (
    <button
      onClick={() => {
        setCounter((counter) => counter + 1); //
        setCounter(1); // setCounter()
        setCounter((counter) => counter + 1); // setCounter()
        console.log(counter); // 0
        // [(c => c + 1), 1, (c => c + 1)]
        // 0 => 1 => 1 => 2
      }}
    >
      {counter}
    </button>
  );
}
