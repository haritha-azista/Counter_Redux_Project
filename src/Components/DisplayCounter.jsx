import React from "react";
import { useSelector } from "react-redux";
// import store from "../../store/Index";
const DisplayCounter = () => {
  const counter = useSelector(store=>store.counter);
  return (
    <div>
      <p className="lead mb-4">Counter Value : {counter}</p>
    </div>
  );
};

export default DisplayCounter;
