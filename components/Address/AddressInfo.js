import style from "../../styles/AddressInfo.module.css";
import { Icon } from "@iconify/react";
import Link from "next/link";
import AddressCopyAndLink from "./AddressCopyAndLink";
import { useTheme } from "../../lib/ThemeContext";
import AddressNormalCol from "./AddressNormalCol";
import AddressBlanceCol from "./AddressBlanceCol";
import AddressTokenCol from "./AddressTokenCol";
import { AddressInfoData } from "./../../data/AddressInfoData";

function AddressInfo() {
  const { theme, setTheme, my } = useTheme();
  const lightTheme = theme === "Light";
  const { address, balance, staked } = AddressInfoData;
  return (
    <article
      className={`${lightTheme ? style.wrapper_l : style.wrapper_d} ${
        style.wrapper
      }`}
    >
      <div>
        <AddressCopyAndLink
          title="Address"
          value={address}
          link={`/address/${address}`}
        />
        <AddressNormalCol title="Staked" value={staked} />
        <AddressBlanceCol title="Banlce" value={balance} />

        <AddressTokenCol title="Token"/>
      </div>
    </article>
  );
}

export default AddressInfo;
