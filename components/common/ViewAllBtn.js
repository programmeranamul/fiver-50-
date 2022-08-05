import Link from "next/link";
import style from "../../styles/ViewAllBtn.module.css"

function ViewAllBtn({text, link}) {
  return (
    <div className={`white-bg ${style.div}`}>
      <Link  href={link}>
        <a className={`my-btn  ${style.my_btn}`}>{text}</a>
      </Link>
    </div>
  );
}

export default ViewAllBtn;
