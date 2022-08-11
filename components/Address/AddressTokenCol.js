import style from "../../styles/AddressInfo.module.css";
import { useTheme } from "../../lib/ThemeContext";
import { Icon } from "@iconify/react";
import Search from "./../common/Search";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

function AddressTokenCol({title}) {
  const { theme, setTheme, my } = useTheme();
  const lightTheme = theme === "Light";
  const [showToken, setShowToken] = useState(false);

  const ref = useRef();
  
  useEffect(() => {
    const chechPopUp = (e) => {
      if (showToken && ref.current && !ref?.current?.contains(e.target)) {      
        setShowToken(false);
      } 
    };
    document.addEventListener("click", chechPopUp);
    return () => {
      document.removeEventListener("click", chechPopUp);
    };
  }, [showToken]);

  return (
    <div className={`${lightTheme ? style.col_l : style.col_d} ${style.col}`}>
      <p className={style.key}>{title}</p>
      <div
        className={`${style.value} ${
          lightTheme ? style.token_value_l : style.token_value_d
        } ${style.token_value}`}
        ref={ref}
      >
        <span
          onClick={() => setShowToken(!showToken)}
          className="d-flex w-100 justify-content-between"
        >
          <span>HRC20</span>
          <span>
            <Icon icon="bxs:down-arrow" />
          </span>
        </span>

        {showToken && (
          <div
            className={`${
              lightTheme ? style.token_popUp_l : style.token_popUp_d
            } ${style.token_popUp}`}
          >
            <Search />
            <div className={style.s_t_t}>
              <span>HRC20 tokens</span>
            </div>
            <div>
              <div
                className={`${style.a_p_t} ${
                  lightTheme ? style.a_p_t_l : style.a_p_t_d
                }`}
              >
                <Icon
                  className={lightTheme ? style.copy_l : style.copy_d}
                  icon="ic:outline-copy-all"
                />
                <Link href="/">
                  <a className={style.addressa_a}>
                    <span>
                      <span className={""}>0Gambling.io</span>{" "}
                      <span className={lightTheme ? style.n_l : style.n_d}>
                        ( 0Gambling.io )
                      </span>
                    </span>
                    <span>
                      <span className={lightTheme ? style.n_l : style.n_d}>
                        <b>3000000</b>
                      </span>
                      <span>
                        <b>0Gambling.io</b>
                      </span>
                    </span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AddressTokenCol;
