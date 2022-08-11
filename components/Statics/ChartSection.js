import style from "../../styles/Statics.module.css";
import SingleLineChart from "./SingleLineChart";
import { chartData } from "./../../data/chartData";

function ChartSection() {
  return (
    <article className={style.chart_section}>
      <div className={style.cart_wrapper}>
        <SingleLineChart mydata={chartData} title="TRANSACTION HISTORY" />
        <SingleLineChart mydata={chartData} title="ACTIVE WALLETS" />
      </div>
    </article>
  );
}

export default ChartSection;
