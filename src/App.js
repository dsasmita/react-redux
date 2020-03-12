import React, { useState, useEffect } from "react";
import { createStore } from "redux";

// Reducer
function reducer(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "GET":
      console.log(state);
      return state;
    default:
      return state;
  }
}

// Store
const store = createStore(reducer);

function App() {
  const [counter, setCounter] = useState(0);

  // Subscribe
  useEffect(() => {
    store.subscribe(() => {
      setCounter(store.getState());
    });
  });
  return (
    <>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button
        onClick={() => {
          store.dispatch({ type: "INCREMENT" });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          store.dispatch({ type: "DECREMENT" });
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          store.dispatch({ type: "GET" });
        }}
      >
        =
      </button>
    </>
  );
}

export default App;
