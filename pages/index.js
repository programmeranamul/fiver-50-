import Transactions from "./../components/Transactions/Transactions";
import LatestBlocks from "./../components/Blocks/LatestBlocks";
import Statics from "./../components/Statics/Statics";
import style from "../styles/Home.module.css";

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
    </>
  );
}

export default Index;
