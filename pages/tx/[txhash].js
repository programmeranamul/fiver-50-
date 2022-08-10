import { useTheme } from "../../lib/ThemeContext";
import style from "../../styles/TxHash.module.css";
import TxHashTab from "./../../components/TxHash/TxHashTab";
import InternalTransactions from './../../components/InternalTransaction/InternalTransactions';

function TxHash() {
  const { theme, setTheme, my } = useTheme();
  const lightTheme = theme === "Light";
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
          <TxHashTab />
          <div>
            {/* <TxTransactionDetails /> */}
            <InternalTransactions />
          </div>
        </article>
      </div>
    </section>
  );
}

export default TxHash;
