import styles from "./Footer.module.css";

import vk from "../../img/icons/vk.svg";
import twitter from "../../img/icons/twitter.svg";
import linkedin from "../../img/icons/linkedin.svg";
import gitHub from "../../img/icons/gitHub.svg";
import instagram from "../../img/icons/instagram.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerWrapper}>
          <ul className={styles.social}>
            <li className={styles.socialItem}>
              <a href="#!">
                <img src={vk} alt="Link" />
              </a>
            </li>
            <li className={styles.socialItem}>
              <a href="#!">
                <img src={instagram} alt="Link" />
              </a>
            </li>
            <li className={styles.socialItem}>
              <a href="#!">
                <img src={twitter} alt="Link" />
              </a>
            </li>
            <li className={styles.socialItem}>
              <a href="#!">
                <img src={gitHub} alt="Link" />
              </a>
            </li>
            <li className={styles.socialItem}>
              <a href="#!">
                <img src={linkedin} alt="Link" />
              </a>
            </li>
          </ul>
          <div className={styles.copyright}>
            <p>© 2025 frontend-dev.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
