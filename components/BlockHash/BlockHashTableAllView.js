import style from "../../styles/BlockHash.module.css";
import { blockHashData } from "./../../data/BlockHashTableData";
import BlockHashTableHashCol from "./BlockHashTableHashCol";
import BlockHashNormal from "./BlockHashNormal";
import { useTheme } from "../../lib/ThemeContext";
import BlockHashCopyNormal from "./BlockHashCopyNormal";
import BlockHasNormalCopyWithLink from "./BlockHasNormalCopyWithLink";
import BlockHashTransactionsCol from "./BlockHashTransactionsCol";
import BlockHashHideOptions from "./BlockHashHideOptions";

function BlockHashTableAllView({ showMore }) {
  const { theme, setTheme, my } = useTheme();
  const lightTheme = theme === "Light";

  const {
    height,
    shard,
    Hash,
    time_Stamp,
    transactions,
    staking_Transactions,
    proposer,
    gasLimit,
    gasUsed,
    size,
    extraData,
    difficulty,
    logsBloom,
    mixHash,
    nonce,
    parent_Hash,
    receipts_Root,
    SHA3ncles,
    stateRoot,
    transactions_Root,
    uncles,
    epoch,
    viewID,
  } = blockHashData;

  return (
    <div className={style.table_container}>
      <table className={style.table}>
        <tbody
          className={`${lightTheme ? style.tbody_l : style.tbody_d} ${
            style.tbody
          }`}
        >
          <BlockHashTableHashCol value={height} title="Height" />
          <BlockHashNormal title="Shard" value={shard} />
          <BlockHasNormalCopyWithLink
            title="Hash"
            value={Hash}
            link={`/block/${Hash}`}
          />
          <BlockHashCopyNormal title="Timestamp" value={time_Stamp} />
          <BlockHashTransactionsCol title="Transactions" links={transactions} />

          <BlockHashNormal
            title="Staking Transactions"
            value={staking_Transactions}
          />
          <BlockHasNormalCopyWithLink
            title="Proposer"
            value={proposer}
            link={`/address/${proposer}`}
          />
          <BlockHashCopyNormal title=" Gas Limit" value={gasLimit} />
          {showMore && (
            <BlockHashHideOptions
              gasUsed={gasUsed}
              size={size}
              extraData={extraData}
              difficulty={difficulty}
              logsBloom={logsBloom}
              mixHash={mixHash}
              nonce={nonce}
              parent_Hash={parent_Hash}
              receipts_Root={receipts_Root}
              SHA3ncles={SHA3ncles}
              stateRoot={stateRoot}
              transactions_Root={transactions_Root}
              uncles={uncles}
              epoch={epoch}
              viewID={viewID}
            />
          )}
        </tbody>
      </table>
    </div>
  );
}

export default BlockHashTableAllView;
