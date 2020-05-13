import React from "react";
import { useDispatch } from "react-redux";
import { CLEAR_MESSAGE } from "../../actions/actionTypes";

export default function Notify(props) {
  const dispatch = useDispatch();

  return (
    <h3 className="error" onClick={() => dispatch({ type: CLEAR_MESSAGE })}>
      <button onClick={() => dispatch({ type: CLEAR_MESSAGE })}>✖</button>
      {props.message}
    </h3>
  );
}
