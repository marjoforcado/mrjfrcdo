import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import { Button, Container, Dropdown } from "..";
import { useOutsideClickListener } from "../../hooks";

import styles from "./styles.module.scss";

const Navbar = () => {
  const [isDropdownToggled, setIsDropdownToggled] = useState(false);
  const wrapperRef = useRef(null);
  const isClickedOutside = useOutsideClickListener(wrapperRef);

  useEffect(() => {
    if (isClickedOutside && isDropdownToggled) {
      setIsDropdownToggled(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isClickedOutside]);

  return (
    <div className={styles["wrapper"]} ref={wrapperRef}>
      <nav className={styles["nav"]}>
        <Container centerHorizontal fullHeight>
          <div className={styles["content"]}>
            <h1 className={styles["brand"]}>Mrjfrcdo</h1>
            <div className={styles["items-right"]}>
              {/* <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles["icons"]}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                  />
                </svg>
              </button> */}
              <Dropdown />
              <Button
                variant="text"
                onClick={() => setIsDropdownToggled((prev) => !prev)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles["icon"]}
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
            </div>
          </div>
        </Container>
      </nav>
      <div
        className={classNames(styles["dropdown"], {
          [styles["dropdown--is-toggled"]]: isDropdownToggled,
        })}
      >
        <ul className={styles["links-container"]}>
          <li>About</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
