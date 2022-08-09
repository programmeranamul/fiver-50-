import style from "../../styles/BlockHash.module.css";
import { blockHashData } from "./../../data/BlockHashTableData";
import BlockHashTableHashCol from "./BlockHashTableHashCol";
import BlockHashNormal from "./BlockHashNormal";
import { useTheme } from "../../lib/ThemeContext";
import BlockHashCopyNormal from "./BlockHashCopyNormal";
import BlockHasNormalCopyWithLink from "./BlockHasNormalCopyWithLink";
import BlockHashTransactionsCol from "./BlockHashTransactionsCol";

function BlockHashTableAllView() {
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
          <BlockHashTransactionsCol title="Transactions" links={transactions} />
          <BlockHashCopyNormal title="Timestamp" value={time_Stamp} />
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
          <BlockHashCopyNormal title=" Gas Used" value={gasUsed} />
          <BlockHashCopyNormal title="Size" value={size} />
          <BlockHashNormal title="Extra Data" value={extraData} />
          <BlockHashNormal title="Difficulty" value={difficulty} />
          <BlockHashCopyNormal title="Logs Bloom" value={`${logsBloom.slice(0,60)}...`} />
          <BlockHashNormal title=" Mix Hash" value={mixHash} />
          <BlockHashNormal title=" Nonce" value={nonce} />
          <BlockHasNormalCopyWithLink
            title="Parent Hash"
            value={parent_Hash}
            link={`/block/${parent_Hash}`}
          />
          <BlockHashCopyNormal title=" Receipts Root" value={receipts_Root} />
          <BlockHashNormal title="SHA3 Uncles" value={SHA3ncles} />
          <BlockHashCopyNormal title="State Root" value={stateRoot} />
          <BlockHashCopyNormal
            title="Transactions Root"
            value={transactions_Root}
          />
          <BlockHashNormal title=" Uncles" value={uncles} />
          <BlockHashCopyNormal title="Epoch" value={epoch} />
          <BlockHashCopyNormal title="View ID" value={viewID} />
        </tbody>
      </table>
    </div>
  );
}

export default BlockHashTableAllView;
