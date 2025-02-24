import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <h1 className={styles.header__title}>
          <strong>
            Hi, my name is <em>Nursultan</em>
          </strong>
          <br />a frontend developer
        </h1>
        <div className={styles.header__text}>
          <p>with passion for learning and creating.</p>
        </div>
        <a href="#!" className={`btn ${styles.customBtn}`}>
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Header;
