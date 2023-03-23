import React from "react";
import {useState} from "react";
import "./home.css";
import "./navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';
import CloseIcon from "@mui/icons-material/Close";
function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={` ${showMenu ? "responsive_header" : "header"}`}>
      <p>
        <a href="/">EasyMath</a>
      </p>
      <div className={`right-list ${showMenu ? "responsive_nav" : ""}`}>
        <a href="/">Home</a>
        <a href="/">Login</a>
      </div>
      <div className={`close-btn ${showMenu ? "" : "hide"}`}>
        <CloseIcon onClick={handleMenu} />
      </div>
      <div className={`${showMenu ? "hide" : "open-btn"}`}>
        <ReorderIcon onClick={handleMenu} />
      </div>
    </div>
  );
}

export default Navbar;
