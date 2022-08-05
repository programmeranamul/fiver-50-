import style from "../../../styles/Header.module.css";
import { Icon } from "@iconify/react";
import { useState } from "react";


import MyDropDown from "../MyDropDown";
import Logo from './Logo';
import NavMenu from './NavMenu';

function Header() {
  const [active, setActive] = useState("ONE");

  return (
    <header className={style.header}>
      <div className="container">
        <nav className={`d-flex justify-content-between align-items-center`}>
          <Logo />
         <NavMenu />
        </nav>
      </div>
    </header>
  );
}

export default Header;
