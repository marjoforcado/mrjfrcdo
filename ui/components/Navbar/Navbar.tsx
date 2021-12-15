import { Button, Container, FlexBox } from "..";
import styles from "./styles.module.scss";

const Navbar = () => (
  <nav className={styles["navbar"]}>
    <Container fullHeight>
      <FlexBox justifyContent="between" alignItems="center">
        <h1>Navbar</h1>
        <FlexBox alignItems="center" spaceX={4}>
          <Button>Link 1</Button>
          <Button>Link 2</Button>
          <Button>Link 3</Button>
        </FlexBox>
      </FlexBox>
    </Container>
  </nav>
);

export default Navbar;
