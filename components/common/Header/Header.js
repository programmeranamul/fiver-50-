import { useTheme } from "../../../lib/ThemeContext";
import style from "../../../styles/Header.module.css";
import Logo from "./Logo";
import NavMenu from "./NavMenu";

function Header() {
  const { theme, setTheme, my } = useTheme();

  return (
    <header
      className={`${theme === "Light" ? style.header_l : style.header_d} ${
        style.header
      }`}
    >
      <div className="container">
        <nav className={`d-flex justify-content-between align-items-center`}>
          <Logo />
          <NavMenu />
        </nav>
      </div>
    </header>
  );
}

export default Header;
