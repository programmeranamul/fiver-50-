import style from "../../../styles/Header.module.css";
import { useState } from "react";

function AddressFormat() {
  const [active, setActive] = useState("ONE");
  return (
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
  );
}

export default AddressFormat;
