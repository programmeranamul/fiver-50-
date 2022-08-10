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
import AddressHrc20 from './AddressHrc20';

function AddressDataSection() {
  const { theme, setTheme, my } = useTheme();
  const lightTheme = theme === "Light";

  const [activeTab, setActiveTab] = useState(0);

  const tablists = [
    "Transactions",
    "Staking",
    "Internal",
    "HRC20 Transfers",
    "NFT Transfers",
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
        {activeTab == 0 && (
          <AddressTransactions
          />
        )}
        {activeTab == 1 && <AddressStacking />}
        {activeTab == 2 && <AddressInternal />}
        {activeTab == 3 && <AddressHrc20/>}
        {activeTab == 4 && <AddressNftTransfare />}
        {/* <AddressTransactions /> */}
        {/* <AddressStacking /> */}
        {/* <AddressInternal /> */}
        {/* <AddressNftTransfare /> */}
      </div>
    </article>
  );
}

export default AddressDataSection;
