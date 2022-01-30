import classNames from "classnames";
import { Button, Container } from "..";
import styles from "./styles.module.scss";

type PropsType = {
  isToggled?: boolean;
  onClose?: () => void;
};

const Modal = (props: PropsType) => {
  const { isToggled, onClose = () => {} } = props;

  return (
    <>
      <div
        className={classNames(styles["container"], {
          [styles["container--is-toggled"]]: isToggled,
        })}
      >
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
                    <button onClick={() => onClose()}>
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
                    </button>
                  </div>
                </div>
                <div className={styles["body"]}>here</div>
                <div className={styles["footer"]}>
                  <Button
                    size="small"
                    variant="solid"
                    rounded="md"
                    onClick={() => onClose()}
                  >
                    Close
                  </Button>
                </div>
              </div>
            </Container>
          </div>
        </Container>
      </div>
      <div
        className={classNames(styles["backdrop"], {
          [styles["backdrop--is-toggled"]]: isToggled,
        })}
      />
    </>
  );
};

export default Modal;
