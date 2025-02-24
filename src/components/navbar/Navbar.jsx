import styles from "./Navbar.module.css";
import "../../styles/main.css";


import { NavLink } from "react-router-dom";
import Menu from "./menu/Menu";
import BtnDarkMode from "../Buttons/BtnDarkMode/BtnDarkMode";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className="container">
        <div className={styles.navRow}>
          <NavLink to="/" className={styles.logo}>
            <strong>Freelancer</strong> portfolio
          </NavLink>

          <BtnDarkMode />

          <Menu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
