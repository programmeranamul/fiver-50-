import style from "../styles/hrc20.module.css"
import Search from './../components/common/Search';
import HRC20TableWrapper from './../components/hrc20/HRC20TableWrapper';
import HrcDataTable from './../components/hrc20/HrcDataTable';


function hrc20() {
  return (
    <>
      <section>
        <article className="container">
        <h1 className="title-2 dark-white-color fw-700">HRC20 Tokens</h1>
        <HRC20TableWrapper />
       
        </article>
      </section>
    </>
  );
}

export default hrc20;
