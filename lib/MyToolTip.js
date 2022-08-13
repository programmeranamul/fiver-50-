import Tooltip from "react-simple-tooltip";
import { useState } from 'react';
import { useTheme } from "./ThemeContext";


function MyToolTip(props) {
    const { theme, setTheme, my } = useTheme();
    const lightTheme = theme === "Light";
    console.log("object", props.children.props.content);
  return (
    <Tooltip
      content={props.children.props.content}
      style={{whiteSpace:"nowrap"}}
      placement="right"
      color="#fff"
      background={lightTheme? "#1B295E" : "#263D50"}
      border="transparent"
      radius="6"
      padding="5"
    
    >
      {props.children}
    </Tooltip>
  );
}

export default MyToolTip;
