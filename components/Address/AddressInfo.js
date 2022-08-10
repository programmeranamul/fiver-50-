import style from "../../styles/AddressInfo.module.css";
import { Icon } from "@iconify/react";
import Link from "next/link"
import AddressCopyAndLink from './AddressCopyAndLink';
import { useTheme } from "../../lib/ThemeContext";
import AddressNormalCol from "./AddressNormalCol";
import AddressBlanceCol from './AddressBlanceCol';
import AddressTokenCol from './AddressTokenCol';

function AddressInfo() {
    const { theme, setTheme, my } = useTheme();
  const lightTheme = theme === "Light";
  return (
    <article className={`${lightTheme? style.wrapper_l : style.wrapper_d} ${style.wrapper}`}>
      <div>
        <AddressCopyAndLink />
        <AddressNormalCol />
        <AddressBlanceCol />
        <AddressTokenCol />
      </div>
    </article>
  );
}

export default AddressInfo;
