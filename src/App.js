import React, { useCallback } from "react";
import Dropdown, { Line } from "./Dropdown";
import "./styles.css";

export default function App() {
  const customDropdownToggle = useCallback((props) => {
    return <div {...props}>Custom Toggle here</div>;
  }, []);
  return (
    <div className="App">
      <Dropdown>
        <div>Download SVG</div>
        <div>Delete</div>
        <Line />
        <div>Delete</div>
      </Dropdown>
      <Dropdown customToggle={customDropdownToggle}>
        <div>Download SVG</div>
        <div>Delete</div>
      </Dropdown>
      <div style={{ position: "fixed", top: "400px" }}>
        <Dropdown>
          <div>Download SVG</div>
          <div>Delete</div>
        </Dropdown>
      </div>
      <div style={{ position: "fixed", left: "550px", top: "0px" }}>
        <Dropdown>
          <div>Download SVG</div>
          <div>Delete</div>
        </Dropdown>
      </div>
    </div>
  );
}
