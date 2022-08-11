import React from "react";
import BlockFilter from "./../../../components/Blocks/BlockFilter";
import BlockPageDataTable from "./../../../components/Blocks/BlockPageDataTable";

function BlockId() {
  const filtersList = [
    {
      text: "Shard 1",
      link: "/blocks/shard/1",
    },
    {
      text: "Shard 2",
      link: "/blocks/shard/2",
    },
    {
      text: "Shard 3",
      link: "/blocks/shard/3",
    },
  ];
  return (
    <section>
      <div className="container">
        <h1 className="title-2 dark-white-color fw-700 mb-4">Blocks</h1>
        <BlockFilter filtersList={filtersList} />
        <BlockPageDataTable />
      </div>
    </section>
  );
}

export default BlockId;
