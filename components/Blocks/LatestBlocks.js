import React from "react";
import BlockDataTable from './BlockDataTable';

const tableRow = [
  {
    text: "Shard",
    color: true,
  },
  {
    text: "Height",
    color: true,
  },
  {
    text: "Transactions",
    color: false,
  },
  {
    text: "Timestamp",
    color: false,
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
    <section className="container mb-5">
      <div className={`section-wrapper`}>
        <div className={`section-title-1 white-bg`}>
          <h3>Latest Transactions</h3>
        </div>

        <BlockDataTable tableRow={tableRow} tableData={tableData} />
      </div>
    </section>
  );
}

export default LatestBlocks;
