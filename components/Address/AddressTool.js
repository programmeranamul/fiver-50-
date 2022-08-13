import { useTheme } from "../../lib/ThemeContext";
import style from "../../styles/AddressTool.module.css";

function AddressTool() {
    const { theme, setTheme, my } = useTheme();
    const lightTheme = theme === "Light";
  return (
    <div>
      <div className="my-4">
        <button className={`${lightTheme ? style.approve_btn_l : style.approve_btn_d} ${style.approve_btn}`}>Token Approval</button>
      </div>
      <div>
        <p className="mb-0 fs-14">
          This tool will check your wallet for any token approvals and guide you
          on how to revoke these approvals. To begin, please click the Sign In
          Metamask button.
        </p>
        <p className="fs-14">During periods of network congestion, it may take some time for the updated approval to be reflected in this tool.</p>
        <p className={style.note}><b>NOTE:</b> approvals are required for dApps to function properly. <b>Use this tool at your own risk</b>. For more information, check out the Knowledge Base.</p>
      </div>
      <div>
        <a className={`${style.meta_mask} ${lightTheme? style.meta_mask_l : style.meta_mask_d}`} href="#">Sign in Metamask</a>
      </div>
    </div>
  );
}

export default AddressTool;
