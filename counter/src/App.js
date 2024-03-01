import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prevState) => prevState + 1);
  const decrement = () => setCount((prevState) => prevState - 1);
  return (
    <div className="App">
      <h1>Count : {count}</h1>
      <div className="buttons">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
}
