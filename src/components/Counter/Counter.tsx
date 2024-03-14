import React, { useReducer } from "react";
import "./Counter.css";

type CounterStateProps = {
  count: number;
};
type UpdateActionProps = {
  type: "increment" | "decrement";
  payload: number;
};
type ResetActionProps = {
  type: "reset";
};
type CounterActionProps = UpdateActionProps | ResetActionProps;
const initialState = {
  count: 0,
};

function reducer(state: CounterStateProps, action: CounterActionProps) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      Count : {state.count >= 0 ? state.count + "❤️" : -state.count + "💔"}
      <button
        className="counter-button"
        aria-label="like button"
        onClick={() => dispatch({ type: "increment", payload: 1 })}
      >
        👍Like
      </button>
      <button
        className="counter-button"
        aria-label="dislike button"
        onClick={() => dispatch({ type: "decrement", payload: 1 })}
      >
        👎Dislike
      </button>
      <button
        className="counter-button"
        aria-label="reset button"
        onClick={() => dispatch({ type: "reset" })}
      >
        🚫Rest
      </button>
    </div>
  );
}

export default Counter;
