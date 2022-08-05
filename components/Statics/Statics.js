import style from "../../styles/Statics.module.css";
import StaticsContent from "./StaticsContent";
import SingleLineChart from "./SingleLineChart";

const Statics = () => {
  return (
    <section className="container">
      <div className={style.wrapper}>
        <article className={style.left_site}>
          <div className={style.content_sec}>
            <StaticsContent
              mainText="ONE PRICE"
              subText="$ 0.0222"
              des=" (-2.713%)"
              icon="fa:group"
            />
            <div className={style.line}></div>
            <div className={style.line_1}></div>
            <div className={style.line_2}></div>
            <StaticsContent
              mainText="TRANSACTION VOLUME"
              subText="754,125,091"
              icon="fa:group"
            />
          </div>
          <div className={style.content_sec}>
            <StaticsContent
              mainText="ONE PRICE"
              subText="$ 0.0222"
              des=" (-2.713%)"
              icon="fa:group"
            />
            <div className={style.line}></div>
            <div className={style.line_1}></div>
            <div className={style.line_2}></div>
            <StaticsContent
              mainText="TRANSACTION VOLUME"
              subText="754,125,091"
              icon="fa:group"
            />
          </div>
        </article>
        <article className={style.chart_section}>
     <SingleLineChart />
        </article>
      </div>
    </section>
  );
};

export default Statics;