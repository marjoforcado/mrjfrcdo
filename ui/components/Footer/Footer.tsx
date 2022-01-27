import { Container, Text } from "..";

import styles from "./styles.module.scss";

const Footer = () => (
  <footer className={styles["footer"]}>
    <Container centerHorizontal>
      <Text color="secondary" size="sm" weight="bold">
        Site Map
      </Text>
      <ul className={styles["links"]}>
        <li>About</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
      <Text color="secondary" size="sm" weight="bold">
        Other Links
      </Text>
      <ul className={styles["links"]}>
        <li>Site Update</li>
        <li>Recruiter Hub</li>
      </ul>
    </Container>
    <div className={styles["sub-footer"]}>
      <Container>
        <Text size="sm" color="secondary">
          Last Update Jan 2022
        </Text>
      </Container>
    </div>
  </footer>
);

export default Footer;
