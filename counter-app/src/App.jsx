import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter App</h2>
      
      <h1>{count}</h1>

      <div className="oprators">
        <button className="increase" onClick={()=> setCount(count+1)}>+</button>
        <button className="reset" onClick={()=> setCount(0)}>Reset</button>
        <button className="decrease" onClick={()=> setCount(count-1)}>-</button>
      </div>
    </div>
  );
}

export default App;
