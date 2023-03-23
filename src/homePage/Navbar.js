import React from 'react'
import { useRef } from "react";
import './navbar.css'
import ListIcon from "@mui/icons-material/List";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>
        <a href="/">EasyMath</a>
      </h3>
      <nav ref={navRef}>
        <a href="/">Home</a>
        <a href="/">Login</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <CloseIcon/>
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <ListIcon />
      </button>
    </header>
  );
}

export default Navbar