import { Container } from "..";
import styles from "./styles.module.scss";

const Navbar = () => (
  <nav className={styles["navbar"]}>
    <Container fullHeight>Navbar</Container>
  </nav>
);

export default Navbar;
