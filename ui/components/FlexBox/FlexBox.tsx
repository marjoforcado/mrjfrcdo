import classNames from "classnames";
import styles from "./styles.module.scss";

type PropsType = {
  children: any;
  alignItems?: "start" | "end" | "center" | "baseline" | "stretch";
  justifyContent?:
    | "start"
    | "end"
    | "center"
    | "between"
    | "around"
    | "evently";
  spaceX?: 0 | 3 | 4;
};

const FlexBox = (props: PropsType) => {
  const {
    children,
    alignItems = "start",
    justifyContent = "start",
    spaceX = 0,
  } = props;

  return (
    <div
      className={classNames(
        styles["container"],
        styles[`align-items--${alignItems}`],
        styles[`justify-content--${justifyContent}`],
        styles[`space-x--${spaceX}`]
      )}
    >
      {children}
    </div>
  );
};

export default FlexBox;
