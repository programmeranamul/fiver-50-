import { Icon } from "@iconify/react";
import style from "../../styles/Footer.module.css";

{
  /* <Icon icon="fa:group"  className={style.icon}/> */
}
const links = [
  {
    link: "https://www.fiverr.com/share/pBKL7E",
    icon: "el:group",
  },
  {
    link: "https://www.fiverr.com/share/pBKL7E",
    icon: "bxl:discord-alt",
  },
  {
    link: "https://www.fiverr.com/share/pBKL7E",
    icon: "akar-icons:medium-fill",
  },
  {
    link: "https://www.fiverr.com/share/pBKL7E",
    icon: "cib:telegram",
  },
  {
    link: "https://www.fiverr.com/share/pBKL7E",
    icon: "ant-design:twitter-outlined",
  },
];

function Footer() {
  return (
    <footer className={`white-bg pt-4 pb-5`}>
      <div className="container">
        <div className={style.link_wrpper}>
          {links.map((el) => (
            <a rel="noreferrer" key={el.link} href={el.link} target="_blank">
              <Icon
                icon={el.icon}
                className={`color-deep-gray ${style.icon}`}
              />
            </a>
          ))}
        </div>
        <p className={`color-deep-gray mb-0 small d-flex align-items-center justify-content-center ${style.copy_writte_text}`}>
          <span>© Harmony 2022 </span>
          <span className={style.dot}> .</span> <span>hello@harmony.one</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
