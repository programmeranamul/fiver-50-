import style from "../../../styles/Header.module.css";
import Setting from './Setting';
import Tools from './Tools';
import Token from './Token';
import AddressFormat from './AddressFormat';

function NavMenu() {
 
  return (
    <div className={`d-flex align-items-center ${style.right_area}`}>
    <AddressFormat />
    <div className="d-flex">
      <Token />
      <Tools />
      <Setting />
    </div>
  </div>
  )
}

export default NavMenu