import Transactions from "./../components/Transactions/Transactions";
import LatestBlocks from "./../components/Blocks/LatestBlocks";
import Statics from "./../components/Statics/Statics";

function Index() {
  return (
    <>
      <Statics />
      <LatestBlocks />
      <Transactions />
    </>
  );
}

export default Index;
