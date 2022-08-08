import { useTheme } from "../../lib/ThemeContext";
import style from "../../styles/Statics.module.css";
import ChartSection from './ChartSection';
import StaticsInfoArea from './StaticsInfoArea';

const Statics = () => {
  const { theme, setTheme, my } = useTheme()
  const lightTheme = theme == "Light";
  return (
    <section className="container">
      <div className={`${lightTheme? style.wrapper_l :style.wrapper_d} ${style.wrapper}`}>
        <StaticsInfoArea />
        <ChartSection />
      </div>
    </section>
  );
};

export default Statics;
