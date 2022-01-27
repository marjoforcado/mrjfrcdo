import classNames from "classnames";

import styles from "./styles.module.scss";

type PropsType = {
  children: string;
  variant?: "outlined" | "solid";
  color?: "primary" | "secondary" | "link" | "quiet" | "loud";
  rounded?: "none" | "full";
  size?: "normal" | "large";
};

const Button = (props: PropsType) => {
  const {
    children,
    variant = "outlined",
    color = "primary",
    rounded = "none",
    size = "normal",
  } = props;

  return (
    <button
      className={classNames(
        styles["btn"],
        styles[`variant--${variant}`],
        styles[`color--${color}`],
        styles[`rounded--${rounded}`],
        styles[`size--${size}`]
      )}
    >
      {children}
    </button>
  );
};

export default Button;
