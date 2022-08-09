import style from "../../styles/BlockHash.module.css"
import BlockHashTable from './../../components/BlockHash/BlockHashTable';

function BlockHash() {
  return (
    <section>
      <div className="container">
        <h1 className="title-2 dark-white-color fw-700 mb-4">
          Block #29822091
        </h1>   
        <BlockHashTable />     
      </div>
    </section>
  );
}

export default BlockHash;
