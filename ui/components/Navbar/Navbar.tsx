import { Container, FlexBox } from "..";
import styles from "./styles.module.scss";

const Navbar = () => (
  <nav className={styles["navbar"]}>
    <Container fullHeight>
      <FlexBox justifyContent="between" alignItems="center">
        <h1>Navbar</h1>
        <FlexBox alignItems="center" spaceX={4}>
          <button>Link 1</button>
          <button>Link 2</button>
          <button>Link 3</button>
        </FlexBox>
      </FlexBox>
    </Container>
  </nav>
);

export default Navbar;
