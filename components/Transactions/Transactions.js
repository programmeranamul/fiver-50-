import style from "../../styles/Transactions.module.css";
import DataTable from "./../common/DataTable";

// const tableRow = ["Shard", "Hash", "From", "To", "Timestamp"];
const tableRow = [
  {
    text: "Shard",
    color: true,
  },
  {
    text: "Hash",
    color: true,
  },
  {
    text: "From",
    color: false,
  },
  {
    text: "To",
    color: false,
  },
  {
    text: "Timestamp",
    color: true,
  },
];

const tableData = [
  {
    shard: 0,
    timestamp: "08/04/2022, 19:17:58",
    hash: "0x78...f40c",
    from: "one1...wwkv",
    to: "one1...v40x",
   
  },
  {
    shard: 0,
    timestamp: "08/04/2022, 19:17:58",
    hash: "0x78...f40c",
    from: "one1...wwkv",
    to: "one1...v40x",
   
  },
  {
    shard: 0,
    timestamp: "08/04/2022, 19:17:58",
    hash: "0x78...f40c",
    from: "one1...wwkv",
    to: "one1...v40x",
   
  },
  {
    shard: 0,
    timestamp: "08/04/2022, 19:17:58",
    hash: "0x78...f40c",
    from: "one1...wwkv",
    to: "one1...v40x",
   
  },
  {
    shard: 0,
    timestamp: "08/04/2022, 19:17:58",
    hash: "0x78...f40c",
    from: "one1...wwkv",
    to: "one1...v40x",
   
  },
  {
    shard: 0,
    timestamp: "08/04/2022, 19:17:58",
    hash: "0x78...f40c",
    from: "one1...wwkv",
    to: "one1...v40x",
   
  },
  
 
 
];

function Transactions() {
  return (
    <section className="container">
      <div className={`section-wrapper`}>
        <div className={`section-title-1 white-bg`}>
          <h3>Latest Transactions</h3>
        </div>

        <DataTable tableRow={tableRow} tableData={tableData} />
      </div>
    </section>
  );
}

export default Transactions;
