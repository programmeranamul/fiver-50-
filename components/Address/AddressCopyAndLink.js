import style from "../../styles/AddressInfo.module.css";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useTheme } from "../../lib/ThemeContext";

function AddressCopyAndLink() {
  const { theme, setTheme, my } = useTheme();
  const lightTheme = theme === "Light";
  return (
    <div className={`${lightTheme ? style.col_l : style.col_d} ${style.col}`}>
      <p className={style.key}>Address</p>
      <p className={style.value}>
        <span>
          <Icon
            icon="ic:outline-copy-all"
            className={lightTheme ? style.copy_l : style.copy_d}
          />{" "}
        </span>
        <span>
          <Link href="/">
            <a>one1qx4t2vkxwaeryg2vps0e8kqqhcj9xeex6uxsnq</a>
          </Link>
        </span>
      </p>
    </div>
  );
}

export default AddressCopyAndLink;
