import { Icon } from "@iconify/react";
import style from "../../../styles/Setting.module.css";
import MyDropDown from "./../MyDropDown";
import { useState } from "react";

function Setting() {
  const [open, setOpen] = useState(false);

  const handelDropDown = () => {
    setOpen(!open);
  };

  const [choosedTheme, setChoosedTheme] = useState("Light");
  const [timeFormet, setTimeFormet] = useState("Exact");

  return (
    <div className="position-relative">
      <button className={style.my_btn} onClick={handelDropDown}>
        <span className={`white-color ${style.btn_text}`}>
          <Icon icon="icon-park-solid:setting" className={style.icon} />
        </span>
      </button>
      <MyDropDown open={open}>
        <div className="mb-3">
          <h4 className={style.title}>Theme</h4>
          <div className={style.switcher}>
            <div
              className={`${
                choosedTheme === "Light" ? "blue-bg white-color" : "blue-color"
              } ${style.side_btn}`}
              onClick={() => setChoosedTheme("Light")}
            >
              Light
            </div>
            <div
              className={`${
                choosedTheme !== "Light" ? "blue-bg white-color" : "blue-color"
              } ${style.side_btn}`}
              onClick={() => setChoosedTheme("Dark")}
            >
              Dark
            </div>
          </div>
        </div>
        <div className="mb-3">
          <h4 className={style.title}>Date Format</h4>
          <div className={style.switcher}>
            <div
              className={`${
                timeFormet === "Exact" ? "blue-bg white-color" : "blue-color"
              } ${style.side_btn}`}
              onClick={() => setTimeFormet("Exact")}
            >
              Exact
            </div>
            <div
              className={`${
                timeFormet !== "Exact" ? "blue-bg white-color" : "blue-color"
              } ${style.side_btn}`}
              onClick={() => setTimeFormet("Relative")}
            >
              Relative
            </div>
          </div>
        </div>
      </MyDropDown>
    </div>
  );
}

export default Setting;
