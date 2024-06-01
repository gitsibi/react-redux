/* eslint-disable no-unused-vars */
import React, { useReducer } from "react";
import { startingValue, Reducer } from "./Reducer";

const LikeCounter = () => {

  const [state, dispatch] = useReducer(Reducer, startingValue);
  const handleIncrement = () => 
  {
    dispatch({ type: "INCREMENT" });
  };
  const handleDecrement = () => 
  {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <> 
      <h1 className="heading-text">{state.count}</h1> 
      <button className="button-like" onClick={handleIncrement} }>Like</button>
      <button className="button-unlike" onClick={handleDecrement} }>Unlike</button> 
    </>
  );
};
export default LikeCounter;
