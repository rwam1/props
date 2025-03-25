import React, { useReducer } from "react";

const CounterReducer = () => {
  const reducer = (state, action) => {
    console.log(state);
    switch (action.type) {
      case "increment":
        // {
        // count:0
        // }
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "reset":
        return initialState;
    }
  };
  const [state, dispatch] = useReducer(reducer, 0)
  return (
    <div>
      {state.count}
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
};

export default CounterReducer;
