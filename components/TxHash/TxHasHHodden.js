import React from "react";
import TxNormalCol from "./TxNormalCol";
import TxCopyAndLinkCol from './TxCopyAndLinkCol';

function TxHasHHodden({ r, s, v ,gasLimit}) {
  return (
    <>
      <TxCopyAndLinkCol title="r" value={r} tooltip="Value fro the transaction's signature"/>
      <TxCopyAndLinkCol title="s" value={s}  tooltip="Value fro the transaction's signature"/>
      <TxCopyAndLinkCol title="v" value={v}  tooltip="Value fro the transaction's signature"/>
      <TxCopyAndLinkCol title="gasLimit" value={gasLimit}  tooltip="Total gas limit provided by all transactions in the block"/>
    </>
  );
}

export default TxHasHHodden;
