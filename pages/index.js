import Transactions from "./../components/Transactions/Transactions";
import LatestBlocks from "./../components/Blocks/LatestBlocks";
import Statics from "./../components/Statics/Statics";
import style from "../styles/Home.module.css";
import Tooltip from "react-simple-tooltip";
import MyToolTip from './../lib/MyToolTip';

function Index() {
  return (
    <>
      <Statics />
      <div className="container">
        <div className={style.table_wrapper}>
          <LatestBlocks />
          <Transactions />
        </div>
      </div>     
    {/* <MyToolTip><button>Hover me !</button></MyToolTip> */}
    </>
  );
}

export default Index;
