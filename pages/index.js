import Transactions from "./../components/Transactions/Transactions";
import LatestBlocks from "./../components/Blocks/LatestBlocks";
import Statics from "./../components/Statics/Statics";
import style from "../styles/Home.module.css";
import Notify from "simple-notify";
import "simple-notify/dist/simple-notify.min.css";
import { pushNotify } from "./../components/common/PushNotify";

function Index() {
  const chec = () => {
    console.log("sjkdh");
    pushNotify("I love you jui");
  };
  return (
    <>
      <Statics />
      <div className="container">
        <div className={style.table_wrapper}>
          <LatestBlocks />
          <Transactions />
        </div>
        <button onClick={chec}>check</button>
      </div>
    </>
  );
}

export default Index;
