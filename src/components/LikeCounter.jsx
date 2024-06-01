/* eslint-disable no-unused-vars */
import React, { useReducer } from "react";
import { initialValue, Reducer } from "./Reducer";

const LikeCounter = () => {

  const [state, dispatch] = useReducer(Reducer, initialValue);
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
      <button className="button-like" onClick={handleIncrement} style={{backgroundColor:"lightgreen"}}>Like</button>
      <button className="button-unlike" onClick={handleDecrement} style={{backgroundColor:"red"}}>Unlike</button> 
    </>
  );
};
export default LikeCounter;