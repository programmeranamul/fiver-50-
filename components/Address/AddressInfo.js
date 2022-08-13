import style from "../../styles/AddressInfo.module.css";
import { Icon } from "@iconify/react";
import Link from "next/link";
import AddressCopyAndLink from "./AddressCopyAndLink";
import { useTheme } from "../../lib/ThemeContext";
import AddressNormalCol from "./AddressNormalCol";
import AddressBlanceCol from "./AddressBlanceCol";
import AddressTokenCol from "./AddressTokenCol";
import { AddressInfoData } from "./../../data/AddressInfoData";
import AddressInfoToolTip from './AddressInfoToolTip';

function AddressInfo() {
  const { theme, setTheme, my } = useTheme();
  const lightTheme = theme === "Light";
  const { address, balance, staked, creator, shardID, transactionHash,name,symbol,totalSupply,holders,description,decimals } =
    AddressInfoData;
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
        <AddressCopyAndLink
          title="Creator"
          value={creator}
          link={`/address/${creator}`}
        />
        <AddressNormalCol title="Shard ID" value={shardID} />
        <AddressCopyAndLink
          title="Transaction Hash"
          value={transactionHash}
          link={`/tx/${transactionHash}`}
        />
         <AddressBlanceCol title="Banlce" value={balance} />
        <AddressNormalCol title="Staked" value={staked} />
        <AddressNormalCol title="Name" value={name} />
        <AddressNormalCol title="Symbol" value={symbol} />
        <AddressNormalCol title="Decimals" value={decimals} />
     
        <AddressInfoToolTip  title="Total Supply" value={totalSupply } tooltip="Last update block height: 29,996,999"/>
        <AddressInfoToolTip  title="Holders" value={holders } tooltip="Last update block height: 29,996,999"/>
        <AddressNormalCol title="Description" value={description} />
       

        {/* <AddressTokenCol title="Token" /> */}
      </div>
    </article>
  );
}

export default AddressInfo;
