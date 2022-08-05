import style from "../../../styles/Header.module.css";
import { Icon } from "@iconify/react";
import { useState } from "react";
import Setting from './Setting';
import Tools from './Tools';
import Token from './Token';

function NavMenu() {
    const [active, setActive] = useState("ONE");
  return (
    <div className={`d-flex align-items-center ${style.right_area}`}>
    <div className={`d-flex align-items-center`}>
      <p className={`d-none d-md-block ${style.address_text}`}>
        Address Format
      </p>
      <div className={style.address_type}>
        <div
          className={`${
            active === "ONE" ? style.active_one : style.active_eth
          } ${style.active_int}`}
        ></div>
        <div className={style.one} onClick={() => setActive("ONE")}>
          <p
            className={`mb-0 ${
              active === "ONE" ? "blue-color" : "white-color"
            }`}
          >
            ONE
          </p>
        </div>
        <div className={style.eth} onClick={() => setActive("ETH")}>
          <p
            className={`mb-0 ${
              active !== "ONE" ? "blue-color" : "white-color"
            }`}
          >
            ETH
          </p>
        </div>
      </div>
    </div>
    <div className="d-flex">
      <Token />
      <Tools />
      <Setting />
    </div>
  </div>
  )
}

export default NavMenu