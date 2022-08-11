import style from "../../styles/TxTransitionLogs.module.css";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useTheme } from "../../lib/ThemeContext";
import { TxTransitionLogsData } from "./../../data/TxTransitionLogsData";
import { copyText } from "./../../lib/CopyFunction";

function TxTransitionLogs() {
  const { theme, setTheme, my } = useTheme();
  const lightTheme = theme === "Light";

  return (
    <div className="mt-3 mt-md-4">
      {TxTransitionLogsData.map((data, index) => (
        <div
          key={index}
          className={`${lightTheme ? style.s_wrapper_l : style.s_wrapper_d} ${
            style.s_wrapper
          }`}
        >
          <div>
            <p className={style.title}>Address</p>
            <div className={style.address_wrapper}>
              <Icon
                className={lightTheme ? style.copy_l : style.copy_d}
                icon="ic:outline-copy-all"
                onClick={() => copyText(data.address)}
              />
              <Link href={`/address/${data.address}`}>
                <a className={lightTheme ? style.link_l : style.link_d}>
                  {data.address}
                </a>
              </Link>
            </div>
          </div>
          <div>
            <p className={style.title}>Topics</p>
            <div>
              {data.topic.map((el, index) => (
                <p
                  key={index}
                  className={lightTheme ? style.link_l : style.link_d}
                >
                  0x7be34da84992130f23438d167b22f7f7a246aaaf2d7e9dd3c988ee1672fe40fc,
                </p>
              ))}
            </div>
          </div>
          <div>
            <p className={style.title}>Data</p>
            <div>
              <p
                className={`${style.long} ${
                  lightTheme ? style.link_l : style.link_d
                }`}
              >
                {data.data}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TxTransitionLogs;
