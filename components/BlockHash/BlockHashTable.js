import React from 'react'
import BlockHashTableAllView from './BlockHashTableAllView';
import style from "../../styles/BlockHash.module.css"
import { useTheme } from '../../lib/ThemeContext';

function BlockHashTable() {
    const { theme, setTheme, my } = useTheme();
  const lightTheme = theme === "Light";
  return (
    <div className={`${lightTheme ? style.wrapper_l : style.wrapper_d} ${style.wrapper}`}>
        <BlockHashTableAllView />
    </div>
  )
}

export default BlockHashTable