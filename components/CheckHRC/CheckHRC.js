import style from "../../styles/CheckHRC.module.css";
import { useState, useEffect } from "react";
import { useTheme } from "./../../lib/ThemeContext";

function CheckHRC() {
  const [relativeEvent, setRelativeEvent] = useState(true);
  const { theme, setTheme, my } = useTheme();

  const relativeEventList = [
    "Transfer",
    "Approval",
    "totalSupply ",
    "decimals",
  ];

  return (
    <section>
      <article className="container">
        <h1 className="title-1 dark-white-color fw-700">Check HRC</h1>
        <div
          className={`white-blue-bg ${style.form_wrapper} lightgray-to-light-blue`}
        >
          <form>
            <div className={style.input_flex}>
              <div className={style.contract_addess}>
                <label htmlFor="address" className="form-label my-input-label">
                  Contract Address
                </label>
                <input
                  type="address"
                  className={`form-control my-input`}
                  placeholder="ONE contract address"
                />
              </div>
              <div>
                <label htmlFor="type" className="form-label my-input-label">
                  Contract type
                </label>
                <select className={`form-select my-input my-select ${style.select}`}>
                  <option>ERC20</option>
                  <option>ERC721</option>
                  <option>ERC1155</option>
                </select>
              </div>
            </div>

            {relativeEvent && (
              <div className={style.relative_event}>
                <p className="dark-white-color mb-0">Required events:</p>
                <div className={style.require_list_wrapper}>
                  {relativeEventList.map((data) => (
                    <div
                      key={data}
                      className={`${
                        theme == "Light" ? style.s_r_l : style.s_r_d
                      } ${style.single_required}`}
                    >
                      {data}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mb-3">
              <textarea
                className="form-control my-input"
                id="exampleFormControlTextarea1"
                rows="6"
                placeholder="Bytecode"
              ></textarea>
            </div>
          </form>
        </div>
      </article>
    </section>
  );
}

export default CheckHRC;
