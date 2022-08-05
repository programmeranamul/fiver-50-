import style from "../../styles/Statics.module.css";
import SingleLineChart from './SingleLineChart';

function ChartSection() {
  return (
    <article className={style.chart_section}>
          <div className={style.cart_wrapper}>
          <SingleLineChart mydata={[65, 59, 80, 81, 56, 55, 40]} title="TRANSACTION HISTORY"/>
          <SingleLineChart mydata={[65, 59, 80, 81, 56, 55, 40]} title="ACTIVE WALLETS"/>
          </div>
        </article>
  )
}

export default ChartSection