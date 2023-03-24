import React, { useState } from "react";
import "./bodyRight/Bodyright.js";
import "./App.js";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import "./App.css"


export default function Lefttag(props) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const setSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const setValues = (k, unit, subUnit) => {
    props.setFun(k, unit, subUnit);
  };
  const setSelectedItemOnClick = (item) => {
    setSelectedItem(item);
  };
 
  return (
    <div
      className={`${
        sidebarOpen ? "main-left-body" : "responsive-main-left-body"
      }`}
    >
      <div className={`${sidebarOpen ? "show" : "hide"}`}>
        <div className="close-btn-sidebar" onClick={setSidebar}>
          <NavigateBeforeIcon />
        </div>
        {props.data.map((item, index) => {
          return (
            <GetUnit
              key={index}
              k={item[0]}
              unit={item[1]}
              subUnit={item[2]}
              selectedItem={selectedItem}
              setstate={[setValues, setSelectedItemOnClick]}
            />
          );
        })}
      </div>
      <div className={`open-btn-sidebar ${sidebarOpen? "hide":""}`}>
        <NavigateNextIcon onClick={setSidebar} />
      </div>
    </div>
  );
}

function GetUnit(props) {
  const [sign, setSign] = useState("+");
  const [display, setDisplay] = useState(false);

  const clicked = () => {
    setSign(sign === "+" ? "-" : "+");
    setDisplay(!display);
    
  };

  const updateRight = (k, unit, subUnit) => {
    props.setstate[0](k, unit, subUnit);
    props.setstate[1](subUnit);
  };
  return (
      <div className="unit">
        <p onClick={() => clicked()}>
          <span className="sign">{sign}</span>
          {props.k}: {props.unit}{" "}
        </p>
        <ul className={`sub-units ${display ? "show" : "hide"}`}>
          {props.subUnit.map((item, index) => {
            return (
              <li
                key={index}
                className={props.selectedItem === item ? "selected" : ""}
                onClick={() => updateRight(props.k, props.unit, item)}
              >
                <span
                  className={`eiphen ${
                    props.selectedItem === item ? "" : "hide"
                  }`}
                >
                  ~
                </span>
                {item[0]}:{} {item[1]}
              </li>
            );
          })}
        </ul>
    </div>
    
  );
}
