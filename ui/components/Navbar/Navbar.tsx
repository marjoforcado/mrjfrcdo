import { Button, Container, FlexBox } from "..";

import styles from "./styles.module.scss";

const Navbar = () => (
  <nav className={styles["navbar"]}>
    <Container fullHeight>
      <div className={styles["nav-body"]}>
        <h1 className={styles["brand"]}>Mrjfrcdo</h1>
        <FlexBox spaceX={6} alignItems="center">
          <a>About</a>
          <a>Portfolio</a>
          <a>Contact</a>
        </FlexBox>
      </div>
    </Container>
  </nav>
);

export default Navbar;
