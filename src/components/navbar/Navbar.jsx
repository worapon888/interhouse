import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <img src="./logo_intertionHoues.png" alt="logo" className="img"></img>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__list-li">
            <a href="#" className="nav__link">
              หน้าแรก
            </a>
          </li>
          <li className="nav__list-li">
            <a href="#" className="nav__link">
              เกี่ยวกับเรา
            </a>
          </li>
          <li className="nav__list-li">
            <a href="#" className="nav__link">
              โมเดล
            </a>
          </li>
          <li className="nav__list-li">
            <a href="#" className="nav__link">
              ติดต่อเรา
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
