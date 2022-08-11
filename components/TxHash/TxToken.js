import style from "../../styles/TxTransactionDetails.module.css";
import { Icon } from "@iconify/react";
import { useTheme } from "../../lib/ThemeContext";
import Link from "next/link";
import { copyText } from './../../lib/CopyFunction';

function TxToken() {
  const { theme, setTheme, my } = useTheme();
  const lightTheme = theme === "Light";
  const hash = "one1na9tmcxrn2t4x6jkhmz4ngch62tpzvv004294u"
  return (
    <tr className={`${style.tr} ${lightTheme ? style.tr_l : style.tr_d}`}>
      <th className="d-flex align-items-center ">
        <Icon icon="ant-design:question-circle-outlined" className="me-1" />{" "}
        Status
      </th>
      <td className="d-flex flex-column">
        <div className="my-1">
          <div>
            From : <Icon className={style.copy} icon="ic:outline-copy-all" onClick={() => copyText(hash)} />
            <Link href="/block/29841944">0x0</Link> To :{" "}
            <Icon className={style.copy} icon="ic:outline-copy-all" onClick={() => copyText(hash)} />
            <Link href="/block/29841944">
              one1na9tmcxrn2t4x6jkhmz4ngch62tpzvv004294u
            </Link>
          </div>
          <div>
            Value : <b>1</b>
            <Link href="/block/29841944">
              <a>DFKRGWD</a>
            </Link>
          </div>
        </div>
        <div className="my-1">
          <div>
            From : <Icon className={style.copy} icon="ic:outline-copy-all" onClick={() => copyText(hash)} />
            <Link href="/block/29841944">0x0</Link> To :{" "}
            <Icon className={style.copy} icon="ic:outline-copy-all"  onClick={() => copyText(hash)}/>
            <Link href="/block/29841944">
              one1na9tmcxrn2t4x6jkhmz4ngch62tpzvv004294u
            </Link>
          </div>
          <div>
            Value : <b>1</b>
            <Link href="/block/29841944">
              <a>DFKRGWD</a>
            </Link>
          </div>
        </div>
        <div className="my-1">
          <div>
            From : <Icon className={style.copy} icon="ic:outline-copy-all" onClick={() => copyText(hash)} />
            <Link href="/block/29841944">0x0</Link> To :{" "}
            <Icon className={style.copy} icon="ic:outline-copy-all" onClick={() => copyText(hash)} />
            <Link href="/block/29841944">
              one1na9tmcxrn2t4x6jkhmz4ngch62tpzvv004294u
            </Link>
          </div>
          <div>
            Value : <b>1</b>
            <Link href="/block/29841944">
              <a>DFKRGWD</a>
            </Link>
          </div>
        </div>
      </td>
    </tr>
  );
}

export default TxToken;
