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
      <BlockHashCopyNormal title=" Gas Used" value={gasUsed} />
      <BlockHashCopyNormal title="Size" value={size} />
      <BlockHashNormal title="Extra Data" value={extraData} />
      <BlockHashNormal title="Difficulty" value={difficulty} />
      <BlockHashCopyNormal
        title="Logs Bloom"
        value={`${logsBloom.slice(0, 60)}...`}
      />
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
    </>
  );
}

export default BlockHashHideOptions;
