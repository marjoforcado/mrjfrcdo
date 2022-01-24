import { Button, Container, FlexBox } from "..";

import styles from "./styles.module.scss";

const Navbar = () => (
  <div className={styles["wrapper"]}>
    <nav className={styles["nav"]}>
      <Container centerHorizontal fullHeight>
        <div className={styles["content"]}>
          <h1 className={styles["brand"]}>Mrjfrcdo</h1>
          <div className={styles["items-right"]}>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={styles["toggle"]}
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
            </button>
          </div>
        </div>
      </Container>
    </nav>
    <div className={styles["dropdown"]}>dropdown</div>
  </div>
);

export default Navbar;
