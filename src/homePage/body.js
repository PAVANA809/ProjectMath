import React from 'react'
import { Link } from "react-router-dom";
import "./home.css"

function Body() {
  return (
    <div className="home-body">
      <div>
        <button className="hbtn">
          <a href="/Class11">Class11</a>
        </button>

        <button className="hbtn">
          <a href="/Class12">Class12</a>
        </button>
      </div>
    </div>
  );
}

export default Body