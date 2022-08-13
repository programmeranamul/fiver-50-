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
          <TxStatusCol
            status={status}
            tooltip="The status of the transaction"
          />
          <TxSheardCol
            shardID={shardID}
            tooltip="The shard number where the transaction belogs"
          />
          <TxCopyAndLinkCol
            title={"Hash"}
            link={`/tx/${hash}`}
            value={hash}
            tooltip="Hash is unique 66 characters identifier that is generated whenever transaction is executed"
          />
          <TxCopyAndLinkCol
            title={" Ethereum Hash"}
            link={`/tx/${ethereumHash}`}
            value={ethereumHash}
            tooltip="Hash is unique 66 characters identifier that is generated whenever transaction is executed"
          />
          <TxCopyAndLinkCol
            title={" Block Number"}
            link={`/block/${blockNumber.hash}`}
            value={blockNumber.number}
            tooltip="The number of the block in which the transaction was recorded"
          />
          <TxCopyAndLinkCol
            title={" Timestamp"}
            value={timestamp}
            tooltip="The date and time at which a transaction is mined"
          />
          <TxCopyAndLinkCol
            title={" From"}
            link={`/block/${from}`}
            value={from}
            tooltip="The sending party of the transaction"
          />
          <TxCopyAndLinkCol title={" To"} link={`/block/${to}`} value={to} tooltip="The receiving party of the transaction" />
          <TxCopyAndLinkCol title={"Value"} value={value} tooltip="The value being transacted in One and fiat Value" />
          <TxToken tooltip="Token transfers"  />
          <TxNormalCol title="Transaction Fee" value={transactionFee} tooltip="Transaction fee" />
          <TxNormalCol title="Gas Limit & Usage by Txn" value={gasLimit} tooltip="The exact units of gas that was used for the transaction" />
          <TxNormalCol title="Gas Price" value={gasPrice} tooltip="Cost per units of gas specified for the transaction" />
          <TxNormalCol title="Nonce" value={transactionFee} tooltip="Sequential running number for an address beginning with 0 for the first transaction" />
          <TxNormalCol title="Transaction Index" value={transactionIndex} tooltip="Transaction number in the block" />
          <TxInputViewCol tooltip="Additional information that is required for the transaction" />
          {showMore && <TxHasHHodden r={r} s={s} v={v} gasLimit={gasLimit} />}
        </tbody>
      </table>
      <ShowMoreBtn showMore={showMore} setShowMore={setShowMore} />
    </div>
  );
}

export default TxTransactionDetails;
