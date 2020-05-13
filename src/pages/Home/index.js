import React, { useState } from "react";
import Keypad from "../../components/KeyPad";
import Notify from "../../components/Notify";
import { keysData } from "../../../config";
import { callSuperHero } from "../../actions";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const [display, setDisplay] = useState([]);
  const result = useSelector((state) => state.search);
  const [names, setNames] = useState([]);
  const handleReset = () => {
    setDisplay([]);
    setNames([]);
  };

  const handleActionCall = (arr) => {
    if (arr[0] && arr[1]) {
      if (arr[0].join("") !== "Zero" || arr[1].join("") !== "space") {
        alert("Necessary codes zero and space not provided");
      } else {
        const formData = [...arr];
        formData.splice(0, 2);
        callSuperHero(dispatch, formData);
        handleReset();
      }
    } else {
      alert("No codes found to send");
    }
  };

  const handleClick = (item) => {
    if (item.key !== "*" && item.data !== "send") {
      const digits = [...display];
      const existingNameArr = [...names];
      digits.push(item.key);
      existingNameArr.push(item.data.split(""));
      setDisplay(digits);
      setNames(existingNameArr);
    } else {
      handleActionCall(names);
    }
  };

  return (
    <>
      {result.loading && <div className="loading">Loading...</div>}
      {result.message && <Notify message={result.message} />}
      <div className="dlpd-root">
        <div className="initial-view">
          <div className="display">
            <input type="text" disabled value={display.join("")} />
          </div>
          <Keypad data={keysData} onClick={handleClick} />
        </div>
      </div>
      <button className="reset" onClick={handleReset}>
        Clear Display
      </button>
    </>
  );
}
