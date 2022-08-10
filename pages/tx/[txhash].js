import { useTheme } from "../../lib/ThemeContext";
import style from "../../styles/TxHash.module.css";
import TxHashTab from "./../../components/TxHash/TxHashTab";
import InternalTransactions from "./../../components/InternalTransaction/InternalTransactions";
import TxTransitionLogs from "./../../components/TxTransitionLogs/TxTransitionLogs";
import { useState } from "react";
import TxTransactionDetails from "./../../components/TxHash/TxTransactionDetails";

function TxHash() {
  const { theme, setTheme, my } = useTheme();
  const lightTheme = theme === "Light";

  const [activeTab, setActiveTab] = useState(0);
  return (
    <section>
      <div className="container">
        <h1 className="title-2 dark-white-color fw-700 mb-4">
          Block #29822091
        </h1>
        <article
          className={`${style.main_wrapper} ${
            lightTheme ? style.main_wrapper_l : style.main_wrapper_d
          }`}
        >
          <TxHashTab activeTab={activeTab} setActiveTab={setActiveTab} />
          <div>
            {activeTab === 0 && <TxTransactionDetails />}
            {activeTab === 1 && <InternalTransactions />}
            {activeTab === 2 && <TxTransitionLogs />}
            
          </div>
        </article>
      </div>
    </section>
  );
}

export default TxHash;
