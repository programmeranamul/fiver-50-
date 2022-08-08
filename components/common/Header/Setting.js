import { Icon } from "@iconify/react";
import style from "../../../styles/Setting.module.css";
import MyDropDown from "./../MyDropDown";
import { useState, useEffect } from "react";
import { useTheme } from './../../../lib/ThemeContext';

function Setting() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme, my } = useTheme()

  const handelDropDown = () => {
    setOpen(!open);
  };

  // const [choosedTheme, setChoosedTheme] = useState("Light");
  const [choosedTheme, setChoosedTheme] = useState(theme);
  const [timeFormet, setTimeFormet] = useState("Exact");

  useEffect(() => {
    setChoosedTheme(theme)
    console.log("theme from context", theme);
  }, [theme])

  useEffect(() => {
    if (choosedTheme !== "Light") {
      document.body.className = "dark-theme";
      return;
    }
    document.body.className = "light-theme";
  }, [choosedTheme]);

  console.log("choosedTheme", choosedTheme)

  const handelThemeChange = (thm) => {
    setChoosedTheme(thm);
    localStorage.setItem("theme", JSON.stringify(thm));
    my(thm)
  };


  


  return (
    <div className="position-relative">
      <button className={style.my_btn} onClick={handelDropDown}>
        <span className={`${style.btn_text}`}>
          <Icon icon="icon-park-solid:setting" className={style.icon} />
        </span>
      </button>
      <MyDropDown open={open}>
        {/* swith theme */}
        <div className="mb-3">
          <h4 className={style.title}>Theme</h4>
          <div className={style.switcher}>
            <div
              className={`${
                choosedTheme === "Light" ? "blue-bg white-color" : "blue-color"
              } ${style.side_btn}`}
              onClick={() => handelThemeChange("Light")}
            >
              Light
            </div>
            <div
              className={`${
                choosedTheme !== "Light" ? "blue-bg white-color" : "blue-color"
              } ${style.side_btn}`}
              onClick={() => handelThemeChange("Dark")}
            >
              Dark
            </div>
          </div>
        </div>

        {/* swith time fromet */}
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
