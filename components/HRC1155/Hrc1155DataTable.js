import { Icon } from "@iconify/react";
import { useTheme } from "../../lib/ThemeContext";
import style from "../../styles/HrcDataTable.module.css";
import { Hrc1155DataRow } from "./../../data/Hrc1155DataTableData";
import Image from "next/image";
import Link from "next/link";
import { copyText } from "./../../lib/CopyFunction";
import MyTippy from "./../common/MyTippy";

function Hrc1155DataTable({ data }) {
  const { theme, setTheme, my } = useTheme();

  return (
    <div className={style.wrapper}>
      <table className={style.table}>
        <thead className={style.thead}>
          <tr className={style.thead_tr}>
            {Hrc1155DataRow.map((data) => (
              <th
                key={data}
                className={`${theme === "Light" ? style.th_l : style.th_d} ${
                  style.th
                }`}
              >
                {data}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={style.tbody}>
          {data.map((el) => (
            <tr key={el.name} className={""}>
              <td
                className={`${theme === "Light" ? style.td_l : style.td_d} ${
                  style.td
                }`}
              >
                <div className={style.name_with_img}>
                  <Image
                    className={style.my_img}
                    src={el.imgSrc}
                    alt={el.name}
                    width="30"
                    height="30"
                  />
                  <span> {el.name}</span>
                </div>
              </td>
              <td
                className={`${theme === "Light" ? style.td_l : style.td_d} ${
                  style.td
                }`}
              >
                {el.symbol}
              </td>
              <td
                className={`${theme === "Light" ? style.td_l : style.td_d} ${
                  style.td
                }`}
              >
                <div
                  className={`${
                    theme === "Light" ? style.address_l : style.address_d
                  } ${style.address}`}
                >
                  <span>
                    <Icon
                      icon="ic:outline-copy-all"
                      onClick={() => copyText(el.address.link)}
                    />
                  </span>
                  <span>
                    <Link href={`/address/${el.address.link}`}>
                      <a
                        className={
                          theme === "Light" ? style.address_l : style.address_d
                        }
                      >
                        {el.address.text}
                      </a>
                    </Link>
                  </span>
                </div>
              </td>

              <td
                className={`${theme === "Light" ? style.td_l : style.td_d} ${
                  style.td
                }`}
              >
                <div className={`justify-content-end ${style.icon_text}`}>
                  <span>{el.holders}</span>
                  <span className="d-flex">
                    <MyTippy content={"Last update block height: 30, 013,427"}>
                      <Icon
                        icon="ant-design:question-circle-outlined"
                        className={theme === "Light" ? "tp_i_l" : "tp_i_d"}
                      />
                    </MyTippy>
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Hrc1155DataTable;
