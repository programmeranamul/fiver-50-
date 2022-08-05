import style from "../../styles/DropDown.module.css";

function MyDropDown({ open, children }) {
  return (
    <div
      className={`${open ? style.dp_open : style.dp_close} ${style.dp_wrapper}`}
    >
      {children}
    </div>
  );
}

export default MyDropDown;
