import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/header/logo.svg";
import style from "../../../styles/Header.module.css";

function Logo() {
  return (
    <Link href="/">
      <a className="logo-area d-flex me-2 me-md-0">
        <Image src={logo} alt="logo" />
        <div className={`d-none d-md-flex ${style.logo_text}`}>
          Harmony
          <sapn className={style.logo_text_sm}>Block Explorer</sapn>
        </div>
      </a>
    </Link>
  );
}

export default Logo;
