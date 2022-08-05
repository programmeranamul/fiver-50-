import { Icon } from "@iconify/react";
import style from "../../styles/Search.module.css"

// 

function Search() {
  return (
    <section className="container">
      <div className="input-group mb-3 py-4">
        <span className={`input-group-text white-bg ${style.my_group}`} id="basic-addon1">
        <Icon icon="bi:search" className={`blue-color ${style.icon}`} />
        </span>
        <input
          type="text"
          className={`form-control white-bg ${style.my_input}`}
          placeholder="USearch by Address / Transaction Hash / Block / Tokensername"
         
        />
      </div>
    </section>
  );
}

export default Search;
