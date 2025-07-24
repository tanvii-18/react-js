import { useState } from "react";
import "./component/style.css";

function App() {
  const [count, setCounter] = useState(0);
  const [flag, setFlag] = useState(false);
  const [prime, setPrime] = useState(false);

  function evenOdd(num) {
      if (num % 2 === 0) {
        setFlag(false);
      }
      else{
        setFlag(true)
      }
    
  }

  function findPrimeNum(num) {
    if (num <= 1) {
      setPrime(false);
      return;
    }
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        setPrime(false);
        return;
      }
    }
    setPrime(true);
  }

  return (
    <div className="app">
      <h1 style={{paddingBottom:'10px', color:'white'}}>Counter App</h1>
      <div>
        <button
          disabled={count == 0}
          data-testid="minusonebtn"
          onClick={() => {
            let newState = count - 1;
            setCounter(newState);
            evenOdd(newState);
            findPrimeNum(newState);
          }}
        >
          - <span>1</span>
        </button>{" "}
        <button
          data-testid="plusonebtn"
          onClick={() => {
            let newState = count + 1;
            setCounter(newState);
            evenOdd(newState);
            findPrimeNum(newState);
          }}
        >
          + <span>1</span>
        </button>
        <div>
          <button data-testid="resetbtn" onClick={() => setCounter(0)}>
            Reset
          </button>
        </div>
      </div>
      <span data-testid="counter" className="values" style={{fontSize:'20px', fontWeight:'600'}}>Count : {count}</span>
      <div className="values">
        <span data-testid="odd-or-even">
          This Number is : {flag ? "even" : "odd"}
        </span>
        <span data-testid="is-prime">
          Prime Number : {prime ? "true" : "false"}
        </span>
      </div>
    </div>
  );
}

export default App;
