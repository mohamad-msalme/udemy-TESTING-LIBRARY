import React from "react";
import "./index.css";
export const ColorBtn = ({ disabled = false }) => {
  const [state, setState] = React.useState(true);
  const label = state ? "Change to blue" : "Change to red";

  return (
    <button
      disabled={disabled}
      className={`${state ? "red" : "blue"}`}
      onClick={() => setState((prev) => !prev)}
    >
      {label}
    </button>
  );
};
