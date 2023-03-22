import React, { useState, useEffect } from "react";
import './App.css';

import Lefttag from "./BodyLeft";
import {Righttag} from "./bodyRight/Bodyright.js";
import Navbar from "./homePage/Navbar";


function App(props) {
  // var link1 = "http://localhost:5000";
  var link2 = "https://projectmath.onrender.com";
  var link = link2
  const [unit, setUnit] = useState("");
  const [subUnit, setSubUnit] = useState("");
  const [k, setK] = useState("");
  const [data, setData] = useState([]);
  const [content, setContent] = useState([]);

  useEffect(() => {
    fetch(link+"/index/"+props.cls)
      .then((res) => res.json())
      .then((d) => setData(d));
      
  }, [link, props.cls]);

  useEffect(() => {
    fetch(link+"/content/" + props.cls + "/" + k+"/"+subUnit[0])
      .then((res) => res.json())
      .then((d) => setContent(d));
  }, [subUnit, k, link, props.cls]);
  
  const setstate = (k, unit, subUnit) => {
    setK(k);
    setUnit(unit);
    setSubUnit(subUnit);
  }
  
  return (
    <div>
      <Navbar/>
      <div className="body-tag">
        <Lefttag setFun={setstate}  data={data} />
        <Righttag k={k} unit={unit} subUnit={subUnit} con={ content} />
      </div>
    </div>
  );
}

export default App;
