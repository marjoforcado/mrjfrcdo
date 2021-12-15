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
};

const FlexBox = (props: PropsType) => {
  const { children, alignItems = "start", justifyContent = "start" } = props;

  return (
    <div
      className={classNames(
        styles["container"],
        styles[`align-items--${alignItems}`],
        styles[`justify-content--${justifyContent}`]
      )}
    >
      {children}
    </div>
  );
};

export default FlexBox;
