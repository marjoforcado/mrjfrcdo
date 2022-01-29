import { Button, Container } from "..";
import styles from "./styles.module.scss";

const Modal = () => (
  <div className={styles["backdrop"]}>
    <div className={styles["container"]}>
      <Container>
        <div className={styles["modal"]}>
          <Container>
            <div className={styles["wrapper"]}>
              <div className={styles["header"]}>
                <h1 className={styles["header__title"]}>title</h1>
                <div className={styles["header__actions"]}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles["header__icon"]}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 12H4"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles["header__icon"]}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
              <div className={styles["body"]}>here</div>
              <div className={styles["footer"]}>
                <Button size="small" variant="solid" rounded="md">
                  Close
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </Container>
    </div>
  </div>
);

export default Modal;
