import style from "../../styles/TokenApprovals.module.css";
import ViewAllBtn from "./../common/ViewAllBtn";
import Link from "next/link";

function TokenApprovals() {
  return (
    <section>
      <article className="container">
        <h1 className="title-1 dark-white-color">Harmony Token Approvals</h1>
        <div
          className={`white-blue-bg ${style.description_box} lightgray-to-light-blue`}
        >
          <p className="fs-14 gray-light-blue mb-0">
            This tool will check your wallet for any token approvals and guide
            you on how to revoke these approvals. To begin, please click the
            Sign In Metamask button.
          </p>
          <p className="fs-14 mb-0 gray-light-blue">
            During periods of network congestion, it may take some time for the
            updated approval to be reflected in this tool.
          </p>
          <p className={`color-red-1 ${style.note}`}>
            <b>NOTE:</b> approvals are required for dApps to function properly.
            <b>Use this tool at your own risk</b>. For more information, check
            out the Knowledge Base.
          </p>
          <div className={style.meta_mask}>
            <ViewAllBtn text="Sign in Metamask" link="/" />
          </div>
        </div>
      </article>
    </section>
  );
}

export default TokenApprovals;
