import { useState } from "react";
import "../Header/Header.scss";

function Header() {
  const [toggle, setToggle] = useState(false);

  function changeToggle() {
    let navbar = document.getElementById("navbar");
    let menuicon = document.getElementById("menuicon");

    if (navbar && menuicon) {
      navbar.classList.toggle("opennavbar");

      if (navbar.classList.contains("opennavbar")) {
        menuicon.innerHTML = "close";
      } else {
        menuicon.innerHTML = "menu";
      }
    }

    setToggle(!toggle);
  }

  return (
    <div id="navbar" className="col-12">
      <div className="col-1" id="about">
        About
      </div>
      <div className="col-1">Projects</div>
      <div className="col-1">Contact</div>
      <span
        className="material-symbols-outlined"
        onClick={changeToggle}
        id="menuicon"
      >
        {toggle ? "close" : "menu"}
      </span>
    </div>
  );
}

export default Header;
