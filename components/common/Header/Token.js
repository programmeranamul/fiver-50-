import { Icon } from "@iconify/react";
import style from "../../../styles/Header.module.css";
import { useState } from "react";
import MyDropDown from "./../MyDropDown";
import Link from "next/link";
import { useTheme } from "../../../lib/ThemeContext";

function Token() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme, my } = useTheme();
  const lightTheme = theme == "Light";

  const handelDropDown = () => {
    setOpen(!open);
  };

  const links = [
    {
      text: "HRC20 tokens",
      link: "/",
    },
    {
      text: "HRC721 tokens",
      link: "/",
    },
    {
      text: "HRC1155 tokens",
      link: "/",
    },
  ];
  return (
    <div className="position-relative">
      <button className={style.my_btn} onClick={handelDropDown}>
        <span className={`${lightTheme? style.token_l : style.token_d} ${style.btn_text}`}>
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
