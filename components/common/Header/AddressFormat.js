import style from "../../../styles/Header.module.css";
import { useState } from "react";
import { useTheme } from "../../../lib/ThemeContext";

function AddressFormat() {
  const [active, setActive] = useState("ONE");
  const { theme, setTheme, my } = useTheme();
  const lightTheme = theme == "Light";

  return (
    <div className={`d-flex align-items-center`}>
      <p className={`d-none d-md-block ${style.address_text}`}>
        Address Format
      </p>
      <div
        className={`${style.address_type} ${
          lightTheme ? style.address_type_l : style.address_type_d
        }`}
      >
        <div
          className={`${
            active === "ONE" ? style.active_one : style.active_eth
          } ${style.active_int} ${
            lightTheme ? style.active_l : style.active_d
          }`}
        ></div>
        <div className={style.one} onClick={() => setActive("ONE")}>
          <p
            className={`mb-0 ${
              active === "ONE" ? style.active_col : style.deactive_col
            }`}
          >
            ONE
          </p>
        </div>
        <div className={style.eth} onClick={() => setActive("ETH")}>
          <p
            className={`mb-0 ${
              active !== "ONE" ? style.active_col : style.deactive_col
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
