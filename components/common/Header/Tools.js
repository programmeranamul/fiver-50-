import { Icon } from "@iconify/react";
import style from "../../../styles/Header.module.css";
import { useState } from "react";
import MyDropDown from "./../MyDropDown";
import Link from "next/link";
import { useEffect, useRef } from "react";

function Tools() {
  const [open, setOpen] = useState(false);
  const ref = useRef();

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
      text: "Token Approvals",
      link: "/tools/approvals",
    },
    {
      text: "Check HRC",
      link: "/tools/checkHrc",
    },
  ];

  return (
    <div className="position-relative" ref={ref}>
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
