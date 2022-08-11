import style from "../../styles/TxTransactionDetails.module.css";
import TxSheardCol from "./TxSheardCol";
import TxStatusCol from "./TxStatusCol";
import TxCopyAndLinkCol from "./TxCopyAndLinkCol";
import TxNormalCol from "./TxNormalCol";
import TxInputViewCol from "./TxInputViewCol";
import TxToken from "./TxToken";
import { Icon } from "@iconify/react";
import { useTheme } from "../../lib/ThemeContext";
import { useState } from "react";
import ShowMoreBtn from "./../common/ShowMoreBtn";
import { TransactionDetailsData } from "./../../data/TransactionDetailsData";
import TxHasHHodden from "./TxHasHHodden";

function TxTransactionDetails() {
  const { theme, setTheme, my } = useTheme();
  const lightTheme = theme === "Light";
  const [showMore, setShowMore] = useState(false);
  const {
    status,
    shardID,
    hash,
    ethereumHash,
    blockNumber,
    timestamp,
    from,
    to,
    value,
    transactionFee,
    gasLimit,
    gasPrice,
    nonce,
    transactionIndex,
    r,
    s,
    v,
  } = TransactionDetailsData;
  return (
    <div className={style.table_wrapper}>
      <table className={style.table}>
        <tbody>
          <TxStatusCol status={status} />
          <TxSheardCol shardID={shardID} />
          <TxCopyAndLinkCol title={"Hash"} link={`/tx/${hash}`} value={hash} />
          <TxCopyAndLinkCol
            title={" Ethereum Hash"}
            link={`/tx/${ethereumHash}`}
            value={ethereumHash}
          />
          <TxCopyAndLinkCol
            title={" Block Number"}
            link={`/block/${blockNumber.hash}`}
            value={blockNumber.number}
          />
          <TxCopyAndLinkCol title={" Timestamp"} value={timestamp} />
          <TxCopyAndLinkCol
            title={" From"}
            link={`/block/${from}`}
            value={from}
          />
          <TxCopyAndLinkCol title={" To"} link={`/block/${to}`} value={to} />
          <TxCopyAndLinkCol title={"Value"} value={value} />
          <TxToken />
          <TxNormalCol title="Transaction Index" value={transactionFee} />
          <TxNormalCol title="Gas Limit & Usage by Txn" value={gasLimit} />
          <TxNormalCol title="Gas Price" value={gasPrice} />
          <TxNormalCol title="Nonce" value={transactionFee} />
          <TxNormalCol title="Transaction Index" value={transactionIndex} />
          <TxInputViewCol />
          {showMore && <TxHasHHodden r={r} s={s} v={v} />}
        </tbody>
      </table>
      <ShowMoreBtn showMore={showMore} setShowMore={setShowMore} />
    </div>
  );
}

export default TxTransactionDetails;
