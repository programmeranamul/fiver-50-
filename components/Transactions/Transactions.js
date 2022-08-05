import style from "../../styles/Home.module.css";
import DataTable from "./../common/DataTable";

// const tableRow = ["Shard", "Hash", "From", "To", "Timestamp"];
const tableRow = [
  {
    text: "Shard",
  },
  {
    text: "Hash",
  },
  {
    text: "From",
  },
  {
    text: "To",
  },
  {
    text: "Timestamp",
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
    <section className={style.trasactions_table  }>
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
