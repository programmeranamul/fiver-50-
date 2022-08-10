import { Icon } from "@iconify/react";
import style from "../../../styles/Setting.module.css";
import MyDropDown from "./../MyDropDown";
import { useState, useEffect, useRef } from "react";
import { useTheme } from './../../../lib/ThemeContext';

function Setting() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme, my } = useTheme()
  const lighTheme = theme === "Light"


  const [choosedTheme, setChoosedTheme] = useState(theme);
  const [timeFormet, setTimeFormet] = useState("Exact");

  useEffect(() => {
    setChoosedTheme(theme)
  }, [theme])

  useEffect(() => {
    if (choosedTheme !== "Light") {
      document.body.className = "dark-theme";
      return;
    }
    document.body.className = "light-theme";
  }, [choosedTheme]);


  const handelThemeChange = (thm) => {
    setChoosedTheme(thm);
    localStorage.setItem("theme", JSON.stringify(thm));
    my(thm)
  };


  // dropdown function

  const ref = useRef()

  const handelDropDown = () => {
    setOpen(!open);
  };


  useEffect(() => {
    const chechPopUp = (e) => {
      if (open && ref.current && !ref?.current?.contains(e.target)) {      
        setOpen(false);
      } 
    };
    document.addEventListener("click", chechPopUp);
    return () => {
      document.removeEventListener("click", chechPopUp);
    };
  }, [open]);


  return (
    <div className="position-relative" ref={ref}>
      <button className={style.my_btn} onClick={handelDropDown}>
        <span className={`${style.btn_text}`}>
          <Icon icon="icon-park-solid:setting" className={style.icon} />
        </span>
      </button>
      <MyDropDown open={open}>
        <div className="mb-3">
          <h4 className={style.title}>Theme</h4>
          <div className={`${lighTheme? style.switcher_l : style.switcher_d } ${style.switcher}`}>
            <div
              className={`${style.side_btn} ${lighTheme? style.btn_a : style.btn_in_a}`}
              onClick={() => handelThemeChange("Light")}
            >
              Light
            </div>
            <div             
              className={`${style.side_btn} ${!lighTheme? style.btn_a : style.btn_in_a}`}
              onClick={() => handelThemeChange("Dark")}
            >
              Dark
            </div>
          </div>
        </div>

        {/* swith time fromet */}
        <div className="mb-3">
          <h4 className={style.title}>Date Format</h4>
          <div className={`${lighTheme? style.switcher_l : style.switcher_d } ${style.switcher}`}>
            <div
              className={`${style.side_btn} ${timeFormet === "Exact"? style.btn_a : style.btn_in_a}`}
              onClick={() => setTimeFormet("Exact")}
            >
              Exact
            </div>
            <div
              className={`${style.side_btn} ${timeFormet !== "Exact"? style.btn_a : style.btn_in_a}`}
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
