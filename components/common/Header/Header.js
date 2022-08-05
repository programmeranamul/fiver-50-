import style from "../../../styles/Header.module.css";
import Logo from "./Logo";
import NavMenu from "./NavMenu";

function Header() {
  return (
    <header className={style.header}>
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
