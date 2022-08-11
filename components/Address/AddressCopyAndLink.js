import style from "../../styles/AddressInfo.module.css";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useTheme } from "../../lib/ThemeContext";
import { copyText } from "./../../lib/CopyFunction";

function AddressCopyAndLink({ title, value, link }) {
  const { theme, setTheme, my } = useTheme();
  const lightTheme = theme === "Light";
  return (
    <div className={`${lightTheme ? style.col_l : style.col_d} ${style.col}`}>
      <p className={style.key}>{title}</p>
      <p className={style.value}>
        <span>
          <Icon
            icon="ic:outline-copy-all"
            className={lightTheme ? style.copy_l : style.copy_d}
            onClick={() => copyText(value)}
          />
        </span>
        <span>
          <Link href={link}>
            <a>{value}</a>
          </Link>
        </span>
      </p>
    </div>
  );
}

export default AddressCopyAndLink;
