import React, { useState } from "react";
import { useTheme } from "../../lib/ThemeContext";
import TxHashTab from "./../TxHash/TxHashTab";
import AddressTransactions from "./AddressTransactions";
import style from "../../styles/AddressInfo.module.css";
import AddressStacking from "./AddressStacking";
import AddressInternal from "./AddressInternal";
import AddressNftTransfare from "./AddressNftTransfare";
import { AddressTransactionsTableColData } from "../../data/AddressTransactionsTabledata";
import { AddressTransactionsTableRowData } from "./../../data/AddressTransactionsTabledata";
import AddressHrc20 from "./AddressHrc20";
import AddressHolders from './AddressHolders';
import AddressContract from './AddressContract';
import AddressTool from './AddressTool';

function AddressDataSection() {
  const { theme, setTheme, my } = useTheme();
  const lightTheme = theme === "Light";

  const [activeTab, setActiveTab] = useState('Transactions');

  const tablists = [
    "Transactions",
    "Staking",
    "Internal",
    "HRC20 Transfers",
    "NFT Transfers",
    "Holders",
  ];

  return (
    <article
      className={`${lightTheme ? style.wrapper_l : style.wrapper_d} ${
        style.wrapper
      } mt-3`}
    >
      <div>
        <TxHashTab
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          lists={tablists}
        />
        {/* {activeTab == "Transactions" && <AddressTransactions />} */}
        {/* {activeTab == "Staking" && <AddressStacking />}
        {activeTab == "Internal" && <AddressInternal />}
        {activeTab == "HRC20 Transfers" && <AddressHrc20 />}
        {activeTab == "NFT Transfers" && <AddressNftTransfare />} */}
        {/* <AddressHolders /> */}
        {/* <AddressContract /> */}
        <AddressTool />
      </div>
    </article>
  );
}

export default AddressDataSection;
