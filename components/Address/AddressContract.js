import React from "react";
import { useTheme } from "../../lib/ThemeContext";
import style from "../../styles/AddressContract.module.css";
import { addressContractData } from "./../../data/AddressContractData";

function AddressContract() {
  const { theme, setTheme, my } = useTheme();
  const lightTheme = theme === "Light";
  return (
    <div>
      <p className="fs-14 my-4">
        Are you the contract creator?{" "}
        <span className={lightTheme ? "link_l" : "link_d"}>
          Verify and Publish
        </span>{" "}
        your contract source code today!
      </p>
      <div
        className={`${lightTheme ? style.table_l : style.table_d} ${
          style.contract_table
        }`}
      >
        <div className={style.single_col}>
          <div className={style.key}>Solidity version </div>
          <div className={style.value}>
            {addressContractData.solidityVersion}{" "}
          </div>
        </div>
        <div className={style.single_col}>
          <div className={style.key}>IPFS hash</div>
          <div className={style.value}>{addressContractData.IPFSHash}</div>
        </div>
        <div className={style.single_col}>
          <div className={style.key}>IPFS hash</div>
          <div className={style.value}>
            <textarea className={style.text_box} rows="15">
              {addressContractData.byteCode}
            </textarea>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddressContract;
