import React from "react";

export default function KeyPad({ data, onClick }) {
  return (
    <div className="keypad buttons">
      {data.map((v, i) => (
        <div
          key={"key-" + i}
          className="button digit"
          onClick={() => onClick(v)}
        >
          {v.key}
          <div className="sub-digit">{v.data}</div>
        </div>
      ))}
    </div>
  );
}
