import style from "../../styles/Statics.module.css";
import ChartSection from './ChartSection';
import StaticsInfoArea from './StaticsInfoArea';

const Statics = () => {
  return (
    <section className="container">
      <div className={`color-deep-gray-1 white-bg  ${style.wrapper}`}>
        <StaticsInfoArea />
        <ChartSection />
      </div>
    </section>
  );
};

export default Statics;
