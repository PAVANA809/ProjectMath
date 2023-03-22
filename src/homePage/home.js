import React from "react";
import Navbar from "./Navbar";
import Body from "./body";
import { useEffect } from "react";


function Home() {
  useEffect(() => {
    document.title = "EasyMath";
  }, []);
  return (
      <div className="home">
          <Navbar />
          <Body />
    </div>
  );
}

export default Home