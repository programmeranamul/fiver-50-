import { useTheme } from "../../lib/ThemeContext";
import style from "../../styles/TableFooter.module.css";

function RecordsPerPage({ dataPerRow, setDataPerRow }) {
  const { theme, setTheme, my } = useTheme();

  const handelSelected = (e) => {
    setDataPerRow(e.target.value)
  };

  return (
    <> 
      <div>
        <select
          onChange={handelSelected}
          className={`${
            theme === "Light" ? style.select_l : style.select_d
          } form-select`}
        >
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </select>
      </div>
      <p className={`mb-0 ${theme === "Light" ? style.text_l : style.text_d}`}>
        records per page
      </p>
    </>
  );
}

export default RecordsPerPage;
