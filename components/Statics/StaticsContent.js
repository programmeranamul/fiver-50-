import style from "../../styles/Statics.module.css";

const StaticsContent = ({ mainText, subText, des }) => {
  return (
    <div className={style.content}>
      <div className={style.icon}>Icon</div>
      <div className={style.text}>
        <span className={style.main_text}>{mainText}</span>
        <p className={style.sub_text}>
          <span>{subText} </span>
          {des && <span className={style.descrise}> {des}</span>}
        </p>
      </div>
    </div>
  );
};

export default StaticsContent;