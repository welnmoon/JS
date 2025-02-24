import { NavLink } from "react-router-dom";

import styles from "./Menu.module.css";

const MenuLink = ({ source, children }) => {
  return (
    <NavLink
      to={source}
      className={({ isActive }) => {
        return isActive
          ? `${styles.navListLink} ${styles.active}`
          : `${styles.navListLink}`;
      }}
    >
      {children}
    </NavLink>
  );
};

const Menu = () => {
  return (
    <ul className={styles.navList}>
      <MenuLink source={"/"}>Home</MenuLink>
      <MenuLink source={"/projects"}>Projects</MenuLink>
      <MenuLink source={"/contacts"}>Contacts</MenuLink>
    </ul>
  );
};

export default Menu;
