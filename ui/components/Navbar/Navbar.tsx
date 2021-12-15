import { Container, FlexBox } from "..";
import styles from "./styles.module.scss";

const Navbar = () => (
  <nav className={styles["navbar"]}>
    <Container fullHeight>
      <FlexBox justifyContent="between" alignItems="center">
        <h1>Navbar</h1>
      </FlexBox>
    </Container>
  </nav>
);

export default Navbar;
