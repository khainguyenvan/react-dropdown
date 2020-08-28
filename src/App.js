import React, { useCallback } from "react";
import Dropdown, { Line } from "./Dropdown";
import "./styles.css";
import { Pen, TrashIcon } from "./Icon";

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const colors = Array.from(Array(21).keys()).map(() => getRandomColor());

function ColorPad() {
  return colors.map((color) => {
    const styled = { backgroundColor: color, borderColor: color };

    return (
      <div
        key={`color-pad-${color}`}
        style={styled}
        className="color-item"
      ></div>
    );
  });
}

const ContentDropdown = [
  <div className="menu-item">
    <Pen />
    <span>Download SVG</span>
  </div>,
  <div className="menu-item">
    <TrashIcon />
    <span>Delete</span>
  </div>,
  <Line />,
  <div>
    <p>Color</p>
    <div className="color-pad">
      <ColorPad />
    </div>
  </div>
];

export default function App() {
  const customDropdownToggle = useCallback((props) => {
    return <div {...props}>Custom Toggle here</div>;
  }, []);

  return (
    <div className="App">
      <Dropdown>{ContentDropdown}</Dropdown>
      <Dropdown customToggle={customDropdownToggle}>{ContentDropdown}</Dropdown>
      <div style={{ position: "fixed", top: `${window.innerHeight - 50}px` }}>
        <Dropdown>{ContentDropdown}</Dropdown>
      </div>
      <div
        style={{
          position: "fixed",
          left: `${window.innerWidth - 150}px`,
          top: "0px"
        }}
      >
        <Dropdown>{ContentDropdown}</Dropdown>
      </div>
      <div
        style={{
          position: "fixed",
          left: `${window.innerWidth - 150}px`,
          top: `${window.innerHeight - 50}px`
        }}
      >
        <Dropdown>{ContentDropdown}</Dropdown>
      </div>
    </div>
  );
}
