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
          <BlockHashTableHashCol
            value={height}
            title="Height"
            tooltip="Also knows as Block Number"
          />
          <BlockHashNormal title="Shard" value={shard} tooltip="Shard Number" />
          <BlockHasNormalCopyWithLink
            title="Hash"
            value={Hash}
            link={`/block/${Hash}`}
            tooltip="The Hash of the block header of the current block"
          />
          <BlockHashCopyNormal
            title="Timestamp"
            value={time_Stamp}
            tooltip="The date and time at which a block is mined"
          />
          <BlockHashTransactionsCol
            tooltip="The number of transacitions in the block"
            title="Transactions"
            links={transactions}
          />

          <BlockHashNormal
            title="Staking Transactions"
            value={staking_Transactions}
            tooltip="The number of staking transactions in the block"
          />
          <BlockHasNormalCopyWithLink
            title="Proposer"
            value={proposer}
            link={`/address/${proposer}`}
            tooltip="Miner who successfully include the block into the blockchain"
          />
          <BlockHashCopyNormal title=" Gas Limit" value={gasLimit} tooltip="Total gas limit provided by all transactions in the block" />
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
