import React, { useState, useRef, useEffect } from "react";
import useOutsideClick from "./useOutsideClick";
import { AngleDown, AngleRight } from "./Icon";

const DefaultToggle = React.forwardRef((props, ref) => {
  return (
    <button {...props} className="dropdown-button" ref={ref}>
      {props.title ? props.title : "Dropdown button"}
      <span style={{ marginLeft: "5px" }}>
        {props.isOpen ? <AngleDown /> : <AngleRight />}
      </span>
    </button>
  );
});

function Dropdown(props) {
  const [isOpen, setOpen] = useState(false);
  const [bodyDropdownStyle, setBodyStyle] = useState({});

  const wrapperRef = useRef(null);
  const dropdownBodyRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    if (isOpen && dropdownBodyRef.current) {
      let newBodyStyle = {};

      const { height, width } = dropdownBodyRef.current.getBoundingClientRect();

      const {
        bottom: outerDropdownHeight,
        left: outerDropdownLeft
      } = wrapperRef.current.getBoundingClientRect();

      if (toggleRef.current) {
        const {
          height: buttonHeight
        } = toggleRef.current.getBoundingClientRect();
        newBodyStyle = {
          top: `${buttonHeight}px`
        };
      }

      const bottomSpace = height + outerDropdownHeight;

      if (bottomSpace > window.innerHeight) {
        newBodyStyle = {
          top: `${-height}px`
        };
      }

      const rightSpace = width + outerDropdownLeft;
      if (rightSpace > window.innerWidth) {
        newBodyStyle = {
          ...newBodyStyle,
          left: `${-width}px`
        };
      }
      setBodyStyle(newBodyStyle);
    }
  }, [isOpen]);
  useOutsideClick(wrapperRef, () => {
    setOpen(false);
  });

  const handleShowDropdown = (e) => {
    setOpen(!isOpen);
  };

  return (
    <div className="dropdown-container" ref={wrapperRef}>
      {props.customToggle ? (
        React.cloneElement(props.customToggle(), {
          onClick: handleShowDropdown,
          className: "",
          ref: toggleRef
        })
      ) : (
        <DefaultToggle
          isOpen={isOpen}
          onClick={handleShowDropdown}
          ref={toggleRef}
        />
      )}
      <div
        className={`dropdown ${isOpen ? "dropdown-open" : ""}`}
        ref={dropdownBodyRef}
        style={bodyDropdownStyle}
      >
        <ul>
          {React.Children.map(props.children, (child) => {
            if (child.type.name === "Line") {
              return child;
            }
            return <li>{child}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export function Line(props) {
  return <div className="dropdown-line"></div>;
}

export default Dropdown;
