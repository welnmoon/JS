import styles from "./BtnDarkMode.module.css";

import sun from "../../../img/icons/sun.svg";
import moon from "../../../img/icons/moon.svg";
import { useEffect, useRef } from "react";
import { useLocalStorage } from "../../../utils/useLocalStorage";

const BtnDarkMode = () => {
  //   const [darkMode, setDarkMode] = useState("light");

  const [darkMode, setDarkMode] = useLocalStorage("darkMode", "light");

  const btnRef = useRef(null);

  useEffect(() => {
    if (darkMode === "dark") {
      document.body.classList.remove("light");
      document.body.classList.add("dark");

      btnRef.current.classList.add(styles.darkModeBtnActive);
    } else if (darkMode === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");

      btnRef.current.classList.remove(styles.darkModeBtnActive);
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((cur) => {
      return cur === "light" ? "dark" : "light";
    });
  };

  return (
    <button
      ref={btnRef}
      className={styles.darkModeBtn}
      onClick={toggleDarkMode}
    >
      <img src={sun} alt="Light mode" className={styles.darkModeIcon} />
      <img src={moon} alt="Dark mode" className={styles.darkModeIcon} />
    </button>
  );
};

export default BtnDarkMode;
