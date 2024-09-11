import React, { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const inputValue = useRef();

  const dispatchAction = useDispatch();

  const handleIncrement = () => {
    dispatchAction({ type: "INC" });
  };
  const handleDecrement = () => {
    dispatchAction({ type: "DEC" });
  };
  const handleAddition = () => {
    dispatchAction({ type: "ADD", payload: { num: inputValue.current.value } });
    inputValue.current.value = "";
  };
  const handleSubtraction = () => {
    dispatchAction({ type: "SUB", payload: { num: inputValue.current.value } });
    inputValue.current.value = "";
  };
  //   console.log(inputValue.current);

  return (
    <div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-success btn-lg px-4 gap-3"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-primary btn-lg px-4"
          onClick={handleDecrement}
        >
          -1
        </button>
      </div>
      <br />
      <div className="d-grid gap-2 d-flex justify-content-center">
        <div className="input-group ">
          <input
            ref={inputValue}
            type="text"
            className="form-control"
            placeholder="enter number"
          />
          <button
            className="btn btn-warning"
            type="button"
            onClick={handleAddition}
          >
            Add
          </button>
          <button
            className="btn btn-info"
            type="button"
            onClick={handleSubtraction}
          >
            Subtract
          </button>
        </div>
      </div>
    </div>
  );
};

export default Controls;
