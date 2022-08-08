import { Icon } from "@iconify/react";
import style from "../../../styles/Header.module.css";
import { useState } from "react";
import MyDropDown from "./../MyDropDown";
import Link from "next/link";

function Tools() {
  const [open, setOpen] = useState(false);

  const handelDropDown = () => {
    setOpen(!open);
  };

  const links = [
    {
      text: "Token Approvals",
      link: "/tools/approvals",
    },
    {
      text: "Check HRC",
      link: "/tools/checkHrc",
    },
  ];

  return (
    <div className="position-relative">
      <button className={style.my_btn} onClick={handelDropDown}>
        <span className={`${style.btn_text}`}>
          Tools <Icon icon="fe:drop-down" className={style.icon} />
        </span>
      </button>
      <MyDropDown open={open}>
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

export default Tools;
