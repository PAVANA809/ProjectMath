import React from "react";
import parse from "react-html-parser";
import "../App.css"
import "./bodyRight1.css";


export const Righttag = (props) => {
  
  return (
    <div className="body-right">
      <p>
        {props.k} {props.unit} {props.subUnit[0]} {props.subUnit[1]}
      </p>
      {parse(props.con)}
    </div>
  );
};
