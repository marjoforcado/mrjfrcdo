import { Button, Container, FlexBox } from "..";

import styles from "./styles.module.scss";

const Navbar = () => (
  <nav className={styles["navbar"]}>
    <Container fullHeight>
      <FlexBox justifyContent="between" alignItems="center">
        <h1 className={styles["brand"]}>Mrjfrcdo</h1>
        <Button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={styles["collapse-btn"]}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </Button>
        {/* <FlexBox alignItems="center" spaceX={4}>
          <Button>About</Button>
          <Button>Portfolio</Button>
          <Button>Contact</Button>
        </FlexBox> */}
      </FlexBox>
    </Container>
  </nav>
);

export default Navbar;
