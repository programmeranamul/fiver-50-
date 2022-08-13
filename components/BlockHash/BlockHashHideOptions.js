import React from "react";
import BlockHashCopyNormal from "./BlockHashCopyNormal";
import BlockHashNormal from "./BlockHashNormal";
import BlockHasNormalCopyWithLink from "./BlockHasNormalCopyWithLink";

function BlockHashHideOptions({
  gasUsed,
  size,
  extraData,
  difficulty,
  mixHash,
  logsBloom,
  nonce,
  parent_Hash,
  receipts_Root,
  SHA3ncles,
  stateRoot,
  transactions_Root,
  uncles,
  epoch,
  viewID,
}) {
  return (
    <>
      <BlockHashCopyNormal
        title=" Gas Used"
        value={gasUsed}
        tooltip=" The total gas used inthe block and its percentage of gas filled in the block"
      />
      <BlockHashCopyNormal
        title="Size"
        value={size}
        tooltip="The block size is actually determined by the block's gas limit"
      />
      <BlockHashNormal
        title="Extra Data"
        value={extraData}
        tooltip="Any data that can be included by the miner in the block"
      />
      <BlockHashNormal
        title="Difficulty"
        value={difficulty}
        tooltip="The ammount of effort required to mine a new block"
      />
      <BlockHashCopyNormal
        title="Logs Bloom"
        value={`${logsBloom.slice(0, 60)}...`}
        tooltip="Log Bloom"
      />
      <BlockHashNormal title=" Mix Hash" value={mixHash} tooltip="Mix Hash" />
      <BlockHashNormal
        title=" Nonce"
        value={nonce}
        tooltip="Block nonce is a value used during minig to demonstrade proof a work for a back"
      />
      <BlockHasNormalCopyWithLink
        title="Parent Hash"
        value={parent_Hash}
        link={`/block/${parent_Hash}`}
        tooltip="The hash of the block form which this block was generated"
      />
      <BlockHashCopyNormal title=" Receipts Root" value={receipts_Root} tooltip="Receipts Root" />
      <BlockHashNormal title="SHA3 Uncles" value={SHA3ncles} tooltip="The mechanism which Ethereum Javascript RPL encodes an empty string" />
      <BlockHashCopyNormal title="State Root" value={stateRoot} tooltip="The root of the state trie" />
      <BlockHashCopyNormal
        title="Transactions Root"
        value={transactions_Root}
        tooltip="Transactions root"
      />
      <BlockHashNormal title=" Uncles" value={uncles} tooltip="Uncles"/>
      <BlockHashCopyNormal title="Epoch" value={epoch} tooltip="Epoch" />
      <BlockHashCopyNormal title="View ID" value={viewID} tooltip="View ID"/>
    </>
  );
}

export default BlockHashHideOptions;
