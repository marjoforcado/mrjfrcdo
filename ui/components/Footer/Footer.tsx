import { Container } from "..";

import styles from "./styles.module.scss";

const Footer = () => (
  <footer className={styles["footer"]}>
    <Container centerHorizontal>
      <p>Site Map</p>
      <ul>
        <li>About</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </Container>
  </footer>
);

export default Footer;
