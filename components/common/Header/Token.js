import { Icon } from "@iconify/react";
import style from "../../../styles/Header.module.css";
import { useState } from "react";
import MyDropDown from "./../MyDropDown";
import Link from "next/link";
import { useTheme } from "../../../lib/ThemeContext";
import {useEffect, useRef} from "react"

function Token() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme, my } = useTheme();
  const lightTheme = theme == "Light";

  const ref= useRef()

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

  const links = [
    {
      text: "HRC20 tokens",
      link: "/hrc20",
    },
    {
      text: "HRC721 tokens",
      link: "/hrc721",
    },
    {
      text: "HRC1155 tokens",
      link: "/hrc1155",
    },
  ];
  return (
    <div className="position-relative" ref={ref}>
      <button className={style.my_btn} onClick={handelDropDown}>
        <span
          className={`${lightTheme ? style.token_l : style.token_d} ${
            style.btn_text
          }`}
        >
          Tokens <Icon icon="fe:drop-down" className={style.icon} />
        </span>
      </button>
      <MyDropDown open={open} setOpen={setOpen}>
        <div className={style.dp_link_wrapper}>
          {links.map((link, index) => (
            <Link key={index} href={link.link}>
              <a className={style.dp_link}>{link.text}</a>
            </Link>
          ))}
        </div>
      </MyDropDown>
    </div>
  );
}

export default Token;
