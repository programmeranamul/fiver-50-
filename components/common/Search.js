import { Icon } from "@iconify/react";
import { useTheme } from "../../lib/ThemeContext";
import style from "../../styles/Search.module.css";

function Search({ className }) {
  const { theme, setTheme, my } = useTheme();
  return (
    <section className={className}>
      <div className="input-group py-3 py-md-4">
        <span
          className={`input-group-text white-bg ${style.my_group} ${
            style.icon
          } ${theme === "Light" ? style.my_group_l : style.my_group_d}`}
          id="basic-addon1"
        >
          <Icon
            icon="bi:search"
            className={theme === "Light" ? style.icon_l : style.icon_d}
          />
        </span>
        <input
          type="text"
          className={`form-control ${
            theme === "Light" ? style.my_input_l : style.my_input_d
          } ${style.my_input}`}
          placeholder="Search by Address / Transaction Hash / Block / Tokensername"
        />
      </div>
    </section>
  );
}

export default Search;
