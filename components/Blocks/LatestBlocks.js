import React from "react";
import BlockDataTable from "./BlockDataTable";
import style from "../../styles/Home.module.css";

const tableRow = [
  {
    text: "Shard",
  },
  {
    text: "Height",
  },
  {
    text: "Transactions",
  },
  {
    text: "Timestamp",
  },
];

const tableData = [
  {
    shard: 0,
    height: 29643386,
    transactions: 12,
    imestamp: "08/05/2022, 03:34:42",
  },
  {
    shard: 0,
    height: 29643386,
    transactions: 12,
    imestamp: "08/05/2022, 03:34:42",
  },
  {
    shard: 0,
    height: 29643386,
    transactions: 12,
    imestamp: "08/05/2022, 03:34:42",
  },
  {
    shard: 0,
    height: 29643386,
    transactions: 12,
    imestamp: "08/05/2022, 03:34:42",
  },
  {
    shard: 0,
    height: 29643386,
    transactions: 12,
    imestamp: "08/05/2022, 03:34:42",
  },
  {
    shard: 0,
    height: 29643386,
    transactions: 12,
    imestamp: "08/05/2022, 03:34:42",
  },
];

function LatestBlocks() {
  return (
    <section className={style.blocks_table}>
      <div className={`section-wrapper `}>
        <div
          className={`section-title-1 white-bg d-flex align-items-center justify-content-between`}
        >
          <h3>Latest Transactions</h3>
          <div>
            <select className={`form-select ${style.my_select}`} aria-label="Default select example">
              <option value="Shard 0">Shard 0</option>
              <option value="Shard 0">Shard 0</option>
              <option value="Shard 0">Shard 0</option>
            </select>
          </div>
        </div>

        <BlockDataTable tableRow={tableRow} tableData={tableData} />
      </div>
    </section>
  );
}

export default LatestBlocks;
