import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import { Button } from "..";
import { useOutsideClickListener } from "../../hooks";
import styles from "./styles.module.scss";

const Dropdown = () => {
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
    <div className={styles["dropdown__wrapper"]} ref={wrapperRef}>
      <Button
        variant="text"
        onClick={() => setIsDropdownToggled((prev) => !prev)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={styles["dropdown__icon"]}
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
      </Button>
      <ul
        className={classNames(styles["dropdown__ul"], {
          [styles["dropdown__ul--is-toggled"]]: isDropdownToggled,
        })}
      >
        <li>EN</li>
        <li>JP</li>
      </ul>
    </div>
  );
};

export default Dropdown;
