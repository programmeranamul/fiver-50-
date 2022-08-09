import React from 'react'
import TxNormalCol from './TxNormalCol';

function TxHasHHodden({r,s,v}) {
  return (
    <><TxNormalCol title="r" value={r} />
    <TxNormalCol title="s" value={s} />
    <TxNormalCol title="v" value={v} /></>
    
  )
}

export default TxHasHHodden