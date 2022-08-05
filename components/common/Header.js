import style from "../../styles/Header.module.css";
import logo from "../../public/header/logo.svg";
import Link from "next/link";
import { Icon } from "@iconify/react";
import {useState} from "react"

import Image from "next/image";



function Header() {
  const [active, setActive] = useState("ONE")

  return (
    <header className={style.header}>
      <div className="container">
        <nav className={`d-flex justify-content-between align-items-center`}>
          <Link href="/">
            <a className="logo-area d-flex">
              <Image src={logo} alt="logo" />
              <div className={`d-none d-md-flex ${style.logo_text}`}>
                Harmony
                <sapn className={style.logo_text_sm}>Block Explorer</sapn>
              </div>
            </a>
          </Link>

          <div className={`d-flex align-items-center ${style.right_area}`}>
            <div className={`d-flex align-items-center`}>
              <p className={`d-none d-md-block ${style.address_text}`}>Address Format</p>
              <div className={style.address_type}>
                <div className={`${active === "ONE" ?style.active_one :style.active_eth } ${style.active_int}`}></div>
                <div className={style.one} onClick={() => setActive("ONE")}>
                  <p className={`mb-0 ${active === "ONE" ? "blue-color" : "white-color"}`} >ONE</p>
                </div>
                <div className={style.eth} onClick={() => setActive("ETH")}>
                  <p className={`mb-0 ${active !== "ONE" ? "blue-color" : "white-color"}`}>ETH</p>
                </div>
              </div>
            </div>
            <div className="d-flex">
              <button className={style.my_btn}>
                <span className={style.btn_text}>
                  Tokens <Icon icon="fe:drop-down"  className={style.icon}/>
                </span>
              </button>
              <button className={style.my_btn}>
                <span className={style.btn_text}>
                  Tools <Icon icon="fe:drop-down"  className={style.icon}/>
                </span>
              </button>
              <button className={style.my_btn}>
                <span className={style.btn_text}>
                  <Icon icon="icon-park-solid:setting"  className={style.icon}/>
                </span>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
