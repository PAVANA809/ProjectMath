import React from "react";
import "../App.css"
import "./bodyRight1.css";



export const Righttag = (props) => {
  
  return (
    <div className="body-right">
      <p>
        {props.k} {props.unit} {props.subUnit[0]} {props.subUnit[1]}
      </p>
      <div dangerouslySetInnerHTML={{ __html:  props.con }} />
    </div>
  );
};
