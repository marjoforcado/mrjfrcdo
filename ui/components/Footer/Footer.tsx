import { Container } from "..";

import styles from "./styles.module.scss";

const Footer = () => (
  <footer className={styles["footer"]}>
    <Container centerHorizontal>
      <div>
        <p className={styles["title"]}>Site Map</p>
        <ul className={styles["links"]}>
          <li>About</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <p className={styles["title"]}>Other Links</p>
        <ul className={styles["links"]}>
          <li>Site Update</li>
        </ul>
      </div>
    </Container>
    <div className={styles["sub-footer"]}>
      <Container>
        <p className={styles["last-update"]}>Last Update Jan 2020</p>
      </Container>
    </div>
  </footer>
);

export default Footer;
