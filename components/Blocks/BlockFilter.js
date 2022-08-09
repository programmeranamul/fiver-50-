import { useTheme } from "../../lib/ThemeContext";
import style from "../../styles/Fliter.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import NextPagePagination from "./../common/NextPagePagination";

function BlockFilter({ filtersList }) {
  const { theme, setTheme, my } = useTheme();

  const lightTheme = theme === "Light";
  const router = useRouter();

  const handelChange = (e) => {
    const id = e.target.value.slice(-1);
    router.push("/blocks/shard/" + id);
  };

  return (
    <article
      className={`${style.wrapper} ${
        lightTheme ? style.wrapper_l : style.wrapper_d
      }`}
    >
      <div className={style.left}>
        <div>
          <p className="mb-0">Filter:</p>
        </div>
        <div>
          <select
            className={`form-select ${style.my_select}`}
            onChange={(e) => handelChange(e)}
          >
            {filtersList.map((data) => (
              <option onClick={() => console.log("click")} key={data.text}>
                {data.text}
              </option>
            ))}
          </select>
        </div>
      </div>
      <NextPagePagination />
    </article>
  );
}

export default BlockFilter;